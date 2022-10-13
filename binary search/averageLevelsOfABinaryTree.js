var averageOfLevels = function(root) {
  let queue = [root]
  let averages = []
  
  while(queue.length > 0){
      let count = 0
      let queueLength = queue.length
      let total = 0
      
      for(let i = 0; i < queueLength; i++){
          let item = queue.shift()
          count += 1
          total += item.val            
          
          if(item.left) queue.push(item.left)
          if(item.right) queue.push(item.right)
      }
      
      averages.push((total / count))
  }
  
  return averages
};