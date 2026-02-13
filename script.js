const openBtn = document.getElementById("openBtn");
const popup = document.getElementById("popup");
const music = document.getElementById("bg-music");

openBtn.addEventListener("click", function(){
    popup.style.display = "flex";
    music.play();
});

function closePopup(){
    popup.style.display = "none";
}
