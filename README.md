# Weather Web App

This is a weather web application that allows users to get the current weather information for a specified zipcode. It uses the OpenWeather API to fetch the weather data based on the coordinates obtained from the provided zipcode.

## Features

- Get the current weather information by entering a zipcode.
- Displays temperature, weather conditions, and other relevant data.
- User-friendly interface built with HTML, CSS, and EJS.
- Backend powered by Node.js and Express.js.
- Axios is used to handle HTTP requests to the OpenWeather API.

## Technologies Used

- Node.js
- Express.js
- Axios
- Body-Parser
- EJS
- HTML
- CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- An OpenWeather API key. You can get one by signing up at [OpenWeather](https://home.openweathermap.org/users/sign_up).

## Installation

1. Clone the repository:
    ```sh
    git clone thttps://github.com/MercySpectures/WeatherWebApp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd WeatherWebApp
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Open `index,js` file and add your OpenWeather API key:
    ```env
    API_KEY=your_api_key_here
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```
2. Open your web browser and go to `http://localhost:3000`.

3. Enter a zipcode in the input field and click the "Get Weather" button.

4. The weather information for the entered zipcode will be displayed.

## Project Structure

- `public/` - Contains CSS files.
- `views/` - Contains EJS templates.
- `index.js` - Main application file.

## Example

1. Enter the zipcode (e.g., 94040).
2. Click on the "Get Weather" button.
3. View the weather details for the specified location.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to contact me at huntethan144@gmail.com.
