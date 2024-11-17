// Q5 Write a js program to create a word-meaning dictionary of 5 words. (colors name translate form english to hindi.) 



const dict = {
    red : "lal",
    green : "hara", 
    yellow : "pilla", 
    blue : "nila",
    black : "kala"
}

let input = prompt("Enter the color name:").toLocaleLowerCase() // converts input into lower case.

if (dict[input]){
   console.log(`The color ${input} in Hindi is ${dict[input]}.`);
}else{
    console.log("Color not found sorry.");
}