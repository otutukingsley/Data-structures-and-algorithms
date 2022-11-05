var invertTree = function(root) {
  if(!root) return root
  if(!root.left && !root.right) {
      return root
  } else {
      let left = root.left
      let right = root.right
      root.left = right
      root.right = left
      
      invertTree(left)
      invertTree(right)
  }
  

  
  return root
};