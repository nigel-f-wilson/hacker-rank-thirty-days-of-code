import java.util.*;
import java.io.*;

//Write your code here
class Calculator {
  // Uses default no-args constructor.
  public int power(int base, int exponent) throws Exception {
    if (base >= 0 && exponent >= 0) {
      return (int)(Math.pow(base, exponent));
    }
    else {
      throw new Exception("n and p should be non-negative");
    }
  }
}

class Solution {

    public static void main(String[] args) {
    
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        while (t-- > 0) {
        
            int n = in.nextInt();
            int p = in.nextInt();
            Calculator myCalculator = new Calculator();
            try {
                int ans = myCalculator.power(n, p);
                System.out.println(ans);
            }
            catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        in.close();
    }
}
