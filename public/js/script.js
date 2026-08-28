const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

let isOpened = false;

close.style.display = "none";

open.addEventListener("click", function () {
  nav.style.right = 0;
  isOpened = true;
  buttonDisplay(isOpened);
});

close.addEventListener("click", function () {
  nav.style.right = "-300px";
  isOpened = false;
  buttonDisplay(isOpened);
});

function buttonDisplay(arg) {
  if (arg === true) {
    open.style.display = "none";

    close.style.display = "block";
  } else {
    open.style.display = "block";
    close.style.display = "none";
  }
}
