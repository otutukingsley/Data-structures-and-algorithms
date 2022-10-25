//Description

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


var isSameTree = function(p, q) { 
  if(!p && !q) return true
  if(!p || !q) return false
  
  let plist = [p]
  let qlist = [q]
  
  while(plist.length > 0) {
      let plist_length = plist.length
      for(let i = 0; i < plist_length; i++){
          let p_top = plist.shift()
          let q_top = qlist.shift()
          
          if(p_top.val !== q_top.val) return false
          if(!p_top || !q_top) return false
          
          if((p_top.left && !q_top.left) || (q_top.left && !p_top.left)){
              return false
          } else {
              if(p_top.left && q_top.left){
                  plist.push(p_top.left)
                  qlist.push(q_top.left)
              }
          }
          
          if((p_top.right && !q_top.right) || (q_top.right && !p_top.right)){
              return false
          } else {
              if(p_top.right && q_top.right){
                  plist.push(p_top.right)
                  qlist.push(q_top.right)
              }
          }
      }
  }
  
  return plist.length === qlist.length
};