
const AWS = require('aws-sdk'); // Load the SDK for JavaScript
const ses = require("./ses");
const express = require('express');
const app = express();
// const port = process.env.PORT || 3001;
app.use(express.json());
// AWS.config.update({ region: 'eu-est-2' });

let secrets;
if (process.env.NODE_ENV === "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("./secrets"); // in dev they are in secrets.json which is listed in .gitignore
}
if (process.env.NODE_ENV !== "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:3001/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}


app.post('/contact', (req, res, next) => {
    console.log("something in server")
    console.log("req.body", req.body)
    const sender = JSON.stringify(req.body.data);
    console.log("sender", sender)
    return ses.sendEmail('edith.chevallier3000@gmail.com', "email from Vimetro",sender )
        .then(() => res.json(req.body.data))
        .catch(next);
});

// app.listen(port, () => console.log(`Listening test on port ${port}`));
if (require.main == module) {
    app.listen(process.env.PORT || 3000, () => console.log("Server Listening"));
}