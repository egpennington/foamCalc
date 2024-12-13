
import tankData  from './tankData.js'

function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
  
    menu.classList.toggle("active");
    hamburger.innerHTML = menu.classList.contains("active") ? "&#x2715;" : "&#9776;";
  } 
    
    function calculateFoam() {
      const tankNumber = parseInt(document.getElementById("tankNumber").value)

      if (!tankData[tankNumber]) {
        alert("Invalid tank number. Please enter a valid tank number.");
        return;
      }

      const tank = tankData[tankNumber];

      // Calculate square foot of the tank
      const sqFoot = Math.round(tank.diameter * tank.diameter); // Using tank diameter
      const coveredArea = Math.round(sqFoot * 0.8); // 80% coverage

      // Calculate critical application rate
      const criticalRate = Math.round(coveredArea * 0.2);

      // Calculate GPM for 1% and 3% foam
      const foam1GPM = Math.round(criticalRate * 0.01);
      const foam3GPM = Math.round(criticalRate * 0.03);

      // Calculate total foam required for 65 minutes
      const totalFoam1 = Math.round(foam1GPM * 65);
      const totalFoam3 = Math.round(foam3GPM * 65);

      // Update results
      document.getElementById("tankLocation").textContent = tank.location;
      document.getElementById("tankMaterial").textContent = tank.material;
      document.getElementById("tankCapacity").textContent = tank.capacity.toLocaleString();
      document.getElementById("tankContainment").textContent = tank.containment.toLocaleString()
      document.getElementById("sqFoot").textContent = sqFoot.toLocaleString();
      document.getElementById("criticalRate").textContent = criticalRate;
      document.getElementById("foam1").textContent = foam1GPM;
      document.getElementById("foam3").textContent = foam3GPM;
      document.getElementById("totalFoam1").textContent = totalFoam1.toLocaleString();
      document.getElementById("totalFoam3").textContent = totalFoam3.toLocaleString();

      document.getElementById("results").style.display = "block";
    }

    // Attach functions to the global window object
      window.calculateFoam = calculateFoam;
      window.toggleMenu = toggleMenu;
