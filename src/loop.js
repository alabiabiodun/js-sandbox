// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username", "password" & "status". Fill those values in with strings.

var dict = {"username": "John","password":"Russel1500", "status":"registered"};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [{"username": "John","password":"Russel1500", "status":"registered"}];

//3. Accept username, password & status from the prompt and add it to the database array
database.push({});
database[1].username = prompt("Username: ");
database[1].password = prompt("Password: ");
database[1].status = prompt("Status: ");

//console.log(database[1].username);

/*4. Create a function called SignIn that accept two parameter - username, password. 
This function would check the database array to check for any matching entry. If username & password matches return 
both the username and status, if not return "Sorry, wrong username and password" */

function SignIn(username, password) {
    var msg = " ";
    if (username === database[0].username && password === database[0].password) {
        msg = database[0].username + " " + database[0].status;
    }
    else if (username === database[1].username && password === database[1].password){
        msg = database[1].username + " " + database[1].status;
    }
    else if (username !== database[0].username && password !== database[0].password){
        msg = database[1].username + " " + database[1].status;
    }    
    else if (username !== database[1].username && password !== database[1].password){
        msg = "Sorry, wrong username and password";
    }
    return msg;
}

console.log(SignIn("John","Russel1500"));



//5. Initialise your database array with five object of username, password and status.
var database = [
    {"username": "John","password":"Russel1500", "status":"registered"},
    {"username": "Matthew","password":"Matthew1600", "status":"unregistered"},
    {"username": "Ayo","password":"Ayo1700", "status":"registered"},
    {"username": "David","password":"David1800", "status":"unregistered"},
    {"username": "Sam","password":"Sam1900", "status":"registered"}
];
//console.log(database);
/*
database.forEach(function (i){
    console.log(i);
})*/


//6. Update your signIn function to use loop; running through the item in the database and return matching username and password.
var len = database.length;
function SignIn(username, password){
    var msg = " ";
    for (var i; i < len; i++){        
        if (username === database[i].username && password === database[i].password) {
            msg = database[i].username + " " + database[i].status;
            break;
        }
        else if (username !== database[i].username && password !== database[i].password){
            msg = "Sorry, wrong username and password";
            break;
        }               
    }
    return msg;        
}

console.log(SignIn("John","Russel1500"));


