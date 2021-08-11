const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion
const ControllerFichas = require('../controller/ControllerFichas');

//cada que llegue una solicitud a router get se ejecutara algo.
router.get('/',ControllerFichas.index)//cada que se ejecute, le mandaremos el archivo que lleva el controlador y el index get tomara los datos
.post('/', ControllerFichas.agregar)//post enviar datos
.get('/:key/:value', ControllerFichas.buscar, ControllerFichas.mostrar)/*tomara los datos a buscar*/
.put('/:key/:value', ControllerFichas.buscar, ControllerFichas.actualizar)
.delete('/:key/:value', ControllerFichas.buscar, ControllerFichas.eliminar);

module.exports = router;