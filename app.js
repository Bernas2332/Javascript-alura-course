alert(`Bem vindo ao site do jogo `);
numeroSecreto = 14;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while(chute != numeroSecreto){
    chute = prompt(`Tente adivinhar o numero secreto que esta entre 1 e 30`);
    tentativas += 1;
    console.log(`valor do chute = ${chute}`);
    if(chute == numeroSecreto){
        alert(`Parabens, voce acertou, o numero era ${numeroSecreto}, e voce levou ${tentativas} tentativas para acertar`);
}
    else{
        if(chute < numeroSecreto){
            alert(`O numero secreto e maior doque ${chute}`);
    }
        if(chute > numeroSecreto){
            alert(`O numero secreto e menor doque ${chute}`);
    }
}
}
 