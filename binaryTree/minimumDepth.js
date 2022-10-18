var minDepth = function(root) {
  var node;
  var count = 1
  var queue = [[root, count]]
  
  if (!root) return 0
  
  while(queue.length > 0){
      var queueLength = queue.length
      
      for (var i = 0; i < queueLength; i++) {
          var top = queue.shift()
          count = top[1]
          node = top[0]
          
          if (node.left || node.right) {
              if(node.left){
                  queue.push([node.left, count + 1])
              }
              
              if(node.right){
                  queue.push([node.right, count + 1])
              }
          } else {
            return count;
          }
          
      }
  }
};