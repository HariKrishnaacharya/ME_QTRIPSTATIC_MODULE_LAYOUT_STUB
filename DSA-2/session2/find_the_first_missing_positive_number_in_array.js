function firstMissingPositive(n, arr) {
    var s = new Set();
    for(var i=0 ; i<n ; i++){
    if(arr[i] > 0)
    s.add(arr[i]);
    }  

for(var i=1 ; i<=n ; i++){
    if(s.has(i))
    continue;
    else
    return i;
}
return n+1;
}