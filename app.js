const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const fse = require('fs-extra');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});
const path = require('path');
const session = require('cookie-session'); // Middleware loading
const hbs = require('hbs');
// var InfosUser = require('./client.json');
// var Reservations = require('./reservation.json');
// var Maisons = require('./reservation.json');

app.set('view engine', 'hbs');

var path_jsonfile = 'client.json';
var LoadData = require('./res/js/Readwrite.js');
var InfosUser = LoadData.LoadJson(path_jsonfile);

var path_jsonfile2 = 'reservation.json';
var LoadData = require('./res/js/Readwrite.js');
var Reservations = LoadData.LoadJson(path_jsonfile2);

var path_jsonfile3 = 'Maisons.json';
var LoadData = require('./res/js/Readwrite.js');
var Maisons = LoadData.LoadJson(path_jsonfile3);

var InfosSession;

//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use("/res/css", express.static("./res/css"))
// app.use("/public/traitement",express.static("./public/traitement"))
// app.use("/public/img",express.static("./public/img"))

app.use('/', express.static(__dirname + "/res"));
// 
// 


app.get("/", function (req, res) {
    res.render("index");
});
app.get("/Reservation.hbs", function (req, res) {
    res.render("Reservation");
});
app.get("/Location.hbs", function (req, res) {
    res.render("Location");
});
app.get("/index.hbs", function (req, res) {
    res.render("index");
});
app.get("/Location2.hbs", function (req, res) {
    res.render("Location2", {
        InfosSession,
        Maisons
    });
});
app.get("/PageErreur.hbs", function (req, res) {
    res.render("PageErreur");
});
app.get("/Admin.hbs", (req, res) => {
    res.render('Admin');
});


// Read from the JSON file
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/res/html/index.html");
});

// Write in the JSON file 
// app.post('/getData', async function (req, res) {
//     var data = await fse.readJSON('./client.json');
//     console.log(data);
//     res.end(JSON.stringify(data));
// });

// app.post('/setData', async function (req, res) {
//     var data = await fse.readJSON('./client.json');
//     data.push(req.body);
//     // 
//     await fse.writeJSON('./client.json', data);
//     // 
//     res.end("done");
// });


//Create the infos in JSON file
app.post("/index.hbs", urlencodedParser, function (req, res) {
    console.log(InfosUser);
    console.log(req.body);
    var data = SaveData(req.body.first_name, req.body.last_name, req.body.E_mail, req.body.Phone_number, req.body.Password);
    res.render('index', {
        data
    });
});

function SaveData(first_name, last_name, E_mail, Phone_number, Password) {
    var data = {
        first_name: first_name,
        last_name: last_name,
        E_mail: E_mail,
        Phone_number: Phone_number,
        Password: Password
    };
    InfosUser.push(data);
    console.log(data);

    var infos = JSON.stringify(InfosUser);
    LoadData.SaveJson(path_jsonfile, infos);
    return data;
}
//
// 
//login part, Read
app.post("/LOGIN", urlencodedParser, function (req, res) {
    var listEmails = [];
    var listMdps = [];
    var j = 0;
    InfosUser.forEach(element => {
        listEmails[j] = element.E_mail;
        listMdps[j] = element.Password;
        j++;

    });
    var trouve = false;
    for (var i = 0; i < listEmails.length; i++) {
        if (req.body.E_mail == listEmails[i] && req.body.Password == listMdps[i]) {
            InfosSession = InfosUser[i];
            trouve = true;
            break;
        }
    }
    if (trouve) {
        if (InfosSession.E_mail == "ADMIN") {
            res.render("Admin", {
                InfosUser,
                Reservations
            });
        } else {
            res.render("Location2", {
                InfosSession,
                Maisons
            });
        }
    } else {
        console.log("EMAIL OU MDP INCORRECT");
        res.render(alert("Email or password wrong"));
    }
});
// 
// 
//Update user
app.post("/UPDATE", urlencodedParser, function (req, res) {

    var trouve = false;
    for (var i = 0; i < InfosUser.length; i++) {
        if (req.body.E_mail == InfosUser[i].E_mail) {
            InfosUser[i].Password = req.body.Password;
        }
    }

    var infos = JSON.stringify(InfosUser);
    LoadData.SaveJson(path_jsonfile, infos);
    res.render("Location2", {
        InfosUser

    });
});


//Delete user
app.post("/DELETE", urlencodedParser, function (req, res) {
    var listEmails = [];
    var j = 0;
    InfosUser.forEach(element => {
        listEmails[j] = element.E_mail;
        j++;
    });
    var trouve = false;
    for (var i = 0; i < listEmails.length; i++) {
        if (req.body.E_mail == listEmails[i]) {
            console.log(InfosUser[i]);
            delete InfosUser[i];
            trouve = true;
        }
    }
    if (trouve) {
        console.log("Infos user now", InfosUser);
        res.render("Location2", {
            InfosUser,
            Reservations
        });
    } else {
        console.log("Email introuvable !");
        res.render("Location2", {
            InfosUser,
            Reservations
        });
    }

    var listUsers = [];

    for (var i = 0; i < InfosUser.length; i++) {
        if (InfosUser[i] != null) {
            listUsers[i] = InfosUser[i];
        }
    }

    var infos = JSON.stringify(listUsers);
    LoadData.SaveJson(path_jsonfile, infos);


});




// app.post("/index.hbs", urlencodedParser, function (req, res) {
//     console.log(InfosUser2);
//     console.log(req.body);
//     var data = SaveData(req.body.first_name, req.body.last_name, req.body.Birthday, req.body.Renting_date, req.body.Number_of_people);
//     res.render('index', {data});
// });

// function SaveData(first_name, last_name, E_mail, Phone_number, Password) {
//     var data = {
//         first_name: first_name,
//         last_name: last_name,
//         Birthday: E_mail,
//         Renting_date: Phone_number,
//         Number_of_people: Password
//     };
//     InfosUser2.push(data);
//     console.log(data);

//     var infos = JSON.stringify(InfosUser2);
//     LoadData.SaveJson(path_jsonfile, infos);
//     return data;
// }



// reservation part 
// app.post('/getData2', async function (req, res) {
//     var data = await fse.readJSON('./reservation.json');
//     console.log(data);
//     res.end(JSON.stringify(data));
// });

// app.post('/setData2', async function (req, res) {
//     var data = await fse.readJSON('./reservation.json');
//     data.push(req.body);
//     // 
//     await fse.writeJSON('./reservation.json', data);
//     // 
//     res.end("reserved");
// });

// 
//client side


//Starting the listening to the server
app.listen(2000, function () {
    console.log('listening on port 2000 ....');
});