
function incrementNumber(N, A) {
A.reverse();
for(var i=0; i < N ; i++){
    var a = A[i] + 1;
    if(a < 10){
        A[i]=a;
        return A.reverse();
    }
    else{
        A[i]=0;
    }
}
}
