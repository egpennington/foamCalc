const tankData = {
    10: { diameter: 95, area: 7088, capacity: 50000, material: "LSR", containment: 144000, location: "C st and 5th st", hydrant: "#20 on C st", roof: "Cone/IFR" },
    11: { diameter: 95, area: 7088, capacity: 50000, material: "Crude Oil", containment: 144000, location: "5th st", hydrant: "#37 on 5th st", roof: "Cone/IFR" },
    12: { diameter: 219, area: 37688, capacity: 300000, material: "Jet A", containment: 430000, location: "G st", hydrant: "#39 on G st/#48 on H st", roof: "Cone/IFR"},
    13: { diameter: 219, area: 37688, capacity: 300000, material: "Crude Oil", containment: 430000, location: "G st", hydrant: "#40 pn G st/#41 on 6th st/#47 on H st", roof: "Cone/IFR" },
    14: { diameter: 219, area: 37688, capacity: 300000, material: "Crude Oil", containment: 540000, location: "I st",  hydrant: "#42 on 6h st/#43 on I/#47 on H st", roof: "Cone/IFR" },
    20: { diameter: 200, area: 31416, capacity: 223000, material: "Low Sulfur VTB/LCO", containment: 309000, location: "C st and 5th st", hydrant: "#8/9 on B st/#19/20 on C st", roof: "Cone" },
    22: { diameter: 134, area: 14103, capacity: 100000, material: "Diesel/Jet", containment: 190000, location: "E st and 5th st", hydrant: "#36/37 on 5th st", roof: "Cone" },
    23: { diameter: 219, area: 37688, capacity: 300000, material: "HVGO", containment: 430000, location: "H st and 5th st", hydrant: "#38 on G st/49 on H st/50 and 5th st", roof: "Cone", foam: "semi-fixed: 4115 gpm" },
    24: { diameter: 95, area: 7088, capacity: 50000, material: "AGO", containment: 205000, location: "G st and 5th st", hydrant: "#34/35 on G st/50 on 5th st", roof: "Cone" },
    25: { diameter: 252, area: 49876, capacity: 425000, material: "Hi Sulfur Vac Bottoms", containment: 540000, location: "I st", hydrant: "#48 H st/#44 on I st", roof: "Cone" },
    30: { diameter: 42.5, area: 1419, capacity: 10000, material: "DF2/Jet A", containment: 167000, location: "A st and 4th st", hydrant: "#7 on 4th st/#6 on A st", roof: "Cone" },
    31: { diameter: 52, area: 2124, capacity: 15000, material: "DF2/DF1", containment: 167000, location: "A st", roof: "Cone" },
    32: { diameter: 112, area: 9852, capacity: 70000, material: "DF2/Jet A", containment: 167000, location: "B st and 4th st", roof: "Cone" },
    33: { diameter: 52, area: 2124, capacity: 15000, material: "Bunker/VTB", containment: 46400, location: "B st and 4th st", roof: "Cone"  },
    35: { diameter: 134, area: 14103, capacity: 100000, material: "Jet A", containment: 190000, location: "G st and 5th st", roof: "Cone" },
    36: { diameter: 173, area: 23506, capacity: 200000, material: "Diesel Fuel #2", containment: 540000, location: "I st and 5th st", roof: "Cone" },
    37: { diameter: 134, area: 14103, capacity: 100000, material: "Light Cycle Oil/Jet A", containment: 309000, location: "C st and 3rd st", roof: "Cone" },
    40: { diameter: 85, area: 5675, capacity: 40000, material: "Gasoline", containment: 167000, location: "A st", roof: "Cone/IFR" },
    41: { diameter: 85, area: 5675, capacity: 40000, material: "Gasoline", containment: 167000, location: "B st", roof: "Cone/IFR" },
    42: { diameter: 85, area: 5675, capacity: 5675, material: "Asphalt", containment: 46400, location: "B st", roof: "Cone" },
    45: { diameter: 134, area: 14103, capacity: 100000, material: "Naphtha", containment: 190000, location: "G st and 3rd st", roof: "Cone/IFR" },
    51: { diameter: 60, area: 2827, capacity: 20000, material: "Asphalt", containment: 46400, location: "B st", roof: "Cone" },
    60: { diameter: 52, area: 2124, capacity: 15000, material: "Diesel", containment: 89000, location: "A st and 1st st", hydrant: "#11 B st.", roof: "IFR" },
    61: { diameter: 42.5, area: 1419, capacity: 10000, material: "Gasoline", containment: 89000, location: "B st and 1st st", hydrant: "#11 B st.", roof: "IFR" },
    62: { diameter: 95, area: 7088, capacity: 50000, material: "Gasoline", containment: 89000, location: "A st and 1st st", hydrant: "#3 on A st.", roof: "Cone/IFR" },
    63: { diameter: 95, area: 7088, capacity: 50000, material: "Gasoline", containment: 89000, location: "B st and 1st st", hydrant: "#12 on B st.", roof: "Cone/IFR" },
    64: { diameter: 134, area: 14103, capacity: 100000, material: "Unleaded/ Jet A", containment: 190000, location: "E st and 3rd st", roof: "Cone/IFR" },
    65: { diameter: 134, area: 14103, capacity: 100000, material: "UnLeaded Gasoline", containment: 205000, location: "G st and 3rd st", roof: "Cone/IFR" },
    66: { diameter: 134, area: 14103, capacity: 100000, material: "Sour Naphtha and Kerosene", containment: 205000, location: "H st and 3rd st", roof: "Cone/IFR" },
    67: { diameter: 180, area: 25447, capacity: 198000, material: "Naphtha", containment: 205000, location: "H st and 5th st", roof: "Cone/IFR" },
    70: { diameter: 60, area: 2827, capacity: 20000, material: "Butane", containment: 35000, location: "B st and 1st st", roof: "Sphere" },
    80: { diameter: 37.9, area: 1119, capacity: 5000, material: "Propane", containment: 5000, location: "1st st", roof: "Sphere" },
    2401: { diameter: 140, area: 15394, capacity: 132000, material: "Crude Oil", containment: 270000, location: "KPL", roof: "Cone/IFR"},
    2402: { diameter: 140, area: 15394, capacity: 132000, material: "Crude Oil", containment: 270000, location: "KPL", roof: "Cone/IFR" },
    2405: { diameter: 180, area: 25447, capacity: 200000, material: "Crude Oil", containment: 270000, location: "KPL", roof: "Cone/IFR" },
    2407: { diameter: 180, area: 25447, capacity: 250000, material: "Crude Oil", containment: 270000, location: "KPL", roof: "Cone/IFR" },
    2408: { diameter: 180, area: 25447, capacity: 235000, material: "Crude Oil", containment: 250000, location: "KPL", roof: "Cone" },
  }

  export default tankData







