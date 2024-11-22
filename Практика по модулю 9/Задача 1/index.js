let cars = {
    bmw: {
        name: 'BMW M5',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 365
    },

    mercedes: {
        name: 'Mercedes AMG GT 63',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 270
    },

    audi: {
        name: 'Audi RS7',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 400
    }
}

function getCar(carName) {
    if (carName in cars) {
        return cars[carName]
    } else {
        return 'Автомобиль не найден'
    }
}


console.log(getCar('bmw'))
console.log(getCar('toyota'))