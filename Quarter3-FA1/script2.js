var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var birthYear = prompt("What is your birth year?");


var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;


var message = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";


document.getElementById("output").innerText = message;