# Coding Exercise: Decoding a Message from a Text File

In this exercise, you will develop a function named decode(message_file). This function should read an encoded message from a .txt file and return its decoded version as a string.

Note that you can write your code using any language and IDE you want (Python is preferred if possible, but not mandatory).

# Example Input

```
3 love
6 computers
2 dogs
4 cats
1 I
5 you
```

In this file, each line contains a number followed by a word. 

# Task 

The task is to decode a hidden message based on the arrangement of these numbers into a "pyramid" structure. The pyramid increases by one number per line, like so:

```
  1
 2 3
4 5 6
```

The key to decoding the message is to use the words corresponding to the numbers at the end of each pyramid line (in this example, 1, 3, and 6). You should ignore all the other words. So for the example input file above, the message words are:

```
1: I
3: love
6: computers
```

# Example Output

Your function should return the string "I love computers".