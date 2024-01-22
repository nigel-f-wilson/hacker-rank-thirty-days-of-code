//Complete this code or write your own from scratch
import java.util.*;
import java.io.*;

class Solution{
  public static void main(String []arg){
    HashMap<String, Integer> phoneBook = new HashMap<String, Integer>();

    Scanner in = new Scanner(System.in);
    int n = in.nextInt();

    for(int i = 0; i < n; i++){
      String name = in.next();
      int phoneNumber = in.nextInt();
      // Write code here
      phoneBook.put(name, phoneNumber);
    }

    while(in.hasNext()){
      String queryName = in.next();
      String message = "Not found";
      // Write code here
      if (phoneBook.get(queryName) != null) {
        int phoneNumber = phoneBook.get(queryName);
        message = (queryName + "=" + phoneNumber);
      }
      System.out.println(message);
    }
    in.close();
  }
}