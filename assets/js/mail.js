const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // 587 -> TLS & 465 -> SSL
    secure: true, //
    auth: {
        user: 'oandreoli88@gmail.com', // email de votre votre compte google
        pass: 'Owen1070F1700!' // password de votre compte google
    }
});


transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Serveur prêt à envoyer des e-mails');
    }
});


// Ecoute de l'événement submit du formulaire
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupération des valeurs des champs du formulaire
    const name = document.querySelector('input[name="name"]').value;
    const firstname = document.querySelector('input[name="firstname"]').value;
    const email = document.querySelector('input[name="mail"]').value;
    const tel = document.querySelector('input[name="tel"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Définition des options pour l'e-mail
    const mailOptions = {
        from: 'oandreoli88@gmail.com',
        to: 'oandreoli88@gmail.com',
        subject: 'Formulaire de contact Portefolio',
        text: `Nom: ${name}\nPrénom: ${firstname}\nAdresse e-mail: ${email}\nNuméro de téléphone: ${tel}\nMessage: ${message}`
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            // Gérer l'erreur d'envoi de l'e-mail ici (affichage d'un message d'erreur, redirection vers une page d'erreur, etc.)
        } else {
            console.log('E-mail envoyé : ' + info.response);
            // Gérer la confirmation d'envoi de l'e-mail ici (affichage d'un message de confirmation, redirection vers une page de confirmation, etc.)
        }
    });
});