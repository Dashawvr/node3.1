const { carService } = require('../services');
module.exports = {
    getCars: (req, res) => {
        const cars = carService.getAllCars();
        res.json(cars);
    },
    getCarById: (req, res) => {
        console.log(req.params);
        const {id} = req.params;
        const car = carService.getById(id);
        res.json(car)

    },
    createCar: (req, res) => {
        const car = req.body;
        const savedCar = carService.createCar(car);
        res.json(savedCar)
    },
    updateCar: (req, res) => {
        console.log(req.params);
        console.log(req.body);

        const {id} = req.params;
        const updatedCar = req.body;

        const savedCar = carService.updateCar(id, updatedCar);
        res.json(savedCar)
    },
    deleteCar: (req,res) => {
        const car = req.body;
        const deletedCar = carService.deleteCar(car);
        res.json(deletedCar);
    }
}
