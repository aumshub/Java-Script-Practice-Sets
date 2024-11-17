console.log("js running...");


// Q4. Demonstrate the use of switch case statements in Java Script?


let day = parseInt(prompt("Enter any number form 1-7 and know the name of that day in a week."))

let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
        case 2:
            dayName = "Tuesday";
            break;
            case 3:
                dayName = "Wednesday";
                break;
                case 4:
                    dayName = "Thrusday";
                    break;
                    case 5:
                        dayName = "Friday";
                        break;
                        case 6:
                            dayName = "Saturday";
                            break;
                            case 7:
                                dayName = "Sunday";
                                break;

    default:
        dayName = "Invalid day number";
        break;
}

console.log(dayName);




/* 
Explanation:
The switch statement compares the value of day (which is 3) against the cases.
When it finds case 3, it executes the block for "Wednesday" and then breaks out of the switch.
If day was not between 1 and 7, the default case would execute, giving "Invalid day number".
Advantages of switch over if-else:
Readability: A switch statement can be cleaner and more readable when checking a variable against multiple values.
Performance: For certain use cases, switch can be more efficient than using multiple if-else statements (though modern JavaScript engines optimize both).
Important Notes:
The switch statement checks for strict equality (===), meaning it will only match if the type and value are the same.
If you omit the break statement, the code will "fall through" to the next case, executing all subsequent code until a break is encountered or the switch ends.
*/