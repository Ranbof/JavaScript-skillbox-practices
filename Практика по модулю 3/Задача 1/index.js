let isCardInATM = true
let avalibleSum = 400
let operationSum = prompt('Введите сумму: ')
console.log('Сумма: ', operationSum);
if (isCardInATM && avalibleSum >= operationSum){
    console.log('Операция выполнена');
} else{
    console.log('Операция отклонена');
}