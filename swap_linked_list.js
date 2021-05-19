function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val);
	this.next = (next===undefined ? null : next)
}
var swapPairs = function (head) {
	if (head.next === null) {
		return;
	}
	var tmp = head.val;
	head.val = head.next.val;
	head.next.val = tmp;
	if (head.next.next != null) {
		swapPairs(head.next.next);
	}
	return head;
}
let printLinkedList = function (head) {
  	var tmp = head;
	while (tmp.next !== null) {
		console.log(tmp.val);
		tmp = tmp.next;
	}
	console.log(tmp.val);
}
var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
printLinkedList(head);
var result = swapPairs(head);
printLinkedList(head);
