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
    gravidade: 0.25,
    velocidade: 0,
    pulo: 4.6,
    pula() {
        this.velocidade = -this.pulo;
    },
    desenha() {
        contexto.drawImage(
            sprites,
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.x, this.y,
            this.largura, this.altura,
        );
    },
    atualiza() {
        this.velocidade += this.gravidade; // Apply gravity
        this.y += this.velocidade; // Update position with velocity
        
        // Prevent bird from falling below the ground
        if (this.y > canvas.height - this.altura) {
            this.y = canvas.height - this.altura;
            this.velocidade = 0; // Stop downward velocity when hitting the ground
        }
    }
};

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
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.x, this.y,
            this.largura, this.altura,
        );
        contexto.drawImage(
            sprites,
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.x + 224, this.y,
            this.largura, this.altura,
        );
    }
};

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
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.x, this.y,
            this.largura, this.altura,
        );
        contexto.drawImage(
            sprites,
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.x + 276, this.y,
            this.largura, this.altura,
        );
    }
};

const inicio = {
    spriteX: 135,
    spriteY: 0,
    largura: 173,
    altura: 152,
    x: 70,
    y: 70,
    desenha() {
        contexto.drawImage(
            sprites,
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.x, this.y,
            this.largura, this.altura,
        );
    }
};

const telaInicio = {
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);
        fundo.desenha();
        chao.desenha();
        flappyBird.desenha();
        inicio.desenha();
    },
    click() {
        telaAtiva = telaJogo;
    }
};

const telaJogo = {
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);
        fundo.desenha();
        chao.desenha();
        flappyBird.desenha();
        flappyBird.atualiza();
    },
    click() {
        flappyBird.pula();
    }
};

let telaAtiva = telaInicio;

function mudaTelaAtiva() {
    telaAtiva.click();
}

window.addEventListener("click", mudaTelaAtiva);

function loop() {
    telaAtiva.desenha();
    requestAnimationFrame(loop);
}

loop();