/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode(-1)
  
  dummy.next = head
  
  let previous = dummy
  
  let current = head

  
  while (current) { 
      
      if(current.val === val) {
          
          previous.next = current.next
          
          current = current.next
      } else {
          
          previous = current
          
          current = current.next
      }
  }
  
  return dummy.next
  
};