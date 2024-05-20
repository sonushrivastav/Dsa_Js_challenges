function carMileage(cars){
    const totalMileage = cars.reduce((total,car)=>{
          return total + car.mileage
    },0)

    let avgMileage = totalMileage / cars.length
    let highestMileageCar = cars.reduce((highest,car)=>{
        return  car.mileage > highest.mileage ? car : highest
    },cars[0]) 
    
    let lowestMileageCar = cars.reduce((lowest,car)=>{
        return  car.mileage < lowest.mileage ? car : lowest
    },cars[0])

    return {
        avgMileage:parseFloat(avgMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage
    }
}

module.exports = carMileage