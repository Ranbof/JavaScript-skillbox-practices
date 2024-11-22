function createCar(additionalProperties) {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    }

    return Object.assign({}, baseCar, additionalProperties)
}

console.log(createCar({ name: 'Haval', hp: 198 }))