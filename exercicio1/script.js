const num = Number(prompt("Insira um numero aqui"));
// ANINHADO
if(num%2==0){
    console.log("Numero divisivel por 2")
        if(num%3==0){
            console.log("Numero divisivel por 3")
        }else{
            console.log("numero não é divisivel por 3")
        }
}else{
    console.log("numero não é divisivel por 2")
};
// OPERADOR LOGICO
if(num%2==0||num%3==0){
    console.log("numero divisivel por 2 ou3")
}else{
    console.log("numero não divisivel por 2 ou 3")
};