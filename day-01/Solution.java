import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
	
    public static void main(String[] args) {
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";
		
        Scanner scan = new Scanner(System.in);

        /* Declare second integer, double, and String variables. */
        int secondI; 
        double secondD;
        String secondS;
        
        /* Read and save an integer, double, and String to your variables.*/
        secondI = Integer.parseInt(scan.nextLine());
        secondD = Double.parseDouble(scan.nextLine());
        secondS = scan.nextLine();
        
        /* Print the sum of both integer variables on a new line. */
        int integerSum = i + secondI;
        System.out.println(integerSum);

        /* Print the sum of the double variables on a new line. */
		    double doubleSum = d + secondD;
        System.out.println(doubleSum);
        
        /* Concatenate and print the String variables on a new line; 
        	the 's' variable above should be printed first. */
        String stringConcatenation = s + secondS;
        System.out.println(stringConcatenation);

        scan.close();
    }
}