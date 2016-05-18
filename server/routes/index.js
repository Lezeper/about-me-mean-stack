var express = require('express');
const _ = require('lodash');
var today = new Date();

module.exports = function(app) {

    app.use('/api/project', require('./api/project'));

    app.route('/').get(function(req, res){
        res.render('index', { title: 'Express Setup!', year: today.getFullYear() });
    });

    app.route('/admin').get(function(req, res){

        res.render('admin', { title: 'Admin panel', year: today.getFullYear() });
    });
};
