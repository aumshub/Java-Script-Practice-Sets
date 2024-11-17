console.log("js running...");

// Q1. Get user to input a number usiing prompt("Enter a number:". Check if the nimber is a multiple of 5 or not


let n = prompt("Enter a number:");

if(parseInt(n) % 5 == 0){
    console.log("The entered number is a multiple of 5.");
}else{
    console.log("The entered number is not a multiple of 5. ");
}