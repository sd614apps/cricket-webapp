const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

// PostgreSQL database connection configuration
const pool = new Pool({
    user: 'cricket',
    host: 'localhost',
    database: "cricket-webapp",
    password: 'cricket',
    port: 5432,
});

app.use(bodyParser.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});  

// Define API endpoints
app.get('/players', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM players');
        res.json(rows);
    } catch (error) {
        console.error('Error retrieving players:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/players', async (req, res) => {
    console.log(req.body);
    const { name, age, country } = req.body;
    try {
        const { rows } = await pool.query(
        'INSERT INTO players (name, age, country) VALUES ($1, $2, $3) RETURNING *',
        [name, age, country]
        );
        res.json(rows[0]);
    } catch (error) {
        console.error('Error adding player:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
