var Pet = require('../models/pet');

module.exports = {
	index: (req, res) => {
		Pet.find({}, (err, pets) => {
			if(err){
				console.log("Err in index pets.js", err.errors);
				return res.status(400).json(err.errors);
			}
				console.log('ran index!pets.js');
				return res.json(pets);
	
		})
	},

	show: (req,res) => {
		Pet.findOne({ _id: req.params.id }, (err, pet) => {	
			console.log('err in show', err);
			if (err) {
				console.log('Err in show pets.js', err.errors);
				return res.status(400).json(err.errors);
			}
				console.log('ran show! pets.js');
				return res.json(pet);
		
		})
	},

	create: (req, res) => {
		var pets = new Pet({ title : req.body.title, description: req.body.description });
			console.log(pets);
			pets.save((err) => {
				if (err) {
					console.log('err in create pets.js', err.errors);
					return res.status(400).json(err.errors);
				} 
					console.log('ran added! pets.js');
					return res.json(pets);
		
		})
	},

	update: (req, res) => {
		console.log(req.body.title, req.body.description , req.params.id);
		Pet.update({_id: req.params.id }, { title : req.body.title, description: req.body.description }, (err, task) => {
			if (err) {
					console.log('err in update pets.js', err.errors);
					return res.status(400).json(err.errors);
				}
					console.log('ran updated! pets.js');
					return res.json(pet);
			
			})		
	},

	destroy: (req, res) => {
		Pet.remove({_id: req.params.id }, (err) =>{
			console.log(req.params.id);
			if (err) {
					console.log('err in destroy pets.js', err.errors);
					return res.status(400).json(err.errors);
				}
					console.log('ran destroy pets.js');
					return res.json("Done");
			
		})
	}
};