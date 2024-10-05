const currentYear = 2024
let index = 0

let user1 = prompt("Введите имя пользователя: ")
let birthyear_1 = prompt("Введите год рождения пользователя: ")
console.log(++index, user1, currentYear - birthyear_1)

let user2 = prompt("Введите имя пользователя: ")
let birthyear_2 = prompt("Введите год рождения пользователя: ")
console.log(++index, user2, currentYear - birthyear_2)

let user3 = prompt("Введите имя пользователя: ")
let birthyear_3 = prompt("Введите год рождения пользователя: ")
console.log(++index, user3, currentYear - birthyear_3)

console.log("Средний возраст пользователей: ", ((currentYear - birthyear_1) + (currentYear - birthyear_2) + (currentYear - birthyear_3)) / index)