const free_cashier = Number(prompt("Введите номер кассы"));

switch (free_cashier) {
 case 1:
   console.log("Свободная касса №1")
   break
 case 2:
   console.log("Свободная касса №2")
   break
 case 3:
   console.log("Свободная касса №3")
   break
 case 4:
   console.log("Свободная касса №4")
   break
 default:
   console.log("Все кассы заняты")
   break
}