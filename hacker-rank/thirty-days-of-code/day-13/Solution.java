import java.util.*;

abstract class Book {
    String title;
    String author;
    
    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
    
    abstract void display();
}

// Declare your class here. Do not use the 'public' access modifier because this is in the same file as the Solution class.
class MyBook extends Book {
  // Declare the price instance variable
  // Has to be done in MyBook because, unlike title and author, price is not declared in the Book class.
  int price;
  
  /**   
  *   Class Constructor
  *   
  *   @param title The book's title.
  *   @param author The book's author.
  *   @param price The book's price.
  **/
  MyBook(String title, String author, int price) {
    super(title, author);
    this.price = price;
  }
  
  /**   
  *   Method Name: display
  *   
  *   Print the title, author, and price in the specified format.
  **/
  public void display() {
    System.out.println("Title: " + this.title);
    System.out.println("Author: " + this.author);
    System.out.println("Price: " + this.price);
  }
}


public class Solution {
   
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String title = scanner.nextLine();
        String author = scanner.nextLine();
        int price = scanner.nextInt();
        scanner.close();

        Book book = new MyBook(title, author, price);
        book.display();
    }
}