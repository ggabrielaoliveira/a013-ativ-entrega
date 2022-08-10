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
// CODIGO EDUARDO B
// const num = Number(prompt('Digite um número:'))

// if(num % 2 === 0){
//     if (num % 3 === 0){
//         console.log('Múltiplo de 2 e múltiplo de 3')
//     }else{
//         console.log('O número é múltiplo de 2 porém não é múltiplo de 3')
//     }
    
// }else if (num % 3 === 0){
//     console.log('O número é múltiplo de 3 e não é múltiplo de 2')
// }else{
//     console.log('O número não é nem múltiplo de 2 nem múltiplo de 3')
// }

// CODIGO RAPHAELA 

// if (num%2 === 0) {
//     if (num%3 === 0) {
//        alert("2 e 3")
//    }else{
//        alert("por 2")
//    }
// } else if(num%3 === 0){
//    alert("por 3")
// }else{
//    alert("nenhum")
// }

// OPERADOR LOGICO
if(num%2==0||num%3==0){
    console.log("numero divisivel por 2 ou3")
}else{
    console.log("numero não divisivel por 2 ou 3")
};