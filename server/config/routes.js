const 	pets = require('../controllers/pets'),
		path = require('path');

module.exports = (app) => {
	//ReSTFUL 7route => API 5 CRUD
	app.get('/pets', pets.index);
//  app.get('/pets.new', pets.new); 			// Angular
	app.post('/pets', pets.create);
//  app.get('/pets/:id/edit', pets.edit); 	// Angular
	app.get('/pets/:id', pets.show);
	app.patch('/pets/:id', pets.update);
	app.delete('/pets/:id', pets.destroy);

	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	});
}


//API does not use redirects or renders.
//Only returns res.json()
//res.json doesn't need object ***
// NO ({task}), just "res.json(task)" or "res.json(err.errors)"