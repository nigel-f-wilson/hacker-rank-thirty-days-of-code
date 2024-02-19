# Objective

Today's challenge puts your understanding of nested conditional statements to the test. 

# Task

Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged. ($fine = 0$)

1. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, $fine = 15 \space Hackos \space \times \space (the number of days late)$.

1. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the $fine = 500 \space Hackos \space \times \space (the number of months late)$.

1. If the book is returned after the calendar year in which it was expected, there is a fixed fine of $10000 \space Hackos$.

# Example

$d1,m1,y1 = 12312014$ returned date
$d1,m1,y1 = 112015$ due date

The book is returned on time, so no fine is applied.

$d1,m1,y1 = 112015$ returned date
$d1,m1,y1 = 12312014$ due date

The book is returned in the following year, so the fine is a fixed 10000.

# Input Format

The first line contains $3$ space-separated integers denoting the respective $day$, $month$, and $year$ on which the book was actually returned.
The second line contains $3$ space-separated integers denoting the respective $day$, $month$, and $year$ on which the book was expected to be returned (due date).

# Constraints

* $1 \leq D \leq 31$

* $1 \leq M \leq 12$

* $1 \leq Y \leq 3000$

* It is guaranteed the dates will be valid Gregorian calendar dates.

# Output Format

Print a single integer denoting the library fine for the book received as input.

# Sample Input

```
STDIN       Function
-----       --------
9 6 2015    day = 9, month = 6, year = 2015 (date returned)
6 6 2015    day = 6, month = 6, year = 2015 (date due)
```

# Sample Output

```
45
```
