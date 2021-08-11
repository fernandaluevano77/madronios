const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion
const ControllerClassification = require('../controller/ControllerClassification');

//cada que llegue una solicitud a router get se ejecutara algo.
router.get('/',ControllerClassification.index)//cada que se ejecute, le mandaremos el archivo que lleva el controlador y el index get tomara los datos
.post('/', ControllerClassification.agregar)//post enviar datos
.get('/:key/:value', ControllerClassification.buscar, ControllerClassification.mostrar)/*tomara los datos a buscar*/
.put('/:key/:value', ControllerClassification.buscar, ControllerClassification.actualizar)
.delete('/:key/:value', ControllerClassification.buscar, ControllerClassification.eliminar);

module.exports = router;