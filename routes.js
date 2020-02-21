const express = require("express");
const controller = require("./controllers.js");

const router = express.Router();

//------------ API REST CRUD

// Read All
router.get('/equipos', controller.listEquipo);

// Read
router.get('/equipos/:id', controller.readEquipo);

// DELETE
router.delete('/equipos/:id', controller.deleteEquipo);

// UPDATE
router.put('/equipos/:id', controller.updateEquipo);

// CREATE
router.post('/equipos/', controller.createEquipo);


module.exports = router;