function somar(){
    for(var soma=0, count=1 ; count<=1000 ; count++)
    soma += count;

    document.writeln("Qual a soma dos números de 1 a 1000 ? "+soma);
}

ou 

let soma = 0;
for (let i = 1; i <= 1000; i++){
    soma += i;
}
console.log(soma);

//*Escreva um loop for que some os números de 1 a 100 e exiba o resultado.