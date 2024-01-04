let pluses = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(" .minus");
let paragraph = document.querySelectorAll("p");

for (let i = 0; i < pluses.length; i++) {
  pluses[i].addEventListener("click", () => {
    paragraph[i].classList.add("show");
    pluses[i].style.display = "none";
    minus[i].style.display = "block";
  });
  minus[i].addEventListener("click", () => {
    paragraph[i].classList.remove("show");
    minus[i].style.display = "none";
    pluses[i].style.display = "block";
  });
}
