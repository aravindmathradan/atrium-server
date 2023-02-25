require('dotenv').config();
const express = require('express');
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const firebaseServiceAccountCert = JSON.parse(process.env.FIREBASE_ADMIN_SDK_CERT);
const buildingMapJson = require('./BuildingMap/buildingmap.json');

//  Express setup
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.send('Atrium server is running...');
});

app.get('/buildingMap', (req, res) => {
  res.json(buildingMapJson);
});

//  Firebase Admin setup
initializeApp({
  credential: cert(firebaseServiceAccountCert),
});

// Cloud storage setsup
// const bucket = getStorage().bucket('gs://atrium-af29c.appspot.com/');
