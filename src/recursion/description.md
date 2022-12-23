In computer science, recursion is a method of solving a problem where the solution to a problem depends on the solution to smaller instances of the same problem. This is done by breaking the problem down into smaller and smaller subproblems until the subproblems become simple enough to be solved directly. The solution to the original problem is then built up from the solutions to the smaller subproblems.

An example of recursion is the factorial function, which is often used to demonstrate the concept of recursion. The factorial of a number n is the product of all the positive integers from 1 to n. The factorial function can be defined recursively as follows:

factorial(n) = 1, if n = 0 or n = 1
= n * factorial(n - 1), if n > 1

Here, the base case is when n is 0 or 1, and in this case the function simply returns 1. For all other values of n, the function calls itself with a value of n - 1, and then multiplies the result by n. This process continues until the base case is reached, at which point the recursion stops and the final result is returned.

Recursion is an important concept in computer science because it allows for the definition of algorithms that can solve complex problems by breaking them down into smaller and simpler subproblems. It is used in many areas of computer science, including algorithms, data structures, and programming languages.