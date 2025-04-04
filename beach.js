function goBackToGame() {
    window.location.href = "../bagian2/gameplay.html";
}

function goBackToGame() {
    window.location.href = "../bagian2/gameplay.html";
}

function startMiniGame() {
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;

    alert("Kamu melempar dadu dan mendapatkan angka " + playerRoll);
    alert("Komputer melempar dadu dan mendapatkan angka " + computerRoll);

    if (playerRoll > computerRoll) {
        alert("Selamat! Kamu menang dan mendapatkan 💙 LOVE");
    } else if (playerRoll < computerRoll) {
        alert("Sayang sekali, kamu kalah. Coba lagi lain kali!");
    } else {
        alert("Hasilnya seri! Coba lagi untuk menang.");
    }
}
function playVideo(videoSrc) {
    document.getElementById("videoSource").src = videoSrc;
    document.getElementById("videoPlayer").load();
    document.getElementById("videoContainer").style.display = "block";
}

function closeVideo() {
    document.getElementById("videoContainer").style.display = "none";
    document.getElementById("videoPlayer").pause();
}

function playVideoAsBackground(videoSrc) {
    document.getElementById("bgVideoSource").src = videoSrc;
    document.getElementById("videoBackground").style.display = "block";
    document.getElementById("videoBackground").load();
    
    document.getElementById("buttonsContainer").style.display = "none";
    document.getElementById("backToHome").style.display = "block";
}

function goToHome() {
    window.location.href = "beach.html";
}