import tankData from './tankData.js';

function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("active");
  hamburger.innerHTML = menu.classList.contains("active")
    ? "&#x2715;" // Close icon
    : '<i class="fa-solid fa-bars"></i>'; // Hamburger menu icon
}

function populateTankDropdown() {
  const tankDropdown = document.getElementById("tankNumber");
  tankDropdown.innerHTML = "";

  // Add a default placeholder option
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a Tank";
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  tankDropdown.appendChild(defaultOption);

  // Populate dropdown with tank data
  Object.keys(tankData).forEach((tankNumber) => {
    const option = document.createElement("option");
    option.value = tankNumber;
    option.textContent = `Tank ${tankNumber}: ${tankData[tankNumber].material}`;
    tankDropdown.appendChild(option);
  });
}

// Foam calculation logic
function calculateFoam() {
  const tankNumber = parseInt(document.getElementById("tankNumber").value);

  if (!tankData[tankNumber]) {
    alert("Invalid tank number. Please select a valid tank.");
    return;
  }

  const tank = tankData[tankNumber];

  // Calculate square footage
  const sqFoot = Math.round(tank.diameter * tank.diameter);
  const coveredArea = Math.round(sqFoot * 0.8); // 80% coverage

  // Calculate critical application rate
  const criticalRate = Math.round(coveredArea * 0.2);

  // Foam requirements
  const foam1GPM = Math.round(criticalRate * 0.01);
  const foam3GPM = Math.round(criticalRate * 0.03);
  const totalFoam1 = Math.round(foam1GPM * 65);
  const totalFoam3 = Math.round(foam3GPM * 65);

  // Update the UI with results
  document.getElementById("tankLocation").textContent = tank.location;
  document.getElementById("tankMaterial").textContent = tank.material;
  document.getElementById("tankCapacity").textContent = tank.capacity.toLocaleString();
  document.getElementById("tankContainment").textContent = tank.containment.toLocaleString();
  document.getElementById("sqFoot").textContent = sqFoot.toLocaleString();
  document.getElementById("criticalRate").textContent = criticalRate.toLocaleString();
  document.getElementById("foam1").textContent = foam1GPM.toLocaleString();
  document.getElementById("foam3").textContent = foam3GPM.toLocaleString();
  document.getElementById("totalFoam1").textContent = totalFoam1.toLocaleString();
  document.getElementById("totalFoam3").textContent = totalFoam3.toLocaleString();

  document.getElementById("results").style.display = "block";
}

// Recalculate button animation
function recalculateEffect() {
  const resultsSection = document.getElementById("results");

  // Add a class for the visual effect
  resultsSection.classList.add("highlight-effect");

  // Run the foam calculation
  calculateFoam();

  // Remove the class after 1 second
  setTimeout(() => {
    resultsSection.classList.remove("highlight-effect");
  }, 1000); // 1 second for the visual effect
}

// Event listener for populating dropdown and attaching calculateFoam to dropdown change
document.addEventListener("DOMContentLoaded", () => {
  populateTankDropdown(); // Populate dropdown on page load

  const tankDropdown = document.getElementById("tankNumber");
  tankDropdown.addEventListener("change", calculateFoam); // Run calculation on tank selection
});

// Attach functions to the global window object for external calls
window.calculateFoam = calculateFoam;
window.toggleMenu = toggleMenu;
window.recalculateEffect = recalculateEffect;

