const calculateTotalSales = require("./calculate_total_sales")

test("calculating total sales amount with tax",()=>{
    expect(
        calculateTotalSales(
            [
                {name:"ramu",price:0.5,quantity:10},
                {name:"mamu",price:0.3,quantity:20},
                {name:"omi",price:0.6,quantity:15}
            ],
            8
        )
    ).toBe(21.6)
})