const carMileage = require("./analyse_carmileage")

const result = carMileage([
    {make:"Toyota",model:"Camry",year:2020,mileage:30800},
    {make:"Honda",model:"Civic",year:2018,mileage:32000},
    {make:"Chevrolet",model:"Impala",year:2021,mileage:17500},
    {make:"Tesla",model:"Model 3",year:2018,mileage:50000},
])

console.log(result);