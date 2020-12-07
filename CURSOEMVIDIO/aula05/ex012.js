var agora = new Date()
var hora = agora.getHours
var hora = 18
console.log(`Agora sao exatamente ${hora} horas,`)
if( hora < 12){
    console.log(`BOM DIAA`)
}else if (hora <= 18){
    console.log(`Boa tade! `)
}else{
    console.log(`Boa noite`)
}