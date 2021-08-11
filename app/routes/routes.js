const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion


//cada que llegue una solicitud a router get se ejecutara algo.
router.get('/', function (req,res) {
    res.render('index');
});

router.get('/User', function (req,res) {
    res.render('user');
});

module.exports = router;