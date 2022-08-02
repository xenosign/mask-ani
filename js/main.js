const main = document.querySelector("main");
const btns = main.querySelectorAll("#nav li");
const btnsLen = btns.length;

const panels = main.querySelectorAll("section article");

let before = -1;

for (let i = 0; i < btnsLen; i++) {
  btns[i].addEventListener("click", (e) => {
    if (before === -1 && i !== 0) {
      before = i;
      btns[0].classList.remove("on");
      btns[i].classList.add("on");

      panels[i].classList.add("lower");
      panels[0].classList.add("mask");

      setTimeout(() => {
        panels[0].classList.remove("mask");
        panels[0].classList.remove("on");
        panels[i].classList.remove("lower");
        panels[i].classList.add("on");
      }, 1400);
    } else if (before !== i) {
      btns[before].classList.remove("on");
      btns[i].classList.add("on");

      panels[i].classList.add("lower");
      panels[before].classList.add("mask");

      setTimeout(() => {
        panels[before].classList.remove("mask");
        panels[before].classList.remove("on");
        panels[i].classList.remove("lower");
        panels[i].classList.add("on");
        before = i;
      }, 1400);
    }
  });
}
