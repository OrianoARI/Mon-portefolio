const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z\-]+$/.test(value);
            }
        }
    },
    mail: {
        type : String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value);
            }
        }
    },
    password: {
        type : String,
    }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;