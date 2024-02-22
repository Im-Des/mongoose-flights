const FlightsModel = require('../models/flights')

module.exports = {
    index,
    new: newFlight,
};

async function index(req, res){
	
	// then we want to send a ejs page with all the movies to the browser
	try {
		// We want our model to go to the database and get all the flights
		// .find({}) is mongoose model query method
		const flightsFromTheDB = await FlightsModel.find({})
		console.log(flightsFromTheDB)
		res.render('flights/index', {flightDocs: flightsFromTheDB})
		// flightDocs is now a variable inside of views/movies/index.ejs 
	} catch(err){
		console.log(err)
		res.redirect('/')
	}
}

function newFlight(req, res){

	// res.render looks in our 
	// views folder for the ejs page
	res.render('flights/new')
}