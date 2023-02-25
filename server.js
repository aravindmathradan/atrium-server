require('dotenv').config();
const express = require('express');

//  Express setup
const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

// Middlewares
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

// Routes
const structures = require('./routes/structures');

app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.send('Atrium server is running...');
});

app.use('/structures', structures);

app.use(notFound);
app.use(errorHandler);

// Handling Error
process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
