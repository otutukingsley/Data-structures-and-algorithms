/**
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
var deleteDuplicates = function(head) {
  let slow = head
  let fast = head && head.next
  
  while (fast) {
      
      if (fast.val === slow.val){
          slow.next = fast.next
          fast = fast.next
      } else {
          slow = fast
          fast = fast.next
      }
  }
  
  return head
};