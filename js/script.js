const fagner = document.querySelector('.fagner');
const dino = document.querySelector('.dino');
const resetButton = document.getElementById('resetButton');

const jump = () => {
    fagner.classList.add('jump');  

    setTimeout( ()  =>{
        fagner.classList.remove('jump');
    },500);
}
 
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    const loop = setInterval(() => {
    
        
        const dinoPosition = dino.offsetLeft;
        const fagnerPosition = +getComputedStyle(fagner).bottom.replace('px','');
    
        console.log(fagnerPosition)
        
        if (dinoPosition <= 60 && fagnerPosition < 10){
    
            dino.style.animation = 'none';
            dino.style.left = `${dinoPosition}px`;
                        
            fagner.style.animation = 'none';
            fagner.style.bottom = `${fagnerPosition}px`;
            fagner.src = './imagens/20230716-193946-2-unscreen.gif'            
            resetButton.addEventListener('click', () => {
                location.reload();
            });
    
            clearInterval(loop);
        }
    
    }, 10);
    startButton.style.display = 'none'; // Oculta o botão após iniciar o jogo, se desejar

});


document.addEventListener('keydown', jump);
