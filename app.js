const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('public'))
app.use(express.static('sunghoimg'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/beomjin', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/jo_utilities2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_utilities2.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/jo_2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_try_utilities.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/sungho', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/boot2', function (req, res) {
    res.sendFile(path.join(__dirname + '/boot2.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/boot3', function (req, res) {
    res.sendFile(path.join(__dirname + '/boot3.html'));
    //__dirname : It will resolve to your project folder.
    });
    

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
