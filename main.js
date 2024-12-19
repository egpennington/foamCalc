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
    alert(`Route not available for ${tankKey}`);
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

function calculateTankVolumes(tank) {
  const PI = Math.PI;
  const radius = tank.diameter / 2;
  const baseArea = PI * Math.pow(radius, 2); // Area in square feet

  // Volume calculations
  const volumePerInch = baseArea * (1 / 12); // Cubic feet for 1 inch
  const volumePerFoot = baseArea;            // Cubic feet for 1 foot

  // Convert to gallons (1 cubic foot = 7.48052 gallons)
  return {
    volumePerInch: Math.round(volumePerInch * 7.48052).toLocaleString(),
    volumePerFoot: Math.round(volumePerFoot * 7.48052).toLocaleString(),
  };
}

function calculateFoam() {
  calculateEffect()
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

  // Tank volume calculations
  const volumes = calculateTankVolumes(tank);

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
  document.getElementById("volumePerInch").textContent = volumes.volumePerInch;
  document.getElementById("volumePerFoot").textContent = volumes.volumePerFoot;

  document.getElementById("results").style.display = "block";
}

function calculateEffect() {
  const calculatingMessage = document.getElementById("calculating-message");
  const resultsSection = document.getElementById("results");

  calculatingMessage.style.display = "block";
  resultsSection.style.display = "none";

  setTimeout(() => {
    calculateFoam(); // Perform the calculations
    calculatingMessage.style.display = "none"; // Hide "Calculating..." message
    resultsSection.style.display = "block"; // Show results after calculation
  }, 1500); // Timeout duration for "Calculating..." effect
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

/* WIND direction and speed */
const lat = 60.6834; 
const lon = -151.3714;

function getWindDirection(deg) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial`)
  .then(res => {
    if (!res.ok) {
      throw new Error("Weather data not available");
    }
    return res.json(); // Close this .then() properly
  })
  .then(data => {
    const windDeg = data.wind.deg;
    const windSpeed = data.wind.speed;

    const windDirection = getWindDirection(windDeg);

    const weatherInfo = `
      <div class="weather-container">
        <p>Wind <i class="fa-solid fa-wind"></i></p>
        <span>${windDirection}</span>
        <span>${windSpeed} mph</span>
      </div>
    `;

    // Inject the weather info into the HTML
    document.getElementById('weather-info').innerHTML = weatherInfo;

    console.log(`Speed: ${windSpeed} mph`);
    console.log(`Wind Direction: ${windDirection}`);
  })
  .catch(error => console.error('Error fetching weather data:', error));


// Attach functions to the global window object for external calls
window.calculateFoam = calculateFoam;
window.toggleMenu = toggleMenu;
window.recalculateEffect = recalculateEffect;
window.showAboutPopup = showAboutPopup;
window.closeAboutPopup = closeAboutPopup;
window.showTankRoute = showTankRoute;
window.closeTankRoute = closeTankRoute;