import java.io.*;
import java.util.*;

public class Solution {
  public static void main(String[] args) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner sc = new Scanner(System.in);
    int numberOfTestCases = Integer.parseInt(sc.nextLine());

    for (int i = 0; i < numberOfTestCases; i++) {
      String testCase = sc.nextLine();

      String evens = "";
      String odds = "";

      for (int j = 0; j < testCase.length(); j++) {
        if (j % 2 == 0) {
          evens = evens + testCase.charAt(j);
        } 
        else {
          odds = odds + testCase.charAt(j);
        } 
      }
      System.out.println(evens + " " + odds);
    }
    sc.close();

  }
}