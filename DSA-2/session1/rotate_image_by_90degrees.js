function rotateImage(n, matrix) {

    for(var i=0 ; i < n ; i++ )
    {
      for(var j=i ; j < n ; j++){
       var temp = matrix[i][j];
       matrix[i][j] = matrix[j][i];
       matrix[j][i] = temp;
    
    
      }
    
    }
    
    for(var i=0 ; i<n ; i++){
        for(var j=0 ; j < Math.floor(n/2) ; j++){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-j-1];
            matrix[i][n-j-1] = temp;
        }
    }
    return matrix;
    
    
    }