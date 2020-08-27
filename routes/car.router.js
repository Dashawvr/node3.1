const { Router } = require('express');
const carRouter = Router();

const controller = require('../controllers/car.controller');
//read
carRouter.get('/', controller.getCars);

carRouter.get('/:id', controller.getCarById);

// // delete
// carRouter.delete('/:id', controller.deleteCar());
//
// // create
carRouter.post('/', controller.createCar);
//
// //update
carRouter.put('/:id', controller.updateCar);





module.exports = carRouter;

