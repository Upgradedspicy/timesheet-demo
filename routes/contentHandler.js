"use strict";

module.exports.getMain = function(req, res) {
    if (req.isAuthenticated()) {
        res.render('timesheets', {user: req.user});
    }
    else {
        res.render('index', {user: req.user});
    }
};

module.exports.getProjects = function(req, res) {
    res.render('projects', {user: req.user});
};

module.exports.getAbout = function(req, res) {
    res.render('about', {user: req.user});
};

module.exports.getContact = function(req, res) {
    res.render('contact', {user: req.user});
};
