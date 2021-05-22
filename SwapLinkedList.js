const LinkedListUtils = require('./LinkedListUtils');
const ListNode = require('./ListNode');
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
var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
LinkedListUtils.printLinkedList(head);
var result = swapPairs(head);
LinkedListUtils.printLinkedList(head);
