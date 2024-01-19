const grid = document.getElementById("grid");
const playBtn = document.getElementById("play");
const difficultSel = document.getElementById("difficult");

playBtn.addEventListener("click", function () {
  pippo(difficultSel,grid);
});

let bombs = []
