var numeros = [];
var soma = 0;

for (var cont = 0; cont <= 1; cont++) {
    var num = parseInt(prompt("Digite um numero:"));
    numeros[cont] = num;
    soma = soma + num;
}

     
    alert("Os numeros digitados são "  + numeros  );
    alert("A soma dos numeros da lista é: " + soma );
    