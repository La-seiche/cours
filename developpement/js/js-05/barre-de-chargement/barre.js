var downloadContainer = document.getElementById("download-container");
var timer;
var i = 0;
var downloadBar = document.createElement("div");

function download() {
  downloadBar.classList.add("test");
  downloadContainer.appendChild(downloadBar);
  timer = setInterval(fullfill, 200);
  console.log(downloadBar);
}

function fullfill() {
  downloadBar.style.width = i + "%";
  i++;
  if (i > 100) {
    clearInterval(timer);
  }
}

download();
