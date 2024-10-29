const max_price = 1000
const min_price = 200
const price = Number(prompt("Введите сумму"))

if (price > max_price) {
 console.log("Цена слишком большая")
} else if (price < min_price) {
 console.log("Цена слишком маленькая")
} else {
 console.log("Цена нормальная")
}