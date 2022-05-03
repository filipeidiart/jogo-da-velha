
var jogador = null;
var jogadorSelecionado = document.getElementById( 'jogadorSelecionado');
var vencedorSelecionado = document.getElementById( 'vencedorSelecionado');
var quadrado = document.getElementsByClassName('quadrado');

mudarJogador('x');

function escolherQuadrado(id){
       
    
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;

    if(vencedor !== null) {
            return;
        }
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'x'){
        jogador = 'o';
    }else{
        jogador = 'x';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudarcorQuadrdao(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudarcorQuadrdao(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudarcorQuadrdao(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarcorQuadrdao(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudarcorQuadrdao(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
        
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudarcorQuadrdao(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudarcorQuadrdao(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudarcorQuadrdao(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        
    }

    function mudarVencedor(quadrado){
        vencedor = quadrado.innerHTML;
        vencedorSelecionado.innerHTML = vencedor;
        
    }

    function mudarcorQuadrdao(quadrado1, quadrado2, quadrado3){
        quadrado1.style.background = '#0f0';
        quadrado2.style.background = '#0f0';
        quadrado3.style.background = '#0f0';
    }
}



function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = " ";

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('x');
}