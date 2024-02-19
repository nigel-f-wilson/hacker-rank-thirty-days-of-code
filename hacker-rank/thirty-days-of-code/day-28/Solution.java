import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(bufferedReader.readLine().trim());

    String[][] table = new String[N][2];

    IntStream.range(0, N).forEach(currentRow -> {
      try {
        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
        String firstName = firstMultipleInput[0];
        String emailID = firstMultipleInput[1];

        table[currentRow][0] = firstName;
        table[currentRow][1] = emailID;
        
      } catch (IOException ex) {
        throw new RuntimeException(ex);
      }
    });

    // Filter
    ArrayList<String> names = new ArrayList<String>();
    for (int i = 0; i < N; i++) {
      if (table[i][1].indexOf("@gmail.com") != -1) {
        names.add(table[i][0]);
      }
    }

    // Alphabetize
    Collections.sort(names);

    // Print
    for (String name : names) {
      System.out.println(name);
    }

    bufferedReader.close();
  }
}
