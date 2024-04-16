const consoleDiv = document.getElementById("console");
const herbInput = document.getElementById("herbInput");
const careLevelInput = document.getElementById("careLevelInput");
const tendGardenButton = document.getElementById("tendGardenButton");

let isActive = true;

function log(message) {
  const entry = document.createElement("div");
  entry.innerHTML = `> ${message}`;
  entry.classList.add("highlight"); // Add highlight class for visual effect
  consoleDiv.appendChild(entry);
  setTimeout(() => entry.classList.remove("highlight"), 1000); // Remove highlight after 1 second
}

function waterHerbs(moisture) {
  if (!isActive) {
    log("Gardening has been stopped.");
    return;
  }
  log(
    `Caring with ${careLevelInput.value} effort, time to water the ${moisture}`
  );
}

function tendGarden() {
  if (!isActive) {
    log("Gardening has been stopped.");
    return;
  }
  log("Starting to garden!");
  waterHerbs(herbInput.value);
}

function runDemo() {
  consoleDiv.innerHTML = ""; // Clear the console on each run
  if (confirm("Do you want to tend the garden?")) {
    tendGarden();
  } else {
    log("Decided not to garden today.");
  }
}

function stopGardening() {
  isActive = false;
  log("Gardening is now paused. Refresh the page to start again.");
}

// function updateButtonLabel() {
//   let herbName = herbInput.value.trim();
//   herbName = herbName ? herbName : "Basil"; // Default to Basil if input is empty
//   tendGardenButton.innerHTML = `Call tendGarden('${herbName}')`;
// }
