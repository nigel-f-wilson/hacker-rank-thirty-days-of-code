# Objective

Today, we're delving into Inheritance. 

# Task

You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

* A Student class constructor, which has 4 parameters:
  * A string, $firstName$.
  * A string, $lastName$.
  * An integer, $idNumber$.
  * An integer array (or vector) of test scores, $scores$.

* A calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:

| Letter        | Average               |
|-------------- | --------------------- |
| O             |  $90 \leq a \leq 100$ |
| E             |  $80 \leq a \leq 90$ |
| A             |  $70 \leq a \leq 80$ |
| P             |  $55 \leq a \leq 70$ |
| D             |  $40 \leq a \leq 55$ |
| T             |  $ a \lt 40$ |

# Input Format

The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

The first line contains `firstName`, `lastName`, and `idNumber`, separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes `testScores`.

# Constraints

* $1 \leq length of firstName, length of lastName \leq 10$ 
* $ length of idNumber \equiv 7$
* $0 \leq score \leq 100$ 

# Output Format

Output is handled by the locked stub code. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

# Sample Input

```
Heraldo Memelli 8135627
2
100 80
```

# Sample Output

```
Name: Memelli, Heraldo
ID: 8135627
Grade: O
```