const express = require('express');
const router = express.Router();
// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find().then((dronesFromDB) => {
    res.render('drones/list', { drones: dronesFromDB })
  })
  .catch(err=>console.log(`No drone could be found ${err}`));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed }).then(() => {
    res.redirect('/drones');
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const id = req.params.id;
  Drone.findById(id).then((dronesFromDB) => {
    res.render('drones/update-form', { drones: dronesFromDB})
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const id = req.params.id;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, {
    name,
    propellers,
    maxSpeed
  }).then(() => {
    res.redirect('/drones')
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const id = req.params.id;
  Drone.findByIdAndDelete(id).then(() => {
    res.redirect('/drones');
  });
});

module.exports = router;
