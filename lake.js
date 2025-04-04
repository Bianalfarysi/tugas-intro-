     function goBackToGame() {
            window.location.href = "../bagian2/gameplay.html";
        }

        function startMiniGame() {
            let words = ["danau", "toba", "sumatera", "wisata", "indah", "alam", "air", "gunung", "pulau", "samosir","Indonesia", "nusantra"];
            let word = words[Math.floor(Math.random() * words.length)];
            let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
            let guess;
            let attempts = 3;

            while (attempts > 0) {
                guess = prompt("Susun huruf ini menjadi kata yang benar: " + scrambled + "\nKesempatan: " + attempts);
                if (guess && guess.toLowerCase() === word) {
                    alert("Selamat! Jawaban benar. Kamu mendapatkan 💙 LOVE");
                    return;
                } else {
                    attempts--;
                    alert("Salah! Coba lagi.");
                }
            }
            alert("Kesempatan habis! Jawaban yang benar adalah " + word);
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
            window.location.href = "lake.html";
        }