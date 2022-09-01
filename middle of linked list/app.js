/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* Given the head of a singly linked list, return the middle node of the linked list.
*/

If there are two middle nodes, return the second middle node.
var middleNode = function (head) {
  let current = head;
  let counter = 0;
  let middle;
  let mover = head;

  while (current) {
    current = current.next;
    counter++;
  }

  if (counter % 2 === 0) {
    middle = Math.ceil(counter / 2);
  } else {
    middle = Math.floor(counter / 2);
  }

  for (let i = 0; i < middle; i++) {
    mover = mover.next;
  }
  return mover;
};
