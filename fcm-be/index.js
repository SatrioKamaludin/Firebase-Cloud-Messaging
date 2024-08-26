const express = require('express');
const messaging = require('./firebase-admin.service');
const app = express();

app.use(express.json());

app.post('/sendNotification', async (req, res) => {
    const { token, title, body } = req.body;

    const message = {
        notification: {
            title: title,
            body: body
        },
        token: token
    };

    try {
        const response = await messaging.send(message);
        res.status(200).send(`Message sent successfully: ${response}`);
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending message');
    }
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));