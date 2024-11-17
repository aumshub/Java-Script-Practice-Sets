console.log("js running...");


// Q7.  Print "you can Drive" or "you cannot Drive" based on age being greater than 18 using ternary operator.

let age = parseInt(prompt("To check whether you are eligible to Drive or not please enter your age here:"));

// Check if the input is a valid number
if (isNaN(age)) {
    console.log("Invalid entry, please enter a valid number.");
  } else{
age >= 18 && age <= 100
? console.log("Congratulations! you can Drive.")
: age < 18
? console.log("Sorry! you cannot Drive.")
: console.log("Invalid entry, Try again.")
}



/*
To note:
here you can get the or and and operator difference if you use or even if you enter the number 1 it will say yes you can drive
because it is checking only one thing which is <= 100 so using && make sense because it will check both conditions and will give the output. 
*/