
function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
  
    menu.classList.toggle("active");
    hamburger.innerHTML = menu.classList.contains("active") ? "&#x2715;" : "☰"; // Toggle icon
  } 
    
    function calculateFoam() {
      const tankData = {
        11: { diameter: 95, capacity: 50000, material: "Crude Oil" },
        12: { diameter: 219, capacity: 300000, material: "Jet A" },
        13: { diameter: 219, capacity: 300000, material: "Crude Oil" },
        14: { diameter: 219, capacity: 300000, material: "Crude Oil" },
        20: { diameter: 200, capacity: 223000, material: "Low Sulfur VTB/LCO" },
        22: { diameter: 134, capacity: 100000, material: "Diesel/Jet" },
        23: { diameter: 219, capacity: 300000, material: "HVGO" },
        25: { diameter: 252, capacity: 452000, material: "Hih Sulfur Vac Bottoms" },
        33: { diameter: 52, capacity: 15000, material: "Bunker/VTB" },
        35: { diameter: 134, capacity: 100000, material: "Jet" },
        36: { diameter: 173, capacity: 200000, material: "Diesel Fuel #2" },
        37: { diameter: 134, capacity: 100000, material: "Light Cycle Oil/Jet A" },
        42: { diameter: 85, capacity: 40000, material: "Asphalt" },
        45: { diameter: 134, capacity: 100000, material: "Napatha"},
        51: { diameter: 60, capacity: 20000, material: "Asphalt" },
        64: { diameter: 134, capacity: 100000, material: "UnLeaded Gasoline" },
        65: { diameter: 134, capacity: 100000, material: "UnLeaded Gasoline" },
        66: { diameter: 134, capacity: 100000, material: "Sour Naphtha and Kerosene" },
        67: { diameter: 160, capacity: 175000, material: "Napatha"},
        70: { diameter: 85, capacity: 35000, material: "Butane" },
        80: { diameter: 85, capacity: 40000, material: "Propane" },
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