const totalSum = (price, amount, discount) => (price * amount) * ((100 - discount) / 100)
console.log(totalSum(25000, 3, 20));