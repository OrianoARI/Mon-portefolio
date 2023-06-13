const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const projectRouter = require('./routes/projectsRouter');
const userRouter = require('./routes/userRouter');


require("dotenv").config();


const app = express();

app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(function (req, res, next) {//récupère la cession utilisateur si connecté sur toutes les pages
    res.locals.admin = req.session

    next()
})


app.use(projectRouter);
app.use(userRouter);

const start = async () => {
    
    if (!process.env.DB_URI) {
        throw new Error('auth DB_URI must be defined');
    }
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Server connected to MongoDb!');
    } catch (err) {
       
        console.error(err);
    }

    const PORT = process.env.SERVER_PORT;
    app.listen(PORT, () => {
        console.log(`Server is listening on ${process.env.PORT}!!!!!!!!!`);
    });
};
start()