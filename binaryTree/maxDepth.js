//Description:
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    
  if( !root) return 0
  
  const stack = [[root, 1]]
  let max = 0
  
  while(stack.length > 0){
      for(let i = 0; i < stack.length; i++){
          let top = stack.shift()
          let node = top[0]
          let level = top[1]
          max = level
          
          if (node.left) stack.push([node.left, level + 1])
          if(node.right) stack.push([node.right, level + 1])
      }
  }
  
  return max
};