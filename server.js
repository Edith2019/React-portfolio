
const AWS = require('aws-sdk'); // Load the SDK for JavaScript
const ses = require("./ses");
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
AWS.config.update({ region: 'eu-est-2' });

let secrets;
if (process.env.NODE_ENV === "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("./secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

app.post('/contact', (req, res, next) => {
    console.log("something in server")
    console.log("req.body", req.body)
    return ses.sendMail('edith.chevallier3000@gmail.com', ['edith.chevallier3000@gmail.com'], req.body)
        .then(() => res.send(req.body))
        .catch(next);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
