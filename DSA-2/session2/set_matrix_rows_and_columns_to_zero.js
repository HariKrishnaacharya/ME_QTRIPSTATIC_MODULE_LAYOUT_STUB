function setMatrixZeroes(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    
    var col = new Array(m).fill(0);
    var row = new Array(n).fill(0);
    
    for(var i=0 ;  i<m ; i++){
    for(var j=0 ;  j<n ; j++){
     if ( matrix[i][j] == 0 ){
             col[j] = 1;
             row[i] = 1;
    
         }
    
    
    }
    
    }
    
    for(var i=0 ; i<m ; i++){
    for(var j=0 ; j<n ; j++){
        if(col[j]==1 || row[i]==1){
            matrix[i][j] = 0;
        }
    }
    }
    
    return matrix;
    
    
    
    
    
    }