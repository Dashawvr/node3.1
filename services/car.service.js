const {cars} = require('../database');

module.exports = {
    getAllCars: () => {
        return cars;
    },
    getById: id => {
        let singleCar = cars.find(user => user.id === +id);
        return singleCar ? singleCar : 'Something Wrong';

    },
    createCar: (car) => {
        const newCar = {
            id: cars[cars.length - 1].id + 1,
            ...car
        }
        cars.push(newCar)
        return newCar
    },
    updateCar: (id, updatedCar) => {
        const car = cars.find(car => car.id === +id);

        for (let car of cars) {
            if (car.id === +id) {
                for (const key in car) {
                    car[key] = updatedCar.key;
                }
                console.log(car);
            }
        }

        console.log(cars);

        /*const car = users.find(car => car.id === +id);
        const indexToDelete = users.indexOf(car);
        users.splice(indexToDelete,1);
        users.push(updatedCar);*/
        return car;
    },

    deleteCar: (id) => {
        const singleCar = cars.find( index => index.id === +id);
        if (singleCar) {
            const car = cars.indexOf(singleCar);
            cars.splice(car, 1);
        } return ('Something Wrong');

    }


}
