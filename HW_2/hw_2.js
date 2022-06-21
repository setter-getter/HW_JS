//Напишите валидационный скрипт используя функции

// 1. Скрипт должен на вход принимать строку.
// 2. После проверки строки выводить в консоль сообщение где
//будет конкретно написано, что не так в ведённой строке.
// 3. Минимум 5 символов в строке
// 4. Максимум 64 символа в строке
//5. В строке должны быть буквы
//6. Должна быть хотя бы одна буква в верхнем регистре
//7. Должна быть хотя бы одна цифра
//8. Должна быть хотя бы одна @
//9. Строка не должна быть пустой

let my_string = prompt("Введите строку", "");

function chekString(my_string){

if(my_string == ""){
    return console.log("Строка не должна быть пустой!")
}
else if(my_string.length < 5 ){
    return console.log("Минимум 5 символов в строке")
}
else if(my_string.length > 64){
    return console.log("Максимум 64 символа в строке");
}

if(!Number.isNaN(+my_string)){ 
    return console.log("В строке должны быть буквы")  
}

let symb_upper = false;
let symb_num = false;
let symb_dog = false;

for(let i = 0; i < my_string.length; i++){ 
    if(my_string[i] === my_string[i].toUpperCase() && Number.isNaN(+my_string[i])){
       symb_upper = true;
    }
    if(!Number.isNaN(+my_string[i])){
        symb_num = true;
    }
    if(my_string[i] == "@"){
        symb_dog = true;
    }
}
    if(!symb_upper){
     return console.log("Должна быть хотя бы одна буква в верхнем регистре")
}
    if(!symb_num){
     return console.log("Должна быть хотя бы одна цифра")
}
    if(!symb_dog){
    return console.log("Должна быть хотя бы одна @")
    }
}

chekString(my_string);