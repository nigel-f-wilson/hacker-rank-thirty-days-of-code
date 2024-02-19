import java.io.*;
import java.util.*;

public class Solution {

  private static boolean isPrime(int n) {
    if (n == 0 || n == 1) return false;
    int limit = (int) Math.floor(Math.sqrt((double) n));
    for (int i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        if (n % i == 0) {
          return false;
        }
      }
    }
    return true;
  }

  public static void main(String[] args) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();

    for (int i = 0; i < T; i++) {
      int n = sc.nextInt();
      if (isPrime(n)) {
        System.out.println(n + " Prime");
      }
      else {
        System.out.println(n + " Not Prime");
      }
    }
    sc.close();
  }
}