/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let current = head
  let result = []
  
  while(current){
      result.push(current.val)
      current = current.next
  }
  
  let reslength = result.length - 1
  
  for(let i = 0; i < result.length; i++){
      
      if(result[i] !== result[reslength]){
          return false
      }
      
      reslength--;
  }
  
  return true 
      
};