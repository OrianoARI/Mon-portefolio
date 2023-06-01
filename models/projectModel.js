const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est requis"],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9À-ÿ\- ]+$/u.test(value);
            }
        }
    },
    url: {
        type: String,
        validate: {
            validator: function (value) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
            }
        }
    },
    gitUrl: {
        type: String,
        validate: {
            validator: function (value) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
            }
        }
    },
    description: {
        type: String,
        required: [true, "La description est requise"],
        // validate: {
        //     validator: function (value) {
        //         return /^[a-zA-Z0-9À-ÿ\- ]+$/u.test(value)
        //     }
        // }
    },
    techOne: {
        type: String,
    },
    techTwo: {
        type: String,
    },
    techThree: {
        type: String,
    },
    techFour: {
        type: String,
    },
    date: {
        type: String,
    },
    image: {
        type: String,
    },
});

const projectModel = mongoose.model('Project', projectSchema);
module.exports = projectModel;