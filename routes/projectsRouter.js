const projectRouter = require("express").Router();
const projectModel = require("../models/projectModel");
const authguard = require("../services/authguard");
const upload = require("../services/multer");
const fs = require('fs');


//récupérer tous les projets pour les afficher sur la page publique
projectRouter.get('/projects', async (req, res) => {
    try {
        let project = await projectModel.find()
        res.render("pages/projects.twig", {
            projects: project
        });
    } catch (error) {
        res.send(error);
    }
});





//créer un nouveau projet
projectRouter.post('/addProject', upload.single("image"), async (req, res) => {
    try {
        if (req.file.filename) {
            req.body.image = req.file.filename
        }
        let timestamp = Date.now();
        let date = new Date(timestamp)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let formattedDate = `${day}/${month}/${year}`;
        req.body.date = formattedDate;
        let project = new projectModel(req.body);
        await project.save();
        console.log(req.body);
        res.redirect('/dashboard');
    } catch (error) {
        res.send(error);
    }
});


//récupérer un projet pour le modifier
projectRouter.get('/updateProject/:id', async (req, res) => {
    try {
        let project = await projectModel.findOne({ _id: req.params.id })
        res.render("pages/dashboard.twig", {
            project: project
        });
    } catch (error) {
        console.log();
        res.send(error);
    }
});

//modifier un projet

projectRouter.post('/updateProject/:id', upload.single("image"), async (req, res) => {
    try {
        let timestamp = Date.now();
        let date = new Date(timestamp)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let formattedDate = `${day}/${month}/${year}`;
        if (req.file) {
            let project = await projectModel.findOne({ _id: req.params.id });
            let imagePath = `./assets/uploads/${project.image}`;
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
            req.body.image = req.file.filename;
        }
        req.body.date = formattedDate;
        let project = await projectModel.updateOne(req.body);
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});


//supprimer les projets

projectRouter.get('/deleteProject/:id', async (req, res) => {
    try {
        let project = await projectModel.findOne({ _id: req.params.id });
        if (project.image) {
            let imagePath = `./assets/uploads/${project.image}`;
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            } else {
                console.log('merde');
                throw error;
            }
        }
        await projectModel.deleteOne({ _id: req.params.id });
        res.redirect("/dashboard");
    } catch (error) {
        console.log('remerde');
        res.send(error);
    }
});


// projectRouter.get('/deleteProject/:id', async (req, res) => {
//     try {
//         let project = await projectModel.deleteOne({ _id: req.params.id })
//         if (req.file) {
//             req.body.image = req.file.filename;
//         }
//         res.redirect("/dashboard")
//     } catch (error) {
//         console.log();
//         res.send(error);
//     }
// });

//scrollreveal()


module.exports = projectRouter;
