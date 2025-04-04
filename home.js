function goBackToGame() {
    window.location.href = "../bagian2/gameplay.html";
}

function startMiniGame() {
    let target = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 3;
    
    while (attempts > 0) {
        guess = prompt("Tebak angka antara 1-10. Kamu punya " + attempts + " kesempatan:");
        if (guess == target) {
            alert("Selamat! Kamu benar. Kamu mendapatkan  LOVE 💙");
            return;
        } else {
            attempts--;
            alert("Salah! Coba lagi.");
        }
    }
    alert("Kesempatan habis! Angka yang benar adalah " + target);
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

function openMusicSelection() {
    document.getElementById('musicSelection').style.display = 'block';
}

function closeMusicSelection() {
    document.getElementById('musicSelection').style.display = 'none';
}

function showPlayButton() {
    document.getElementById('playButton').style.display = 'block';
}

function playSelectedSong() {
    let songList = document.getElementById('songList');
    let selectedSong = songList.value;
    let musicPlayer = document.getElementById('musicPlayer');
    
    musicPlayer.src = selectedSong;
    musicPlayer.style.display = 'block';
    musicPlayer.play();
}

function playSelectedSong() {
    let songList = document.getElementById('songList');
    let selectedSong = songList.value;
    let musicPlayer = document.getElementById('musicPlayer');
    
    musicPlayer.src = selectedSong;
    musicPlayer.style.display = 'block';
    musicPlayer.play();
}

function playVideoAsBackground(videoSrc) {
    document.getElementById("bgVideoSource").src = videoSrc;
    document.getElementById("videoBackground").style.display = "block";
    document.getElementById("videoBackground").load();
    
    document.getElementById("buttonsContainer").style.display = "none";
    document.getElementById("backToHome").style.display = "block";
}

function goToHome() {
    window.location.href = "home.html";
}