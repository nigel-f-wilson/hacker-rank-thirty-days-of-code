import java.io.*;
import java.util.*;

class Node {
	int data;
	Node next;
	Node(int d) {
    data = d;
    next = null;
  }
}

class Solution {

  public static  Node insert(Node head,int data) {
      //Create new node
      Node newNode = new Node(data);
      
      // If insert is called with no head reference start a new list by returning the new node as the head
      if (head == null) {
          return newNode;
      }
      else {
          // Find the tail of the list with the head referenced in the insert call
          Node previousTailNode = head;
          while (previousTailNode.next != null) {
              previousTailNode = previousTailNode.next;
          }
          // and update its next from null to point to the new node
          previousTailNode.next = newNode;
      }

      return head;
  }

	public static void display(Node head) {
    Node start = head;
    while(start != null) {
      System.out.print(start.data + " ");
      start = start.next;
    }
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    Node head = null;
    int N = sc.nextInt();

    while(N-- > 0) {
      int ele = sc.nextInt();
      head = insert(head,ele);
    }
    display(head);
    sc.close();
  }
}