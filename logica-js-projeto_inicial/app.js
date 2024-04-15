alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao núnero secreto
    if (chute == numeroSecreto) {
        break;   
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        } 
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

// operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o núnmero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); 

// OBS: if e else tradicional em comparação ao ternário
//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o núnmero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! Você descobriu o núnmero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
