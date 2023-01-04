let next = document.getElementById("next");
let pre = document.getElementById("pre");
let progress = document.getElementById("progress");
let circleActive = document.querySelectorAll(".circle");

console.log(circleActive);
console.log(next);

let prog = 0;
let i = 0;
next.addEventListener("click", () => {
  i++;
  circleActive.forEach(() => {
    circleActive[i].classList.add("active");
  });
  prog += 30;
  console.log(prog);
  progress.style.width = `${prog}%`;
  console.log(prog);
  pre.removeAttribute("disabled");
  if (prog === 90) {
    next.setAttribute("disabled", "");
  }
});

pre.addEventListener("click", () => {
  circleActive.forEach(() => {
    circleActive[i].classList.remove("active");
  });
  i--;
  next.removeAttribute("disabled");
  prog = prog - 30;
  progress.style.width = `${prog}%`;
  console.log(prog);
  pre.removeAttribute("disabled");
  if (prog === 0) {
    pre.setAttribute("disabled", "");
  }
});
