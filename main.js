
function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
  
    menu.classList.toggle("active");
    hamburger.innerHTML = menu.classList.contains("active") ? "&#x2715;" : "☰"; // Toggle icon
  } 
    
    function calculateFoam() {
      const tankData = {
        11: { diameter: 95, capacity: 50000, material: "Crude Oil" },
        13: { diameter: 219, capacity: 300000, material: "Crude Oil" },
        14: { diameter: 219, capacity: 300000, material: "Crude Oil" },
        23: { diameter: 219, capacity: 300000, material: "HVGO" },
        25: { diameter: 252, capacity: 452000, material: "HVGO" },
        45: { diameter: 134, capacity: 100000, material: "Napatha"},
        64: { diameter: 134, capacity: 100000, material: "No-Lead Gasoline" },
        65: { diameter: 134, capacity: 100000, material: "No-Lead Gasoline" },
        66: { diameter: 134, capacity: 100000, material: "Sour Naphtha and Kerosene" }
      };

      const tankNumber = parseInt(document.getElementById("tankNumber").value);

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
      document.getElementById("tankMaterial").textContent = tank.material;
      document.getElementById("tankCapacity").textContent = tank.capacity;
      document.getElementById("sqFoot").textContent = sqFoot;
      document.getElementById("criticalRate").textContent = criticalRate;
      document.getElementById("foam1").textContent = foam1GPM;
      document.getElementById("foam3").textContent = foam3GPM;
      document.getElementById("totalFoam1").textContent = totalFoam1;
      document.getElementById("totalFoam3").textContent = totalFoam3;

      document.getElementById("results").style.display = "block";
    }