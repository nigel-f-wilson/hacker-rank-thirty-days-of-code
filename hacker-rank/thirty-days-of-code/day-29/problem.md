# Objective

Today, we're discussing bitwise operations. 

# Task

Given set $S = {1,2,3,...,N}$. Find two integers, $A$ and $B$ (where $A<B$), from set $S$ such that the value of $A \& B$ is the maximum possible and also less than a given integer, $K$. In this case, $\&$ represents the bitwise AND operator.

# Function Description

Complete the bitwiseAnd function in the editor below.

bitwiseAnd has the following parameters:

* int N: the maximum integer to consider

* int K: the limit of the result, inclusive

# Returns

* int: the maximum value of $A \& B$ within the limit.

# Input Format

The first line contains an integer, $T$, the number of test cases.
Each of the $T$ subsequent lines defines a test case as 2 space-separated integers, $N$ and $K$, respectively.

# Constraints

* $1 \leq T \leq 10^3$

* $2 \leq N \leq 10^3$

* $2 \leq K \leq N$

# Sample Input

```
STDIN   Function
-----   --------
3       T = 3
5 2     N = 5, K = 2
8 5     N = 8, K = 5
2 2     N = 8, K = 5
```

# Sample Output

```
1
4
0
```

# Explanation

$N=5,\space K=2,\space S={1,2,3,4,5}$

All possible values of $A$ and $B$ are:

1. $A=1,\space B=2,\space A \& B = 0$

(9 more rows omitted)

The maximum possible value of  that is also  is , so we print  on a new line.