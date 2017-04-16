require('chromedriver');
var assert = require("assert");
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

describe('mggwxyz.github.io', function(){

    it('should work', function(){

        assert.equal(true , true);

        // var driver = new webdriver.Builder()
        //     .forBrowser('chrome')
        //     .build();
        //
        // driver.get('http://www.google.com');
        // driver.getTitle().then(function(title) {
        //     console.log('Title: ', title);
        //     driver.quit();
        //     done();
        // });

    });


    it('should know that 1 + 1 = 2', function(){
        assert.equal(1 + 1 , 2);
    });
});

