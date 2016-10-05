/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /**
     * Test suite for RSS Feeds
     */
    describe('RSS Feeds', function() {
        //Test that feeds are defined.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //Test to check feed URL is defined and not empty.
        it('Url defined', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        //Test to check feed name is defoned and not empty.
        it('Name defined', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
     * Test suite for Menu.
     */
    describe('Menu', function() {
        //Test to check menu is hidden by default.
        it('Menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //Test to check menu visibility changes on click.
        it('Menu visibility changes on click', function() {
            var menu = $('.menu-icon-link');

            menu.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            menu.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });
    /**
     * Test suite for initial entries.
     */
    describe("Initial Entries", function() {
        //setup
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        //Test to check loadfeed is called and has minimum of one entry.
        it('has minimum of one entry', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });
    //Test suite for New Feed Selection
    describe("New Feed Selection", function() {

        var load1,
            load2;

        beforeEach(function(done) {
          loadFeed(0, function() {
            load1 = $('.feed').html();
            loadFeed(1, function() {
              load2 = $('.feed').html();
              done();
            });
          });
        });
        
        //Test to check when loadfeed is called new entry is added.
        it("changes its content", function(done) {
            expect(load1).not.toBe(load2);
            done();
        });

    });
}());
