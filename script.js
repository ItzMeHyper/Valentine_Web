document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const bgMusic = document.getElementById("background-music");
    let clickCount = 0;


    yesBtn.addEventListener("click", function () {
        let yesSound = new Audio("sounds/yes.mp3");
        yesSound.play();
        bgMusic.play();

        startConfetti();

        for (let i = 0; i < 10; i++) {
            createHeart();
        }

        setTimeout(() => {
            window.location.href = "love.html";
        }, 2000);
    });

    noBtn.addEventListener("mouseover", function () {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    noBtn.addEventListener("click", function () {
        clickCount++;
        let noSound = new Audio("sounds/no.mp3");
        noSound.play();

        if (clickCount >= 3) {
            window.location.href = "nope.html";
        } else {
            alert("Haha, you can't say no! 😆");
        }
    });

    function createHeart() {
        let heart = document.createElement("span");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `100vh`;
        heart.style.fontSize = "2rem";
        heart.style.animation = "floatUp 3s ease-in-out";
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 3000);
    }
    setInterval(createHeart, 500);
});

document.head.insertAdjacentHTML("beforeend", `
<style>
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}
</style>
`);
