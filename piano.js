
function playAudio(fileName) {
    let audio = new Audio(fileName);
    audio.play().then(() => {
        console.log("Played: " + fileName);
    });
}
document.addEventListener("keydown", function (event) {

    if (event.key === "a") {
        playAudio("C3.mp3.mpeg");
    }

    if (event.key === "s") {
        playAudio("D3.mp3.mpeg");
    }

    if (event.key === "d") {
        playAudio("E3.mp3.mpeg");
    }

    if (event.key === "f") {
        playAudio("F3.mp3.mpeg");
    }

    if (event.key === "g") {
        playAudio("G3.mp3.mpeg");
    }

});