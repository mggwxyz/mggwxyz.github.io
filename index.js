// var router = new VueRouter({
//     routes: [{
//         path: '/home'
//     }]
// });

var app = new Vue({
    el: '#app',
    data: {
        activeNavMenu: false,
        blah: 'blah blah blah',
        examples: [{
            title: 'column',
        }],
        projects: [{
            title: "Pixelpad",
            description: "A clock that will display the time written out in a sentence.",
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
        }],
        resume: {
            "basics": {
                "name": "John Doe",
                "label": "Programmer",
                "picture": "",
                "email": "john@gmail.com",
                "phone": "(912) 555-4321",
                "website": "http://johndoe.com",
                "summary": "A summary of John Doe...",
                "location": {
                    "address": "2712 Broadway St",
                    "postalCode": "CA 94115",
                    "city": "San Francisco",
                    "countryCode": "US",
                    "region": "California"
                },
                "profiles": [{
                    "network": "Twitter",
                    "username": "john",
                    "url": "http://twitter.com/john"
                }]
            },
            "work": [{
                "company": "Company",
                "position": "President",
                "website": "http://company.com",
                "startDate": "2013-01-01",
                "endDate": "2014-01-01",
                "summary": "Description...",
                "highlights": [
                    "Started the company"
                ]
            }],
            "volunteer": [{
                "organization": "Organization",
                "position": "Volunteer",
                "website": "http://organization.com/",
                "startDate": "2012-01-01",
                "endDate": "2013-01-01",
                "summary": "Description...",
                "highlights": [
                    "Awarded 'Volunteer of the Month'"
                ]
            }],
            "education": [{
                "institution": "University",
                "area": "Software Development",
                "studyType": "Bachelor",
                "startDate": "2011-01-01",
                "endDate": "2013-01-01",
                "gpa": "4.0",
                "courses": [
                    "DB1101 - Basic SQL"
                ]
            }],
            "awards": [{
                "title": "Award",
                "date": "2014-11-01",
                "awarder": "Company",
                "summary": "There is no spoon."
            }],
            "publications": [{
                "name": "Publication",
                "publisher": "Company",
                "releaseDate": "2014-10-01",
                "website": "http://publication.com",
                "summary": "Description..."
            }],
            "skills": [{
                "name": "Web Development",
                "level": "Master",
                "keywords": [
                    "HTML",
                    "CSS",
                    "Javascript"
                ]
            }],
            "languages": [{
                "name": "English",
                "level": "Native speaker"
            }],
            "interests": [{
                "name": "Wildlife",
                "keywords": [
                    "Ferrets",
                    "Unicorns"
                ]
            }],
            "references": [{
                "name": "Jane Doe",
                "reference": "Reference..."
            }]
        }
    }
    // router: router
}).$mount('#app');
