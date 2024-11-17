console.log("js running...");

// Q5. Write a Java Script program to find whether a number is Divisible by 2 and 3.


let n = parseInt(prompt("Enter the number to find whether the number is divisible by 2 and 3."))


if(n % 2 == 0 && n % 3 == 0){
    console.log("Yes! the entered number is divisible by 2 and 3.");
}else{
    console.log("No! the entered number is not divisible by 2 and 3.");
}




/* 

Try this:

The numbers from 1 to 70 which are divisible by 2 and 3 are: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, and 66
Explaination:

The difference between using the || (OR) operator and the && (AND) operator lies in the condition under which the number is considered "divisible by 2 and 3."

What happens with || (OR):
When you use the OR operator (||), the condition checks if the number is divisible by either 2 or 3. This means that if the number is divisible by either one of the two numbers (2 or 3), it will print "Yes!"

For example:

6 is divisible by both 2 and 3 (so the output will be "Yes!").
4 is divisible by 2 but not by 3, so the output will still be "Yes!" (because it satisfies the condition n % 2 == 0).
9 is divisible by 3 but not by 2, so the output will be "Yes!" (because it satisfies n % 3 == 0).
What happens with && (AND):
When you use the AND operator (&&), the condition checks if the number is divisible by both 2 and 3. Only when both conditions are true will it print "Yes!" If the number is divisible by only one of them, the program will print "No!"

For example:

6 is divisible by both 2 and 3, so the output will be "Yes!".
4 is divisible by 2 but not by 3, so the output will be "No!".
9 is divisible by 3 but not by 2, so the output will also be "No!".
How to Solve It Correctly:
To solve this problem based on the original requirement (divisible by both 2 and 3), you should use the && (AND) operator. This will ensure the number is divisible by both 2 and 3, not just one of them.
*/