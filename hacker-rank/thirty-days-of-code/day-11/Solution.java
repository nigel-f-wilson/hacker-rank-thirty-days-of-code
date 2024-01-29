import java.io.*;
import java.math.*;
import java.security.*;
import java.sql.Array;
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

    List<List<Integer>> arr = new ArrayList<>();
    IntStream.range(0, 6).forEach(i -> {
      try {
        arr.add(
          Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList())
        );
      } catch (IOException ex) {
        throw new RuntimeException(ex);
      }
    });

    List<Integer> sums = new ArrayList<Integer>();

    for (int i = 0; i <= 3; i++) {
      for (int j = 0; j <= 3; j++) {
        int topRowSum = arr.get(i).get(j) + arr.get(i).get(j+1) + arr.get(i).get(j+2);
        int middleNumber = arr.get(i+1).get(j+1);
        int bottomRowSum = arr.get(i+2).get(j) + arr.get(i+2).get(j+1) + arr.get(i+2).get(j+2);
        int sum = topRowSum + middleNumber + bottomRowSum;
        sums.add(sum);
      }
    }
    int max = Collections.max(sums);

    System.out.println(max);

    bufferedReader.close();
  }
}
