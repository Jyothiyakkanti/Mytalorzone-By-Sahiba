import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Route to serve the sign-in page
app.get('/frontend/signin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'signin.html'));
});

// Example route for POST request (you can replace with your actual logic)
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;

    // Perform your authentication here (e.g., check email/password)
    // For now, just a mock response:
    if (email === 'test@example.com' && password === 'password123') {
        res.send('Successfully signed in!');
    } else {
        res.status(401).send('Invalid email or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
