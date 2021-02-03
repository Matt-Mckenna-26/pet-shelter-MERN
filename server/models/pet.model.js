const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name:{
		type: String,
		unique : [true, 'This pet has already been added to the shelter!'],
		required: [true, 'To find this pet a new home please include their name'],
		minlength: [3, 'Please include at least 3 characters for the name']
	},
	type: {
		type:String,
		required: [true, "To put a Pet up for adoption a type must be included"],
		minlength: [3, 'Please include at least 3 characters for the type']
	},
	description : {
		type: String,
		required: [true, 'Please include some details about the pet!'],
		minlength: [3, 'Please include at least 3 characters description']
	},
	skills: {
		type: Array,
		minlength :[0],
		maxlength:[3,'A pet can only have up to three skills in the system']
	}
}, {timestamps: true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;