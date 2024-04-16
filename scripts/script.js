const consoleDiv = document.getElementById("console");
const herbInput = document.getElementById("herbInput");
const careLevelInput = document.getElementById("careLevelInput");
const tendGardenButton = document.getElementById("tendGardenButton");

// Function to update button text dynamically
function updateButtonLabel() {
  tendGardenButton.textContent = `tendGarden('${careLevelInput.value}')`;
}

herbInput.addEventListener("input", updateButtonLabel); // Update label on input

function log(message) {
  const entry = document.createElement("div");
  entry.innerHTML = `> ${message}`;
  entry.classList.add("highlight"); // Add highlight class for visual effect
  consoleDiv.appendChild(entry);
  setTimeout(() => entry.classList.remove("highlight"), 1000); // Remove highlight after 1 second
}

const tendGarden = (careLevel) => {
  const waterHerbs = (moisture) => {
    log(`Caring with ${careLevel} effort, time to water the ${moisture}`);
  };
  waterHerbs(herbInput.value);
};

function runDemo() {
  consoleDiv.innerHTML = ""; // Clear the console on each run
  if (confirm("Do you want to tend the garden?")) {
    tendGarden(careLevelInput.value);
  } else {
    log("Decided not to garden today.");
  }
}

function stopGardening() {
  log("Gardening stopped. Refresh the page to start again.");
}

// Initialize button label on page load
document.addEventListener("DOMContentLoaded", () => {
  updateButtonLabel();
});
