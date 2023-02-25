const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const firebaseServiceAccountCert = JSON.parse(process.env.FIREBASE_ADMIN_SDK_CERT);
const bucketName = require('../datasources.config.json').firebaseCloudStorage.defaultBucket;

//  Firebase Admin setup
initializeApp({
  credential: cert(firebaseServiceAccountCert),
});

// Cloud storage setup
const bucket = getStorage().bucket(bucketName);

module.exports = bucket;
