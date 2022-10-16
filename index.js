const express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = 8080,
    keyAction = require("robotjs"),
    sayText = require('say');


app.use(bodyParser.json());

app.post("/", (request, respond) => {

    // amount_raw itu jumlah donasi
    // donator_nama itu nama si donaturnya
    // donator_email itu email si donatornya
    // message itu pesan dari donator

    sayText.speak('Donasi ' + request.body.amount_raw + 'Dari ' + request.body.donator_name);
    console.log('Donasi Dari: ' + request.body.donator_name);
    console.log('Donasi Sebesar: ' + request.body.amount_raw);

    var timer = Date.now();

    if (request.body.amount_raw >= 10000 && request.body.amount_raw <= 15000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyTap("1");
            keyAction.keyTap("2");
            keyAction.keyTap("3");
        }

    } else if (request.body.amount_raw > 15000 && request.body.amount_raw <= 25000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyToggle('g', 'down');
        }
        keyAction.keyToggle('g', 'up');


    } else if (request.body.amount_raw > 25000 && request.body.amount_raw <= 35000) {

        keyAction.keyTap("X");

    } else if (request.body.amount_raw > 35000 && request.body.amount_raw <= 50000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyToggle('w', 'down');
        }
        keyAction.keyToggle('w', 'up');

    } else if (request.body.amount_raw > 50000 && request.body.amount_raw <= 70000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyToggle('space', 'down');
            keyAction.keyToggle('space', 'up');
        }
       

    } else if (request.body.amount_raw >= 90000) {

        keyAction.keyTap("f4", ["alt"]);
        keyAction.moveMouse(594, 560);
        keyAction.mouseClick(button = "left");

    }

    respond.status(200);
})

app.listen(PORT, () => console.log(`Program Berjalan Pada Port: ${PORT}`));
