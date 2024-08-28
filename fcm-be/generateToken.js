const { google } = require('googleapis');
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];

function getToken() {
    return new Promise(function (resolve, reject) {
        const key = require('./service-account.json');
        const jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(tokens.access_token);
            }
        })
    });
}

getToken()
    .then(token => {
        console.log('Token: ' + token);
    })
    .catch(err => {
        console.log(err);
    })