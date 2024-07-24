document.addEventListener("DOMContentLoaded", function () {
  const pings = document.querySelectorAll(
    ".ping, .ping2, .ping3, .ping4, .ping5, .ping6"
  );

  pings.forEach(function (ping) {
    let videoSrc;
    let infoText;

    switch (ping.className) {
      case "ping":
        videoSrc = "1층패스.mp4";
        infoText = "클릭하시면 1층패스를 하는법을 보여줍니다";
        break;
      case "ping2":
        videoSrc = "담패스.mp4";
        infoText = "클릭하시면 담패스하는법을 알려드립니다.";
        break;
      case "ping3":
        videoSrc = "홀가는법.mp4";
        infoText = "클릭하시면 홀가는방법을 알려드립니다.";
        break;
      case "ping4":
        videoSrc = "2층가는법&상대베이스낙하.mp4";
        infoText = "클릭하시면 2층가는법&상대베이스낙하하는방법을 알려드립니다";
        break;
      case "ping5":
        videoSrc = "나무담.mp4";
        infoText = "클릭하시면 나무담가는법을 알려드립니다.";
        break;
      case "ping6":
        videoSrc = "담가기.mp4";
        infoText = "클릭하시면 담가는법을 알려드립니다.";
        break;
    }

    ping.addEventListener("mouseenter", function () {
      ping.src = "ping2.png";
      ping.style.transition = "width 1s, height 1s";
      ping.style.width = "100px";
      ping.style.height = "100px";
      showInfo(infoText);
    });

    ping.addEventListener("mouseleave", function () {
      ping.style.transition = "width 1s, height 1s";
      ping.style.width = "100px";
      ping.style.height = "100px";
      ping.src = "ping.png";
      hideInfo();
    });

    ping.addEventListener("click", function () {
      showVideo(videoSrc);
    });
  });

  let display;

  function showInfo(text) {
    if (!display) {
      display = document.createElement("div");
      display.innerText = text;
      display.classList.add("display");
      document.body.appendChild(display);
    }
  }

  function hideInfo() {
    if (display) {
      display.classList.add("slide-down");
      setTimeout(function () {
        document.body.removeChild(display);
        display = null;
      }, 500);
    }
  }

  let video;

  function showVideo(src) {
    const overlay = document.createElement("div");
    const inform = document.createElement("div");
    overlay.appendChild(inform);
    inform.classList.add("inform");
    overlay.classList.add("overlay");

    video = document.createElement("video");
    video.src = src;
    video.classList.add("video");
    video.controls = true;
    inform.appendChild(video);
    video.setAttribute("autoplay", true);

    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });
  }

  document.addEventListener("click", function () {
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
});
