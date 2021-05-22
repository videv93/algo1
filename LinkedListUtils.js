module.exports = {
	printLinkedList : function (head) {
		var tmp = head;
		while (tmp.next !== null) {
			console.log(tmp.val);
			tmp = tmp.next;
		}
		console.log(tmp.val);
	}
}
