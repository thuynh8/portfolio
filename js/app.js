/**
 * Created by Tyler Huynh on 12/31/16.
 * AngularJS App Module
 */

var app = angular.module("myApp", []);
app.controller('myCtrl', function($scope) {
    $scope.skills = [
        {name: "HTML5", faName: "fa-html5", faColor: "#e44d26;"},
        {name: "CSS3", faName: "fa-css3", faColor: "#1E90FF;"},
        {name: "JavaScript", faName: "fa-braille", faColor: "#1de9b6;"},
        {name: "Bootstrap", faName: "fa-life-saver", faColor: "#5a4181;"},
        {name: "Python", faName: "fa-code", faColor: "#00b0ff;"},
        {name: "AngularJS", faName: "fa-cogs", faColor: "#FF0000;"},
        {name: "AJAX", faName: "fa-server", faColor: "#9370DB;"},
        {name: "SQL", faName: "fa-database", faColor: "#DB7093;"}
    ];
    $scope.projects = [
        {
            name: "Broadway",
            id: "p4",
            pic: "images/broadway.png",
            git: "https://github.com/thuynh8/broadway",
            link: "https://thuynh8.github.io/broadway/",
            description: "In this project, I created a web site for broadway, a fictional web" +
            " design agency. Besides jQuery, I used animate.css and aos.css to enhance the "  +
            "look of the website and improve user experience.",
            tools: ["HTML5", "CSS3", "Bootstrap", "jQuery", "aos.css", "animate.css"]
        },
        {
            name: "Linux Server Configuration",
            id: "p3",
            pic: "images/linuxProject.jpg",
            git: "https://github.com/thuynh8/udacity-linux-server-configuration-project",
            link: "https://github.com/thuynh8/udacity-linux-server-configuration-project",
            description: "Installed and configured all required software to turn a baseline Ubuntu" +
            " Amazon Web Services server into a fully functional web application server, including" +
            " Apache Web Server and PostgreSQL database server.",
            tools: ["SSH", "Linux", "Apache", "PostgreSQL"]
        },
        {
            name: "Neighborhood Map",
            id: "p2",
            pic: "images/mapProject.png",
            git: "https://github.com/thuynh8/udacity-neighborhoodmap-project",
            link: "https://neighborhood-google-map.herokuapp.com/",
            description: "Developed a full-page Google map that loads with points of interest in Orange County, CA.",
            tools: ["Javascript", "KnockoutJS", "AJAX", "Google Map API", "Yelp API"]
        },
        {
            name: "Item Catalog",
            id: "p1",
            pic: "images/catalogProject.png",
            git: "https://github.com/thuynh8/udacity-catalog-project",
            link: "https://catalog-2016.herokuapp.com/",
            description: "Developed a web application that provides a list of items within a variety of categories" +
            " and integrate third party user registration and authentication.",
            tools: ["Flask", "SQLAlchemy", "Google and Facebook APIs & Oauth2"]
        }
    ];
    $scope.tags = [
        {
            items: ["Web", "Developer", "Freelance", "Html5", "Css3", "JavaScript", "jQuery", "AngularJS", "Bootstrap",
            "Python", "SQL", "Database", "Relational", "Ajax"]
        }
    ];
})