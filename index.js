const mongoose = require("mongoose")
require('dotenv').config()

const contactModel = require('./contact')

// connecting to my database
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.log(e))


// create a contact

const createContact = async (contactObj) => {
    try {
        const created = await contactModel.create(contactObj)
        return console.log(`contact Created`)
    } catch (err) {
        console.log(err)
        return
    }


}

// createContact({
//     fullName: "Harry Potter",
//     Email: "hogwarts@test.com",
//     PhoneNumber: "11111111111",
//     Birthdate: "11"
// })

const search = async (name) => {


    const result = await contactModel.findOne({ fullName: { $regex: name, $options: 'i' } }) // search for part of the name


    return console.log(result)

}



const updateContact = async (newContact, contactID) => {


    // search of the contact exist and update it
    const contactFound = await contactModel.findByIdAndUpdate({ _id: contactID }, { ...newContact })
        .catch(error => console.log(error)) // user document from DB


    console.log(contactFound)




}

//  updateContact({ fullName: "mohamed" }, "651fca01551d05b6a7856f6d")



const deleteContact = async (name) => {

    // search of the contact exist and delete it
    const contactDeleted = await contactModel.findOneAndRemove({ fullName: name })
        .catch(error => console.log(error)) // user document from DB


    console.log(contactDeleted)
 

}

// deleteContact("mohamed")