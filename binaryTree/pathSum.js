var hasPathSum = function(root, targetSum) {
  if(!root) return false
  
  let target = root.val
  let queue = [[root, target]]  
  const hash = new Set()
  
  while(queue.length > 0){
      
      for (let i = 0; i < queue.length; i++){
          let top = queue.shift()
          let node = top[0]
          const currentSum = top[1]
          
          if(!node.left && !node.right){
              hash.add(currentSum)
          }
          
          if (node.left) queue.push([node.left, currentSum + node.left.val])
          
          if(node.right) queue.push([node.right, currentSum + node.right.val])
      }
  }
  
  return hash.has(targetSum)
};