// 1. Import the Express package we downloaded via npm
const express = require('express');
const app = express();
const PORT = 3000;

// 2. Serve static HTML/CSS files (we will make this next!)
app.use(express.static('public'));

// 3. Create a backend API endpoint that acts like a Java controller
app.get('/advisor', (req, res) => {
    // Get the weather parameter from the browser URL (e.g., /advisor?weather=rainy)
    const weather = req.query.weather ? req.query.weather.toLowerCase() : '';
    let advice = "";

    // Simple backend logic
    if (weather === 'sunny') {
        advice = "☀️ Wear sunglasses and a t-shirt!";
    } else if (weather === 'rainy') {
        advice = "🌧️ Don't forget your umbrella and raincoat!";
    } else if (weather === 'snowy') {
        advice = "❄️ Put on a heavy jacket and boots!";
    } else {
        advice = "☁️ Just a normal day, dress comfortably!";
    }

    // Send the response back to the frontend
    res.json({ message: advice });
});

// 4. Start the server so it listens for browser requests
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
