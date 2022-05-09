// const StartButtonImg = new Image();
// StartButtonImg.src = "img/CLICKtoSTART.png";
// function drawStartGame(img, sX, sY, sW, sH, dX, dY, dW, dH){
//     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
// }
//drawStartGame(StartButtonImg,0,0,1024,967,StartButton.x,StartButton.y,StartButton.width,StartButton.height)
// const StartButton ={ 
//     x: 300,
//     y: 200,
//     width: 200,
//     height: 200 
// };
document.addEventListener("DOMContentLoaded", function () {
    const StartButton = document.querySelector('.StartImg');
    const Container = document.querySelector('#Container');
    const backBtn = document.querySelector('.home-btn');
    // document.querySelector('.GamePoint').innerHTML = GamePoint;
    StartButton = document.addEventListener('click', StartGameClick);
    function StartGameClick() {
        startAnimating(60);
        Container.style.display = 'block';
        backBtn.style.display = 'block';
        StartButton.style.display = 'none';
    }
})
