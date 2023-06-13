const userRouter = require('express').Router();
const session = require('express-session');
const projectModel = require('../models/projectModel');
const userModel = require('../models/userModel');
const authguard = require('../services/authguard');


//faire une route de déconnexion


//affiche la page home
userRouter.get('/', async (req, res) => {
    try {
        res.render('pages/home.twig');
    } catch (err) {
        res.send(err);
    }
});

//affiche la page about-me
userRouter.get('/about-me', async (req, res) => {
    try {
        res.render('pages/about-me.twig');
    } catch (err) {
        res.send(err);
    }
});


//récupérer tous les projets pour les afficher sur le dashboard
userRouter.get('/dashboard',/*authguard,*/ async (req, res) => {
    try {
        let project = await projectModel.find()
        res.render("pages/dashboard.twig", {
            projects: project
        });
    } catch (error) {
        console.log();
        res.send(error);
    }
});

userRouter.get('/login', async (req, res) => {
    try {
        res.render("pages/login.twig");
    } catch (error) {
        res.send(error);
    }
});

userRouter.post('/login', async (req, res) => {
    try {
        let user = await userModel.findOne({ mail: req.body.mail, password: req.body.password });
        if (user) {
            req.session.userId = user._id;
            res.redirect("/dashboard");
        } else {
            res.status(400);
            res.redirect("/login")
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = userRouter;