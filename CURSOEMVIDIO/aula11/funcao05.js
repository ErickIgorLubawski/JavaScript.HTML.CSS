function fatorial(n){
    //se n for = a 1 retorne 1 senao retorne 3* (3-1) que e = 6
    if (n ==1){
        return 1
        
    } else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(3))        