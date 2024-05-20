function calculateTotalSales(products,taxrate){
  const totalSales = products.reduce((sum,product)=>{
    return sum + product.price * product.quantity
  },0)

  const taxAmount = (totalSales * taxrate) / 100
  const totalSaleswithTax = totalSales + taxAmount
  return parseFloat(totalSaleswithTax.toFixed(2))
}

module.exports = calculateTotalSales