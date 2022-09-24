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

//Description

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



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