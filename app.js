let playBalloon = true;

// Create a function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Create a function to create a balloon div
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
    balloon.style.bottom = '-200px';
    balloon.style.backgroundColor = getRandomColor(); // Set random color

    document.body.appendChild(balloon);

    // Animate the balloon to float up
    const animationDuration = getRandomNumber(5, 10);
    balloon.style.animationDuration = `${animationDuration}s`;
    // balloon.style.animationTimingFunction = 'linear';
    // balloon.style.animationName = 'floatUp';

    // Remove the balloon from the DOM after the animation ends
    setTimeout(() => {
        balloon.remove();
    }, animationDuration * 1000);
}

// createBalloon();
// Create multiple balloons
async function createBalloonsAsync() {
    while(playBalloon) {
        createBalloon();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

createBalloonsAsync();

// Function to generate a random color from the rainbow
function getRandomColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function playVideo() {
    var video = document.getElementById('myVideo');
    console.log(video);
    video.play();
}

const button = document.getElementById('button');
console.log(button);

button.onclick = function() {
    console.log('Button clicked');
    playVideo();
    button.remove();
    document.getElementsByClassName("rainbow")[0].style.display = 'none';
    playBalloon = false;
}