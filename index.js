var app = new Vue({
    el: '#app',
    data: {
        activeNavMenu: false,
        projects: [{
            title: "Pixelpad",
            description: "A simple sketchpad for making favicons and pixel art",
            demo: "http://mggwxyz.github.io/pixelpad",
            src: "http://www.github.com/mggwxyz/pixelpad"
        }, {
            title: "Neighborhood Map",
            description: "A map application to find anything you want nearby using Yelp's and Google Maps' APIs",
            demo: "http://mggwxyz.github.io/neighborhood-map",
            src: "http://www.github.com/mggwxyz/neighborhood-map"
        }, {
            title: "Verbal Clock",
            description: "A clock that will display the time written out in a sentence.",
            demo: "http://mggwxyz.github.io/verbal-clock",
            src: "http://www.github.com/mggwxyz/verbal-clock"
        }, {
            title: "Google Homepage",
            description: "An attempt to test my HTML, CSS, DevTools knowledge by trying to recreated the google homepage",
            demo: "http://mggwxyz.github.io/google-homepage",
            src: "http://www.github.com/mggwxyz/google-homepage"
        }]
    }
}).$mount('#app');
