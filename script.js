function yesBtn() {
    const video = document.getElementById("video1");
    const image = document.getElementById("image-display");
    const text = document.getElementById("yes-greetings");

    text.innerText = "Yayyy!!!!";

    image.style.display = "none";
    video.style.display = "block";

    video.src = "/assets/videos/yesOutcome.mp4";
    video.style.width = "500px"
    video.style.height = "500px"
    video.load();
    video.play();

    yesbtn.style.display = "none";
    nobtn.style.display = "none";
}

let count = 0;

const images = [
    "assets/images/are-you-sure.png",
    "assets/images/are-you-sure-you're-sure.png",
    "assets/images/pleaseee.png",
    "assets/images/just-say-yes.png",
    "assets/images/you-better-say-yes.png",
    "assets/images/last-chance.png",
    "assets/images/last-chance.png",
    "assets/images/last-chance.png",
    "assets/images/last-chance.png",
    "assets/images/last-chance.png",
    "assets/images/last-chance.png",
    "assets/images/fine.png"
];

const texts = [
    "Are you sure?",
    "Are you sure you're sure??",
    "Pleaseee",
    "Just say yes",
    "you better say yes",
    "last chance",
    "last chance",
    "last chance",
    "last chance",
    "last chance",
    "last chance",
    "fine!!!!"
];

let noIndex = 0;
function changeNoClick() {
    const video = document.getElementById("video1");
    const image = document.getElementById("image-display");
    const noBtn = document.getElementById("nobtn");
    

    {
        video.style.display = "none";
        image.style.display = "block";

        image.src = images[noIndex];
        noBtn.innerText = texts[noIndex];
        noIndex = (noIndex + 1) % images.length;

        count++;
    }

    yesbtn.style.padding = `${10 + count*8}px ${20 + count*8}px`;
    yesbtn.style.fontSize = `${20 + count*8}px`;

    const container = document.getElementById("container");
    container.style.justifyContent = "flexstart";
}