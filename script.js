function showImage(src) {
  document.getElementById("modal-img").src = src;
  document.getElementById("modal").style.display = "flex";
}

function hideImage() {
  document.getElementById("modal").style.display = "none";
}
