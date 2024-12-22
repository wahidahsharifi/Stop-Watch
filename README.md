# Stopwatch Application

## Overview
This Stopwatch application is a feature-rich, persistent stopwatch designed for both casual and professional use. It allows users to start, pause, reset, and record laps, while ensuring data persistence even after refreshing or closing the browser tab. The timer continues running in the background and accurately updates when the page is reloaded or revisited.

## Features
- **Start and Pause**: Users can start or pause the stopwatch using a single button.
- **Reset**: Resets the timer to `00:00:00.00` and clears all recorded laps.
- **Lap Recording**: Allows users to record multiple laps, displaying each lap's duration and the total elapsed time.
- **Persistent State**: The timer state (running or paused), elapsed time, and laps are saved in `localStorage` to ensure continuity across page reloads or tab closures.
- **Active Updates**: The stopwatch actively updates the displayed time and milliseconds every 10ms, even after a page reload.
- **Dynamic Document Title**: The document title dynamically updates to show the current timer value.

## Technologies Used
- **HTML**: Provides the structure of the application.
- **CSS**: Styles the user interface.
- **JavaScript**: Implements the stopwatch logic and ensures persistent state management.
- **LocalStorage**: Stores the timer state, elapsed time, and laps persistently.

## Usage Instructions
1. **Start/Pause**:
   - Click the "Play" button to start the timer.
   - While the timer is running, click the "Pause" button to pause it.

2. **Reset**:
   - Click the "Reset" button to reset the timer and clear all laps.

3. **Record Laps**:
   - While the timer is running, click the "Flag" button to record a lap.
   - The lap table will display the lap number, lap time, and total elapsed time.

4. **Persistence**:
   - The stopwatch state, time, and laps are saved automatically.
   - Refresh the page or close and reopen the tab—the timer will resume from where it left off if it was running.

## Code Highlights
- **Persistent State Management**:
  The application uses `localStorage` to save the timer state, elapsed time, and laps. The `loadState` function retrieves and applies the saved data on page load.

- **Accurate Time Calculation**:
  The application calculates the elapsed time using timestamps, ensuring precision even when the page is inactive.

- **Dynamic Display Updates**:
  The `setInterval` function updates the displayed time and milliseconds every 10ms while the timer is running.

## Example
1. Start the stopwatch.
2. Record a few laps.
3. Refresh the page—you will see the timer actively updating and the recorded laps intact.

## Potential Enhancements
- Add a "Dark Mode" toggle for better accessibility.
- Allow exporting lap data as a CSV file.
- Add a countdown timer feature.
- Provide customizable themes.

## License
This project is open-source and available for modification and distribution under the MIT License.
