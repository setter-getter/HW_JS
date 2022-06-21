// 4***:
// Преобразовать задание 3* таким образом, 
// чтобы возраст вводится используя функцию prompt в привязанной верстке

let age = prompt("Enter the age", "");

const checkAge_3 = function(age){

if(!Number.isNaN(+age) == false){
    return alert("Error! The age type should be a number!"); 
    }
    else{
        age = Number(age)
    }

    let age_1 = 18;
    let age_2 = 60;

    if(age < age_1){
        alert("You don’t have access cause your age is " + age + " It's less then")
    }
    else if(age >= age_1 && age < age_2){
        alert ("Welcome!")  
    }
    else if(age > age_2){
        alert("Keep calm and look Culture channel")
    }
    else{
        alert("Technical work")
    }
}

checkAge_3(age);