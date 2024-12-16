import tankData from './tankData.js';
import tankRoutes from './tankRoutes.js';

function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("active");
  hamburger.innerHTML = menu.classList.contains("active")
    ? "&#x2715;"
    : '<i class="fa-solid fa-bars"></i>';
}

function showAboutPopup() {
  const aboutPopup = document.getElementById("about-popup");
  aboutPopup.classList.add("show");
}

function closeAboutPopup() {
  const aboutPopup = document.getElementById("about-popup");
  aboutPopup.classList.remove("show");
}

function showTankRoute(tankNumber) {
  const tankKey = `Tank ${tankNumber}`;
  const routeImage = tankRoutes[tankKey];

  if (routeImage) {
    const routePopup = document.getElementById("route-popup");
    const routeImageElement = document.getElementById("route-image");

    routeImageElement.src = routeImage;
    routePopup.classList.add("show");
  } else {
    alert(`Route not available for Tank ${tankKey}`);
  }
}

function closeTankRoute() {
  const routePopup = document.getElementById("route-popup");
  routePopup.classList.remove("show");
}

function populateTankDropdown() {
  const tankDropdown = document.getElementById("tankNumber");
  
  if (tankDropdown.children.length > 0) return; // Avoid re-population

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

function calculateFoam() {
  const tankNumber = parseInt(document.getElementById("tankNumber").value);

  if (!tankData[tankNumber]) {
    alert("Invalid tank number. Please select a valid tank.");
    return;
  }

  const tank = tankData[tankNumber];

  // Calculate square footage
  const diameterSq = Math.round(tank.diameter * tank.diameter);
  const sqFoot = Math.round(diameterSq * 0.8); // 80% coverage
  const criticalRate = Math.round(sqFoot * 0.2); // 20% of covered area

  // Foam requirements
  const foam1GPM = Math.round(criticalRate * 0.01); // 1% foam
  const foam3GPM = Math.round(criticalRate * 0.03); // 3% foam
  const totalFoam1 = Math.round(foam1GPM * 65); // 65 min for 1%
  const totalFoam3 = Math.round(foam3GPM * 65); // 65 min for 3%

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

function recalculateEffect() {
  const resultsSection = document.getElementById("results");
  const loadingMessage = document.getElementById("loading-message");

  loadingMessage.style.display = "block";

  resultsSection.classList.add("highlight-effect");

  setTimeout(() => {
    calculateFoam();
    loadingMessage.style.display = "none";
    resultsSection.classList.remove("highlight-effect");
  }, 1500);
}

document.addEventListener("DOMContentLoaded", () => {
  populateTankDropdown();

  const tankDropdown = document.getElementById("tankNumber");
  tankDropdown.addEventListener("change", calculateFoam);
});

// Attach functions to the global window object for external calls
window.calculateFoam = calculateFoam;
window.toggleMenu = toggleMenu;
window.recalculateEffect = recalculateEffect;
window.showAboutPopup = showAboutPopup;
window.closeAboutPopup = closeAboutPopup;
window.showTankRoute = showTankRoute;
window.closeTankRoute = closeTankRoute;
