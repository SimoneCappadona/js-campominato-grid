function pippo(difficult, grid) {
  grid.innerHTML = "";
  let difficultSelection ; 
  if (difficult.value == "Easy") {
    difficultSelection = 100;
  } else if (difficult.value == "Medium") {
    difficultSelection = 81;
  } else if (difficult.value == "Hard"){
    difficultSelection = 49;
  }else  {
  }
  for (let i = 1; i <= difficultSelection; i++) {
    const cella = document.createElement("div");
    cella.addEventListener("click", function () {
      cella.className = "square";
      cella.innerText = i;
    });
    grid.append(cella);
  }
  
}

