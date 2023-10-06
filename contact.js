const mongoose = require("mongoose")
const validator = require("validator")

const contact = new mongoose.Schema({
    fullName: {
        type: String,
        maxLength: 50,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate: (email) => {
            return validator.isEmail(email)
        }
    },
    PhoneNumber: {
        type: Number
    },
    Birthdate: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('contact', contact) 