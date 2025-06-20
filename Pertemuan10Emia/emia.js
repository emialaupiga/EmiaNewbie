// Alert saat klik tombol login atau register
document.getElementById("loginBtn").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

document.getElementById("registerBtn").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

// Ganti tulisan genre secara otomatis
const genreText = document.getElementById("genre");
const genres = ["Horror", "Action", "Romance", "Comedy"];
let index = 0;

setInterval(() => {
  index = (index + 1) % genres.length;
  genreText.textContent = genres[index];
}, 4000);
