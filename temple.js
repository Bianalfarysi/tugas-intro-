function goBackToGame() {
    window.location.href = "../bagian2/gameplay.html";
}

function startMiniGame() {
    let questions = [
        { question: "Di pulau manakah Pura Besakih berada?", answer: "bali" },
        { question: "Pura Besakih dikenal sebagai pura terbesar untuk agama apa?", answer: "hindu" },
        { question: "Berapa jumlah pura utama di kompleks Pura Besakih? (Jawab dengan angka)", answer: "23" }
    ];

    let correctAnswers = 0;
    
    for (let i = 0; i < questions.length; i++) {
        let playerAnswer = prompt(questions[i].question).toLowerCase();
        if (playerAnswer === questions[i].answer) {
            alert("Benar!");
            correctAnswers++;
        } else {
            alert("Salah! Jawaban yang benar: " + questions[i].answer);
        }
    }
    
    if (correctAnswers === questions.length) {
        alert("Selamat! Kamu menjawab semua pertanyaan dengan benar dan mendapatkan 💙 LOVE");
    } else {
        alert("Coba lagi untuk mendapatkan semua jawaban benar!");
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
    window.location.href = "temple.html";
}