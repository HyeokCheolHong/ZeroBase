const btnEl = document.querySelector('.switch-btn');
const videoEl = document.querySelector('.video-container');

btnEl.addEventListener("click", () => {
  if(!btnEl.classList.contains("slide")) {
    btnEl.classList.add("slide");
    videoEl.pause();
  } else {
    btnEl.classList.remove("slide");
    videoEl.play();
  }
})

const preloaderEl = document.querySelector('.preloader');

// DOMContentLoaded 와 addEventListener('load')의 차이
// addEventListener('load') : 모든 웹페이지의 동작이 완료되었을때 동작
// DOMContentLoaded : DOM만 로드가 완료되면 동작을 진행한다.

window.addEventListener('load', () => {
  preloaderEl.classList.add("hide-preloader");
})