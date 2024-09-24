const container = document.querySelector(".container");
const gridInput = document.querySelector("#dimensions");
const gridButton = document.querySelector(".createBtn");

function createGridElements(dimension) {
  for (let i = 1; i <= dimension; i++) {
    for (let j = 1; j <= dimension; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
			pixel.style.setProperty('flex-basis', `${800/dimension}px`);
			pixel.style.setProperty('height', `${800/dimension}px`);
      container.appendChild(pixel);
    }
  }
}

createGridElements(gridInput.value);

function pixelListener (){
	container.addEventListener("mouseover", (event) => {
		let target = event.target;
		target.classList.add("black");
	});
}

pixelListener();

function eliminateGrid(){
	while(container.hasChildNodes()){
		container.removeChild(container.lastChild);
	}
}

gridButton.addEventListener("click", () => {
	if(gridInput.value < 50){
		eliminateGrid();
		createGridElements(gridInput.value);
	} else {
		alert("Max grid density: 50x50")
	}
})