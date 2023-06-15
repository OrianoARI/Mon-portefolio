const userRouter = require('express').Router();
const session = require('express-session');
const projectModel = require('../models/projectModel');
const userModel = require('../models/userModel');
const authguard = require('../services/authguard');
const transporter = require('../services/mail');



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

userRouter.post('/sendMail', async (req, res) => {
    try {
        const mailOptions = {
            from: req.body.mail,
            to: 'oandreoli88@gmail.com',
            subject: 'Formulaire de contact Portefolio',
            text: `Nom: ${req.body.name}\nPrénom: ${req.body.firstname}\nAdresse e-mail: ${req.body.mail}\nNuméro de téléphone: ${req.body.tel}\nMessage: ${req.body.message}`
        };
    
        // Envoi de l'e-mail
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                let mailError = "Votre mail n'a pas été envoyé"
                res.render("pages/home.twig", {
                    mailError : mailError
                });
                // Gérer l'erreur d'envoi de l'e-mail ici (affichage d'un message d'erreur, redirection vers une page d'erreur, etc.)
            } else {
                console.log('E-mail envoyé : ' + info.response);
                let mailSuccess = "Votre mail a bien été envoyé"
                res.render("pages/home.twig", {
                    mailSuccess : mailSuccess
                });
                // Gérer la confirmation d'envoi de l'e-mail ici (affichage d'un message de confirmation, redirection vers une page de confirmation, etc.)
            }
        });
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


userRouter.post

module.exports = userRouter;