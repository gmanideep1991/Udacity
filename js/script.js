var locations = [{
    query: "Kansas city power and light co",
    lat: 39.099956,
    long: -94.583673
}, {
    query: "H&R Block",
    lat: 39.098166,
    long: -94.582303
}, {
    query: "The Nelson-Atkins Museum of art",
    lat: 39.048540,
    long: -94.580644
}, {
    query: "National World War I Museum",
    lat: 39.084734,
    long: -94.585906
}, {
    query: "Baseball Museum",
    lat: 39.094993,
    long: -94.562904
}];
var map;
var prev_info_window = false;
function AppViewModel() {
    var self = this;
    this.locationList = ko.observableArray([]);
    locations.forEach(function(val) {
        self.locationList.push(new buildLocation(val));
    });
    this.searchTerm = ko.observable("");
    this.filteredList = ko.computed(function() {
        var filter = self.searchTerm().toLowerCase();
        if (!filter) {
            self.locationList().forEach(function(location) {
                location.visible(true);
            });
            return self.locationList();
        } else {
            return ko.utils.arrayFilter(self.locationList(), function(location) {
                var string = location.query.toLowerCase();
                var result = (string.search(filter) >= 0);
                location.visible(result);
                return result;
            });
        }
    }, self);
}
/**
 * [Build the markers for the location]
 * @param  data [location data]
 */
function buildLocation(data) {
    var self = this;
    this.visible = ko.observable(true);
    this.query = data.query;
    this.marker = buildMarker(data);
    this.infoWindow = new google.maps.InfoWindow({
    });
    this.marker.addListener('click', function() {
        loadContent(data, self);
        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            self.marker.setAnimation(null);
        }, 2100);
    });
    this.showMarker = ko.computed(function() {
      this.marker.setMap(this.visible()=== true ? map : null);
    }, this);
}
/**
 * [Creates the marker for the venue]
 * @param  data [json data of the venue]
 * @return [Google marker]
 */
function buildMarker(data) {
    return new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.long),
        map: map
    });
}
/**
 * [Create the info window for the marker]
 * @param  data [data of the venue]
 * @param  self [google maps marker]
 */
function loadContent(data, self) {

    var clientId = "UEUQTTY4QUOVGYGCCFZN5BSPK0RINHAJOXMKXKI3ULALTT1W";
    var clientSecret = "R1HU5A2BBMEKALYEQHHIBEYXU1VRUJ0SWALXN1MUDVJZG2MD";
    var url = "https://api.foursquare.com/v2/venues/search";
    $.getJSON(url, {
        client_id: clientId,
        client_secret: clientSecret,
        v: 20160108,
        query: data.query,
        ll: data.lat + "," +
            data.long,
        limit: 1
    }).done(function(data) {
       var venue = data.response.venues[0];
       var contentString ="<div class='info-window'>"+
                          getTitle(venue.name) +
                          getUrl(venue.url) +
                          getFormattedAddress(venue.location.formattedAddress) +
                          getPhoneNumber(venue.contact.formattedPhone)+
                          "<div class='third-party'><i>powered by foursquare</i></div>"+
                          "</div>";
       if(prev_info_window){
         prev_info_window.close();
       }
       prev_info_window = self.infoWindow;
        self.infoWindow.setContent(contentString);
        self.infoWindow.open(map,self.marker);
    }).fail(function(data){
      alert("Error in loading details from foursquare.");
    });
}
/**
 * [Create an HTML element with address]
 * @param  {[string]} formattedAddress [formatted address of the venue]
 * @return {[string]}                  [HTML element with formatted address]
 */
function getFormattedAddress(formattedAddress){
  var address = "";
  for(i=0;i<formattedAddress.length;i++){
    address += formattedAddress[i] + (i === formattedAddress.length-1 ? "":", ");
  }
  return "<div class=address>"+address+"<//div>";
}
/**
 * [Create an HTML element with title]
 * @param  {[string]} name [Full name of the venue]
 * @return {[string]}      [HTML element with name]
 */
function getTitle(name){
  return "<div class=title>"+ name + "</div>";
}
/**
 * [Create an HTML element with URL]
 * @param  {[string]} url [url for the venue]
 * @return {[string]}     [html element with URL]
 */
function getUrl(url){
  return url !==undefined ? '<div class="content"><a href="' + url +'">' + url + "</a></div>":"";
}
/**
 * [Create an HTML element with phone number]
 * @param  {[string]} phoneNumber [phone number of the venue]
 * @return {[string]}             [html element with phone number]
 */
function getPhoneNumber(phoneNumber){
  return '<div class="phone-number">' + phoneNumber + "</div>";
}
/**
 * [initial function to start the application]
 */
function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 39.076344,
            lng: -94.579997
        }
    });
    ko.applyBindings(new AppViewModel());
}