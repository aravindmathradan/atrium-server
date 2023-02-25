require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const firebaseServiceAccountCert = JSON.parse(process.env.FIREBASE_ADMIN_SDK_CERT);

//  Express setup
const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.send('Atrium server is running...');
});

//  Firestore setup
admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccountCert),
});
const db = admin.firestore();
