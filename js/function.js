function select(difficult, difInner) {
  difInner.innerHTML = "";
  for (let i = 1; i <= difficult; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", function () {
      div.className = "square";
    });
    div.append(i);
    inner.append(div);
  }
}
