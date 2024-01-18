const gridboard = document.getElementById("gridboard");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", function () {
  const difficultSel = document.getElementById("difficult").value;
  let difficult;

  if (difficultSel == "Easy") {
    difficult = 100;
    gridboard.className = "d-flex flex-wrap gridboard-100";
  } else if (difficultSel == "Medium") {
    difficult = 81;
    gridboard.className = "d-flex flex-wrap gridboard-81";
  } else (difficultSel == "Hard") {
    difficult = 49;
    gridboard.className = "d-flex flex-wrap gridboard-49";
  }

  select(difficult, gridboard);
});
