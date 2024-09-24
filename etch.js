const container = document.querySelector(".container");

function createGridElements(dimension) {
  for (let i = 1; i <= dimension; i++) {
    for (let j = 1; j <= dimension; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      container.appendChild(pixel);
    }
  }
}

createGridElements(16);

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  target.classList.add("black");
});
