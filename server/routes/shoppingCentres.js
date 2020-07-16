const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');

const shoppingCentresController = require('../controllers/shoppingCentres');

// get back all shopping centres (protected route)
router.get("/", checkAuth, shoppingCentresController.shoppingCentres_get_all);

// create a new shopping centre (protected route)
router.post("/add", checkAuth, shoppingCentresController.shoppingCentres_add_new_one);

// // delete a shopping centre  (protected route)
router.post("/delete", checkAuth, shoppingCentresController.shoppingCentres_delete_exist_one);

// // update a shopping centre (protected route)
router.post("/update", checkAuth, shoppingCentresController.shoppingCentres_update_exist_one);

module.exports = router;