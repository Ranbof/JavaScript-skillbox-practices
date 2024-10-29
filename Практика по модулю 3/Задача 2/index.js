let HP = prompt('Лошадиные силы:')
if (HP < 100){
    console.log('Сумма налога:', HP * 12);
}else if (100 <= HP < 125){
    console.log('Сумма налога:', HP * 25);
}
else if (125 <= HP < 150){
    console.log('Сумма налога:', HP * 35);
}
else if (150 <= HP < 175){
    console.log('Сумма налога:', HP * 45);
}
else if (175 <= HP < 200){
    console.log('Сумма налога:', HP * 50);
}
else if (200 <= HP < 225){
    console.log('Сумма налога:', HP * 65);
}
else if (225 <= HP < 250){
    console.log('Сумма налога:', HP * 75);
}
else{
    console.log('Сумма налога:', HP * 150);
}