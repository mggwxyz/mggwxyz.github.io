var app = new Vue({
    el: '#app',
    data: {
        activeNavMenu: false,
        about_me: {
            paragraphs: [
                "My name is Michael Gilbertson and I have just completed a B.S. in Computer Science with a minor in Studio Art.",
                "Like most other people I’ve have met, I found it difficult to decide on what I should major in while attending school, but sincerely believe that I’ve chosen a major/minor combination in which I can explore my passions for both technology and design. My creative thinking, abundant curiosity, and easy-going attitude will make me a great fit in the workplace.  I am eager to learn all that my peers are able to offer me. ",
                "This life is a short one, and I want to make the most of it."
            ]
        },
        experience: {
            fulltime_jobs: [{
                position: "Full Stack Developer",
                company: "Accenture Federal Services",
                company_logo_url: "./images/accenture-logo.png",
                description: "My responsibilities included was to help to develop a national scheduling system for naturalization applicants",
                date_range: "September 2015 - present"
            },{
                position: "Software Developer",
                company: "Agilex Technologies LLC",
                company_logo_url: "./images/agilex-logo.png",
                description: "My responsibilities included leading scrum meetings and developing apps using AngularJS",
                date_range: "June 2015 - August 2015"
            }],
            internships: [{
                position: "DSO - Audience Engagement Intern",
                company: "AARP",
                company_logo_url: "./images/aarp-logo.png",
                description: "My responsibilities included managing published content within AARP's CMS, developing new strategies for community engagement, and brainstorming ideas about how to increase overall site traffic.",
                date_range: "May 2014 - August 2014"
            }, {
                position: "DSO - Product Intern",
                company: "AARP",
                company_logo_url: "./images/aarp-logo.png",
                description: "My responsibilities included analyzing and evaluating the accessbility of AARP's website with multiple screen readers and browsers in accordance with WCAG 2.0.",
                date_range: "May 2013 - August 2013"
            }],
            education: {
                school: "University of Virginia",
                school_logo: "./images/uva-logo.jpg",
                major: "B.S. in Computer Science",
                minor: "Minor in Studio Art",
                date_range: "August 2011 - May 2015"
            }
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
            title: "Talking Clock",
            preview_image_url: "./images/verbal-clock-preview.png",
            description: "A clock that will display the time written out in a sentence and also read it out to you",
            demo: "http://mggwxyz.github.io/talking-clock",
            src: "http://www.github.com/mggwxyz/talking-clock",
            technologies: ["HTML", "CSS", "Javascript"]
        }, {
            title: "Google Homepage",
            description: "An attempt to test my growing knowledge of HTML, CSS, and Chrome DevTools by trying to recreate the google homepage",
            preview_image_url: "./images/google-homepage-preview.png",
            demo: "http://mggwxyz.github.io/google-homepage",
            src: "http://www.github.com/mggwxyz/google-homepage",
            technologies: ["HTML", "CSS"]
        }]
    }
}).$mount('#app');
