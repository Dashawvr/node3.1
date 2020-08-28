const {users} = require('../database');

module.exports = {
    getAllCars: () => {
        return users;
    },
    getById: id => {
        let singleCar = users.find(user => user.id === +id);
        return singleCar ? singleCar : 'Something Wrong';

    },
    createCar: (car) => {
        const newCar = {
            id: users.length +1,
            ...car
        }
        users.push(newCar)
        return newCar
    },
    updateCar: (id, updatedCar) => {
        const car = users.find(car => car.id === +id);

        for (let car of users) {
            if (car.id === +id) {
                for (const key in car) {
                    car[key] = updatedCar.key;
                }
                console.log(car);
            }
        }

        console.log(users);

        /*const car = users.find(car => car.id === +id);
        const indexToDelete = users.indexOf(car);
        users.splice(indexToDelete,1);
        users.push(updatedCar);*/
        return car;
    },

    deleteCar: (id) => {
        const singleCar = users.find( index => index.id === +id);
        if (singleCar) {
            const car = users.indexOf(singleCar);
            users.splice(car, 1);
        } else {
            return ('Something Wrong');
        }
    }


}
