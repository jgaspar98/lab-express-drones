// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const DB_NAME = 'Drone-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
Drone.create(drones).then(dronesFromDb => {
    console.log(`Created ${dronesFromDb.length} Drones`);
    mongoose.connection.close();
}).catch(error=> console.log(`An error occurred while creating books from the DB: ${err}`));
