/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast) {
    if (fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      return false;
    }

    if (fast == slow) {
      return true;
    }
  }

  return false;
};
