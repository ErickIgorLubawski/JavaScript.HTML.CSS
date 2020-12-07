let valores = [5 ,15,2,3,5,4]
/*
for(let pos = 0;  pos< valores.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
} */
for (let pos in valores){
    console.log(`a posção ${pos} tem o valor ${valores[pos]}`)
}