"use strict";

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyDiv = this.document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  keyDiv.classList.add("playing");

  audio.play();
});

const keys = document.querySelectorAll(".key");

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};

keys.forEach((k) => k.addEventListener("transitionend", removeTransition));
