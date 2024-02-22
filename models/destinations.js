const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['YVR', 'JFK', 'LAX'] 
    },
    arrival: {
        type: Date,
       
    }
}, {
    timestamps: true
});
