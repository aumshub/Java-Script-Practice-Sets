console.log("js running...");

// Q2. Write a code which can give grades to stutents according to their scores.
// 80-100,A
// 70-89,B
// 60-69,C 
// 50-59,D
// 0-49,F

let grd = parseInt(prompt("Enter your overall score to know you grade."))

if(grd >= 80 && grd <= 100){
    console.log("Your grade is \"A\"")
}else if(grd >= 70 && grd <= 89){
        console.log("Your grade is \"B\"")
    }else if(grd >= 60 && grd <= 69){
        console.log("Your grade is \"C\"")
    }else if(grd >= 50 && grd <= 59){
        console.log("Your grade is \"D\"")
    }else if(grd >= 0 && grd <= 49){
        console.log("Your grade is \"F\"")
    }else{
        console.log("Invalid score! enter the number between 0 and 100");
    }
