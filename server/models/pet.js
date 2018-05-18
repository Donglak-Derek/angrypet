var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name required!"],
		unique: [true, "Name already taken!"],
		minlength: [3, "Name must have at least 3 characters"]
	},
	type: {
		type: String,
		required: [true, "Type required!"],
		minlength: [3, "Type must have at least 3 characters"]
	},
	description: {
		type: String,
		required: [true, "Description required!"],
		minlength: [3, "Description must have at least 3 characters"]
	},
	skill01: {
		type: String,
	},
	skill02: {
		type: String,
	},
	skill03: {
		type: String,
	},


}, { timestamps: true });
PetSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Pet', PetSchema);