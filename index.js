var app = new Vue({
    el: '#app',
    data: {
        activeNavMenu: false,
        experience: [{

        }],
        education: {
            school: "University of Virginia",
            school_logo: "./images/uva-logo.jpg",
            major: "B.S. in Computer Science",
            minor: "Minor in Studio Art",
            date_range: "Summer 2011 - Summer 2015"
        },
        projects: [{
            title: "Pixelpad",
            description: "A simple sketchpad for creating favicons and art pixel by pixel and downloading your creations",
            preview_image_url: "./images/pixelpad-preview.png",
            demo: "http://mggwxyz.github.io/pixelpad",
            src: "http://www.github.com/mggwxyz/pixelpad",
            technologies: ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap"]
        }, {
            title: "Neighborhood Map",
            preview_image_url: "./images/neighborhood-map-preview.png",
            description: "A map application to find anything you want nearby using Yelp's and Google Maps' APIs",
            demo: "http://mggwxyz.github.io/neighborhood-map",
            src: "http://www.github.com/mggwxyz/neighborhood-map",
            technologies: ["HTML", "CSS", "Javascript", "Knockout.js"]
        }, {
            title: "Verbal Clock",
            preview_image_url: "./images/verbal-clock-preview.png",
            description: "A clock that will display the time written out in a sentence and also read it out to you",
            demo: "http://mggwxyz.github.io/verbal-clock",
            src: "http://www.github.com/mggwxyz/verbal-clock",
            technologies: ["HTML", "CSS", "Javascript"]
        }, {
            title: "Google Homepage",
            description: "An attempt to test my growing knowledge of HTML, CSS, and Chrome DevTools by trying to recreate the google homepage",
            preview_image_url: "./images/google-homepage-preview.png",
            demo: "http://mggwxyz.github.io/google-homepage",
            src: "http://www.github.com/mggwxyz/google-homepage",
            technologies: ["HTML", "CSS"]
        }]
    },
    methods: {

    }
}).$mount('#app');
