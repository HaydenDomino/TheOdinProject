const size = 16;
const grid = document.getElementById("grid");

console.log("Creating grid");
for (i = 0 ; i < (size * size); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseenter", () => {
        square.classList.add("active");
    });
    grid.appendChild(square);
}
console.log("Grid created");

const allSquares = document.querySelectorAll(".square");
const resetButton = document.querySelector(".resetBtn");

resetButton.addEventListener("click", () => {
    allSquares.forEach(square => {
        square.classList.remove("active");
    });
    console.log("Resetting now");
});