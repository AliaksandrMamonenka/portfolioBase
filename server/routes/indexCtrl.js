var express = require('express');
var passport = require('passport');
var Account = require('../models/account');

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('layout', { user: req.user });
    });

    router.post('/registration', function (req, res) {

        Account.register(new Account({ username: req.body.username }), req.body.password, function (err, account) {
            if (err) {
                console.log(err);
            }

            passport.authenticate('local')(req, res, function () {
                res.json({ success: true })
            });
        });
    });

    router.post('/authorization', passport.authenticate('local'), function (req, res) {
        res.json({ success: true })
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};













