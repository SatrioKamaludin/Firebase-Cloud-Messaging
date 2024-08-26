var admin = require("firebase-admin");
var serviceAccount = require("./angular-firebase-messaging-firebase-adminsdk-hgm6y-3d35eabe83.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const messaging = admin.messaging();

module.exports = messaging;
