# Fire Foam Calculator App

## Overview
The **Fire Foam Calculator App** is a tool designed to calculate fire foam requirements for various tank sizes. Users can input a tank number to retrieve pre-configured data and see calculations such as square footage, critical application rate, foam requirements (1% and 3%), and real-time wind data.

### Features
- **Tank Data Lookup:** Enter a tank number to fetch details like diameter, capacity, material, and location.
- **Foam Calculations:** Computes gallons per minute (GPM) and total foam required for 65 minutes.
- **Real-Time Wind Data:** Displays current wind speed and direction for the selected tank location.
- **Responsive Design:** Mobile-first layout, optimized for both small and large screens.
- **Hamburger Menu:** Includes an "About" section with details on calculations and tank references.
- **Sliding Menu:** The "About" menu slides in smoothly from the left.
- **Route Images:** Clickable location links provide tank-specific route images for easy navigation.

## Technologies Used
- **HTML:** For the structure of the app.
- **CSS:** For responsive and styled layouts.
- **JavaScript:** For calculations, wind data integration, and interactivity.
- **OpenWeather API:** Fetches real-time wind speed and direction.

## How to Use
1. **Select a Tank:** Use the dropdown to select a valid tank.
2. **View Results:** The app automatically calculates foam requirements and displays wind data.
3. **Recalculate:** Use the "Recalculate" button to refresh calculations if needed.
4. **View Tank Route:** Click on the tank location link to view a route image for that tank.
5. **About Menu:** Use the hamburger menu to open the "About" section and see detailed information on how the app works.

### Tank Data
| Tank Number | Diameter (ft) | Capacity (gallons) | Material                        | Location               |
|-------------|---------------|--------------------|---------------------------------|------------------------|
| 11          | 95            | 50,000            | Crude Oil                      | 5th St                |
| 13          | 219           | 300,000           | Crude Oil                      | G St                  |
| 14          | 219           | 300,000           | Crude Oil                      | I St                  |
| 23          | 219           | 300,000           | HVGO                           | H St and 5th St       |
| 25          | 252           | 452,000           | HVGO                           | I St                  |
| 64          | 134           | 100,000           | No-Lead Gasoline               | E St and 3rd St       |
| 66          | 134           | 100,000           | Sour Naphtha and Kerosene      | H St and 3rd St       |

### Wind Data
- **Wind Speed:** Real-time speed in mph fetched from the OpenWeather API.
- **Wind Direction:** Converts wind degree into compass directions (e.g., N, NE, SW).
- **Integration:** Automatically fetches wind data based on the tank’s latitude and longitude.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd fire-foam-calculator
   ```
3. Open `index.html` in your browser to run the app.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License.

---

Feel free to enhance or customize this app as needed. Enjoy using the **Fire Foam Calculator App**!