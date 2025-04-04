function goBackToGame() {
    window.location.href = "../bagian2/gameplay.html";
}

function startMiniGame() {
    let choices = ["Batu", "Gunting", "Kertas"];
    let playerChoice = prompt("Pilih: Batu, Gunting, atau Kertas?").toLowerCase();
    let computerChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();
    let reward = 100;

    alert("Kamu memilih: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    alert("Komputer memilih: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));

    if (playerChoice === computerChoice) {
        alert("Hasilnya seri!");
    } else if (
        (playerChoice === "batu" && computerChoice === "gunting") ||
        (playerChoice === "gunting" && computerChoice === "kertas") ||
        (playerChoice === "kertas" && computerChoice === "batu")
    ) {
        alert("Selamat! Kamu menang dan mendapatkan 💙 LOVE");
    } else {
        alert("Sayang sekali, kamu kalah. Coba lagi!");
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
    window.location.href = "mountain.html";
}