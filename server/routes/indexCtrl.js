var express = require('express');
var passport = require('passport');
var Account = require('../models/account');

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('layout', { user: req.user });
    });

    router.post('/registration', function (req, res) {
        console.log(req.body);
        Account.register(new Account({ username: req.body.username }), req.body.password, function (err, account) {
            if (err) {
                // return res.render('register', { account: account });
                console.log(err);
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    });

    // router.get('/login', function (req, res) {
    //     res.render('login', { user: req.user });
    // });

    // router.post('/login', passport.authenticate('local'), function (req, res) {
    //     res.redirect('/');
    // });

    // router.get('/logout', function (req, res) {
    //     req.logout();
    //     res.redirect('/');
    // });

    router.get('/ping', function (req, res) {
        res.status(200).send("pong!");
    });
};













