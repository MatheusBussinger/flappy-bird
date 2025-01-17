const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('#game-canvas');
const contexto = canvas.getContext('2d');


const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 35,
    altura: 25,
    x: 10,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}

const chao = {
    spriteX: 0,
    spriteY: 609,
    largura: 225,
    altura: 114,
    x: 0,
    y: 380,
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x + 224, chao.y,
            chao.largura, chao.altura,
        );
    }
}


const fundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 278,
    altura: 205,
    x: 0,
    y: 280,
    desenha() {
        contexto.drawImage(
            sprites,
            fundo.spriteX, fundo.spriteY,
            fundo.largura, fundo.altura,
            fundo.x, fundo.y,
            fundo.largura, fundo.altura,
        )
        contexto.drawImage(
            sprites,
            fundo.spriteX, fundo.spriteY,
            fundo.largura, fundo.altura,
            fundo.x + 276, fundo.y,
            fundo.largura, fundo.altura,
        )
    }
}


contexto.fillStyle = '#70c5ce';
contexto.fillRect(0,0, canvas.width, canvas.height)


function loop(){
    
    fundo.desenha();
    chao.desenha();
    flappyBird.desenha();

    requestAnimationFrame(loop);
}

loop();