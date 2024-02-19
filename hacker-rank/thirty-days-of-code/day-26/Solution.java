import java.io.*;
import java.util.*;

public class Solution {

  // private void printFine 

  public static void main(String[] args) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner sc = new Scanner(System.in);
    int returnedDay = sc.nextInt();
    int returnedMonth = sc.nextInt();
    int returnedYear = sc.nextInt();
    int dueDay = sc.nextInt();
    int dueMonth = sc.nextInt();
    int dueYear = sc.nextInt();

    int yearsLate = returnedYear - dueYear;
    int monthsLate = returnedMonth - dueMonth;
    int daysLate = returnedDay - dueDay;

    if (yearsLate > 0) {              // Returned a calendar year or more late
      System.out.println("10000");
    }
    else if (yearsLate < 0) {         // Returned one or more calendar years early
      monthsLate = returnedMonth - dueMonth - 12;
      if (monthsLate > 0) {
        System.out.println(monthsLate * 500);
      }
      else if (monthsLate < 0) {
        daysLate = returnedDay - dueDay - 31;
        if (daysLate > 0) {
          System.out.println(daysLate * 15);
        }
        else {
          System.out.println(0);
        }
      }
      else {
        System.out.println(daysLate * 15);
      }
    }
    else {                            // Returned in same year as due
      if (monthsLate > 0) {
        System.out.println(monthsLate * 500);
      }
      else if (monthsLate < 0) {
        System.out.println(0);
      }
      else if (monthsLate == 0) {
        System.out.println(daysLate * 15);
      }
    }


    System.out.println("Years late: " + yearsLate);

    System.out.println("Months late: " + monthsLate);

    System.out.println("Days late: " + daysLate);


    
    sc.close();
  }
}