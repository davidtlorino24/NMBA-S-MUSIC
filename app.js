let mysound = document.getElementById("mysound");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (mysound.paused) {
    // If paused then play the
    // music and change the image
    mysound.play();
    icon.src = "Assets/Pause.png";
  } else {
    // If playing then pause the
    // music and change the image
    mysound.pause();
    icon.src = "Assets/play.png";
  }
  const progressBar = document.getElementById("progress-bar");
  const audio = document.getElementById("mysound");

  audio.ontimeupdate = function () {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percentage + "%";
  };
};
