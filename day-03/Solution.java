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
        
        boolean isOdd = N % 2 == 1;
        boolean isInWeirdEvenRange = (N >= 6 && N <= 20);
        
        String message = (isOdd || isInWeirdEvenRange) ? "Weird" : "Not Weird";
    
        System.out.println(message);

        bufferedReader.close();
    }
}

