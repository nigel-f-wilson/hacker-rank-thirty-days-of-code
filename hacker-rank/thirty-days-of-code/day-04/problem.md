# Objective

In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. 

# Task

Write a Person class with an instance variable, _age_, and a constructor that takes an integer, _initialAge_, as a parameter. The constructor must assign _initialAge_ to _age_ after confirming the argument passed as  is not negative; if a negative argument is passed as _initialAge_, the constructor should set _age_ to 0 and print `Age is not valid, setting age to 0.`. In addition, you must write the following instance methods:

* `yearPasses()` should increase the  instance variable by 1.
* `amIOld()` should perform the following conditional actions:
  * If _age_ < 13, print `You are young.`.
  * If _age_ $\geq$ 13 and _age_ < 18, print `You are a teenager.`.
  * Otherwise, print `You are old.`.

To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.

# Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer, _T_ (the number of test cases), and the  subsequent lines each contain an integer denoting the _age_ of a Person instance.

# Constraints

* 1 $\leq$ _T_ $\leq$ 4
* -5 $\leq$ _age_ $\leq$ 30


# Output Format

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print  or  lines (depending on whether or not a valid _initialAge_ was passed to the constructor).

## Sample Input

```
4
-1
10
16
18
```

## Sample Output

Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.