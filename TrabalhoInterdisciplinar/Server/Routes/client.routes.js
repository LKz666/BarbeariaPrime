const express = require("express");
const Client = require("../Models/client.models.js");
const router = express.Router();
const {createClient, getClients, getClient, upadateClient, deleteClient} = require('../Controllers/user.controller.js');

router.get('/', getClients);
router.get('/:id', getClient);

router.post('/', createClient);

router.put('/:id', upadateClient);

router.delete('/:id', deleteClient);

module.exports = router;