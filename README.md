# Location Information README

## Overview
This project provides a simple web page that displays the user's current location information using the Geolocation API and reverse geocoding.

## Files

### index.html
This file contains the structure of the web page, including:
- A section to display location information.
- Two buttons to show either the address or the coordinates of the current location.

### style.css
This file contains the styles for the web page.

### script.js
This file contains the JavaScript code responsible for:
- Fetching the user's current location.
- Updating the HTML to display location information.
- Handling button clicks to show either the address or the coordinates.

## Getting Started

### Prerequisites
To run this project, you need a modern web browser that supports the Geolocation API.

### Instructions
1. Clone or download the repository to your local machine.
2. Open `index.html` in your web browser.
3. Allow location access when prompted by the browser.
4. Click the "Show Address" button to display the address.
5. Click the "Show Coordinates" button to display the coordinates.

## Usage

### Location Information
- The location information is fetched using the Geolocation API.
- The reverse geocoding is performed using the BigDataCloud API.

### Buttons
- **Show Address**: Displays the city, state, and country of the current location.
- **Show Coordinates**: Displays the latitude and longitude of the current location.

## Notes
- Ensure that you have an internet connection for the reverse geocoding API to work.
- The location fetching process might take a few moments depending on the device and browser used.
