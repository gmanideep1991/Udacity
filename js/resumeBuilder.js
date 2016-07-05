var bio = {
    "name": "Manideep Gattamaneni",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "012-345-678",
        "email": "gmanideep1991@gmail.com",
        "github": "gmanideep1991",
        "location": "overland park, kansas"
    },
    "welcomeMessage": "Hello, Everyone welcome to my page",
    "skills": ["javascript", "HTML", "CSS", "java", "C#"],
    "biopic": "images/fry.jpg",
    display: function() {
        var $contacts = bio.contacts;
        var headerName = replaceHTML(HTMLheaderName, bio.name);
        var headerRole = replaceHTML(HTMLheaderRole, bio.role);
        var contactMobile = replaceHTML(HTMLmobile, $contacts.mobile);
        var contactEmail = replaceHTML(HTMLemail, $contacts.email);
        var git = replaceHTML(HTMLgithub, $contacts.github);
        var loc = replaceHTML(HTMLlocation, $contacts.location);
        var message = replaceHTML(HTMLwelcomeMsg, bio.welcomeMessage);
        var picUrl = replaceHTML(HTMLbioPic, bio.biopic);
        $("#header").prepend([headerName, headerRole]);
        $("#topContacts").append([contactMobile, contactEmail, git, loc]);
        $("#footerContacts").append([contactMobile, contactEmail, git, loc]);
        $("#header").append([picUrl, message, HTMLskillsStart]);
        bio.skills.forEach(function(val) {
            var skill = replaceHTML(HTMLskills, val);
            $("#skills").append(skill);
        });


    }
};
var education = {
    "schools": [{
        "name": "University of Missouri",
        "location": "Kansas City, Missouri",
        "degree": "Masters",
        "majors": ["CS"],
        "dates": "2014",
        "url": "http://www.umkc.edu/"
    }, {
        "name": "GITAM University",
        "location": "Vizag, India",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": "2012",
        "url": "http://www.gitam.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        education.schools.forEach(function(val) {
            $("#education").append(HTMLschoolStart);
            var schoolName = replaceHTML(HTMLschoolName, val.name);
            schoolName = replaceHTML(schoolName, val.url, "#");
            var schoolLocation = replaceHTML(HTMLschoolLocation, val.location);
            var schoolDegree = replaceHTML(HTMLschoolDegree, val.degree);
            var schoolDates = replaceHTML(HTMLschoolDates, val.dates);
            var majors = "";
            val.majors.forEach(function(major){
              majors += major;
            });
            var schoolMajors = replaceHTML(HTMLschoolMajor, majors);
            $(".education-entry:last").append([schoolName + schoolDegree, schoolDates, schoolMajors, schoolLocation]);
        });
        if (education.onlineCourses.length) {
            $("#education").append(HTMLonlineClasses);
        }
        education.onlineCourses.forEach(function(val) {
            $("#education").append(HTMLschoolStart);
            var onlineTitle = replaceHTML(HTMLonlineTitle, val.title);
            onlineTitle = replaceHTML(onlineTitle, val.url, "#");
            var onlineSchool = replaceHTML(HTMLonlineSchool, val.school);
            var onlineDates = replaceHTML(HTMLonlineDates, val.dates);
            var onlineURL = replaceHTML(HTMLonlineURL, val.url);
            $(".education-entry:last").append([onlineTitle + onlineSchool, onlineDates, onlineURL]);
        });
    }
};
var work = {
    "jobs": [{
        "employer": "Cerner Corporation",
        "title": "Software Engineer",
        "location": "Kansas City, Missouri",
        "dates": "in progess",
        "description": "lorem ipsum dolor",
        "url": "http://www.cerner.com/"
    }, {
        "employer": "Thoughtlab",
        "title": "Web Developer",
        "location": "Saltlake City, Utah",
        "dates": "September 2014 - October 2015",
        "description": "lorem ipsum dolor",
        "url": "https://www.thoughtlab.com/"
    }],
    display: function() {
        work.jobs.forEach(function(val) {
            $("#workExperience").append(HTMLworkStart);
            var workEmployer = replaceHTML(HTMLworkEmployer, val.employer);
            workEmployer = replaceHTML(workEmployer, val.url, "#");
            var workTitle = replaceHTML(HTMLworkTitle, val.title);
            var workDates = replaceHTML(HTMLworkDates, val.dates);
            var workLocation = replaceHTML(HTMLworkLocation, val.location);
            var workDescription = replaceHTML(HTMLworkDescription, val.description);
            $(".work-entry:last").append([workEmployer + workTitle, workDates, workLocation, workDescription]);
        });
    }
};
var projects = {
    "projects": [{
        "title": "project A",
        "dates": "2014",
        "description": "mock project",
        "images": ["images/197x148.gif"]
    }],
    display: function() {
        projects.projects.forEach(function(val) {
            $("#projects").append(HTMLprojectStart);
            var projTitle = replaceHTML(HTMLprojectTitle, val.title);
            projTitle.replace("#", val.url);
            var projDates = replaceHTML(HTMLprojectDates, val.dates);
            var projDescription = replaceHTML(HTMLprojectDescription, val.description);
            $(".project-entry:last").append([projTitle, projDates, projDescription]);
            val.images.forEach(function(val){
              var projImages = replaceHTML(HTMLprojectImage,val);
              $(".project-entry:last").append(projImages);
            });
        });
    }
};

$("#mapDiv").append(googleMap);
bio.display();
work.display();
education.display();
projects.display();

initializeMap();

function replaceHTML(HTMLvariable, data, stringToReplace = "%data%") {
    return HTMLvariable.replace(stringToReplace, data);
}