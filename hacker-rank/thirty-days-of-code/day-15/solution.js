process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
	this.insert=function(head,data){
    //Create new node
    let newNode = new Node(data);
    
    // If insert is called with no head reference start a new list by returning the new node as the head
    if (head == null) {
      return newNode;
    }
    else {
      // Find the tail of the list with the head referenced in the insert call
      let previousTailNode = head;
      while (previousTailNode.next != null) {
        previousTailNode = previousTailNode.next;
      }
      // and update its next from null to point to the new node
      previousTailNode.next = newNode;
    }
    return head;
  };

	this.display=function(head){
    var start=head;
      while(start){
        process.stdout.write(start.data+" ");
        start=start.next;
      }
    };
}

function main(){
  var T=parseInt(readLine());
  var head=null;
  var mylist=new Solution();
  for(i=0;i<T;i++){
    var data=parseInt(readLine());
    head=mylist.insert(head,data);
  }
  mylist.display(head);
}		