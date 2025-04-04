function goBackToGame() {
    window.location.href = "../bagian2/gameplay.html";
}

function startMiniGame() {
    let tasks = ["Menulis laporan", "Meeting dengan klien", "Membalas email", "Membuat presentasi", "Menganalisis data"];
    let timeLimit = 5; 
    
    alert("Selamat datang di simulasi kerja Jakarta! Pilih tugas dengan cepat!");
    let startTime = new Date().getTime();
    
    let chosenTask = prompt("Pilih tugas: " + tasks.join(", "));
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000;
    
    if (tasks.includes(chosenTask) && timeTaken <= timeLimit) {
        alert("Bagus! Kamu menyelesaikan tugas tepat waktu dan mendapat 💙 LOVE");
    } else if (timeTaken > timeLimit) {
        alert("Terlalu lambat! Kamu tidak mendapat gaji kali ini.");
    } else {
        alert("Tugas tidak valid. Coba lagi nanti.");
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
    window.location.href = "workplace.html";
}