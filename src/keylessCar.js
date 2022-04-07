
// 1. Keyless car using function declaration with prompt()
function checkDriverAge(){
    var age = Number(prompt("What is your age?"));
    var msg = " ";
    if (age < 18) {
        msg = "Sorry, you are too young to drive this car. Powering off";
    } else if (age > 18) {
        msg = "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        msg = "Congratulations on your first year of driving. Enjoy the ride!";
    }
    return alert(msg);
}

checkDriverAge();


// 2. Keyless car using function expression with prompt()
var checkDriverAge2 = function(){
    var age = Number(prompt("What is your age?"));
    var msg = " ";
    if (age < 18) {
        msg = "Sorry, you are too young to drive this car. Powering off";
    } else if (age > 18) {
        msg = "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        msg = "Congratulations on your first year of driving. Enjoy the ride!";
    }
    return alert(msg);
}

checkDriverAge2();



// 3. Keyless car using function declaration with console.log()
function checkDriverAge3(age){
    age = Number(age);
    var msg = " ";
    if (age < 18) {
        msg = "Sorry, you are too young to drive this car. Powering off";
    } else if (age > 18) {
        msg = "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        msg = "Congratulations on your first year of driving. Enjoy the ride!";
    }
    return msg;
}

console.log(checkDriverAge3(98));