const LinkedListUtils = require('./LinkedListUtils');
const ListNode = require('./ListNode');
var reverseList = function(head) {
	if (head === null || head.next === null) {
		return head;
	}
	let rest = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return rest;
}
var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
var reverseHead = reverseList(head);
LinkedListUtils.printLinkedList(reverseHead);
