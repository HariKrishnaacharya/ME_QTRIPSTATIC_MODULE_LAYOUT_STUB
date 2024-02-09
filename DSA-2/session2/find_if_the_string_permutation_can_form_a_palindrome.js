function isPermutationPalidrome(s){
    let map = new Map();
    for(var i=0; i < s.length ; i++){
    let c= s[i];
    if(map.has(c)){
        map.delete(c);
    }
    else
    map.set(c,1);
    }
    if(map.size>1)
    return false;
    else
    return true;

}