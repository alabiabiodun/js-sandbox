// Create an object and an array which we will use in our facebook exercise.
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var dict = {"username": "John","password":"Russel"};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [{"username": "John","password":"Russel"}];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [{"username": "Physics","timeline":"4 years"},{"username": "Law","timeline":"5 years"},
{"username": "Mechatronics Engineering","timeline":"5 years"}];

console.log("%s %s spent %s to complete his Ph.D degree programme in %s",dict.username,database[0].password,
newsfeed[2].timeline,newsfeed[2].username);