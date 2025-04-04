let characters = ["../bagaian1/aset karakter/karakter1.gif", "../bagaian1/aset karakter/karakter2.gif", "../bagaian1/aset karakter/karakter3.gif","../bagaian1/aset karakter/karakter4.gif", "../bagaian1/aset karakter/karakter5.gif", "../bagaian1/aset karakter/karakter6.gif"];
let currentCharacterIndex = 0;

document.getElementById("nextBtn").addEventListener("click", function() {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    document.getElementById("characterImg").src = characters[currentCharacterIndex];
    document.getElementById("switchSound").play();
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentCharacterIndex = (currentCharacterIndex - 1 + characters.length) % characters.length;
    document.getElementById("characterImg").src = characters[currentCharacterIndex];
    document.getElementById("switchSound").play();
});

document.getElementById("startGame").addEventListener("click", function() {
    let name = document.getElementById("playerName").value.trim();
    if (name === "") {
        alert("Nama harus diisi!");
    } else {
        document.getElementById("buttonSound").play();
        localStorage.setItem("playerName", name);
        localStorage.setItem("playerCharacter", characters[currentCharacterIndex]);
        setTimeout(() => {
            window.location.href = "../bagian2/gameplay.html";
        }, 500); 
    }
});