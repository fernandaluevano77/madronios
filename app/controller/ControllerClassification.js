const modelClassification = require('../model/ModelClassification');

//funciones de coleccion de datos
function index(req,res){
    console.log('ok');

    //buscar en mongo la coleccion de datos
    //utiliza funcion de mongo para buscar dato
    modelClassification.find({})//({toma todo})
    //promoesa que guarda en una variable
    .then(clasificacion => {
        //si la variable usuarios tiene datos
        if(clasificacion.length) return res.status(200).send({clasificacion});//200 = todo funciona correctamente, send para enviarlo en un ({objeto})
        //si no tiene datos
        return res.status(204).send({message:'No hay contenido'});//204 = No es correcto
    }).catch(error => res.status(500).send({error}));//caso de error. 500 = error
}

function agregar(req,res) {
    console.log(req.body);
    new modelClassification(req.body).save()
    .then(clasificacion => {
        res.status(200).send({clasificacion})
    }).catch(error => res.status(500).send({error}));
}

/*busca*/
function buscar(req,res,next){
    let consulta = {};//variable de tipo objeto
    /*busca llave y valor*/
    consulta[req.params.key]=req.params.value;//solicita parametros como llave
    modelClassification.find(consulta)
    .then(clasificacion => {
            //viene mas de uno o es null
            if(!clasificacion.length) return next();//return= regersa todo lo que traiga dulces siempre y cuando sea distinto a 0 
            //devuleve la funcion
            req.body.clasificacion = clasificacion; //devulve el body con lo que tenga la variable dulces
            return next();//next() = funcion que regresa todo lo que obtenga en la busqueda

        }).catch(error => {
          req.body.error = error;//devulve el error con lo que tenga la variable error
          next();

        })//cachamos error
}

//mostrar
function mostrar(req,res){
    /*validamos*/
    if(req.body.error) return res.status(500).send({error});//
    if(!req.body.clasificacion) return res.status(404).send({message: 'No se encontraron datos'});//busca si existe o no en la base de datos
    let clasificacionObj = req.body.clasificacion;//
    return res.status(200).send({clasificacionObj});
}

//actualiza
function actualizar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.clasificacion) return res.status(404).send({message: 'No hay datos para actualizar'});
    let clasificacionObjeto = req.body.clasificacion[0];//
    //comparamos lo que tenemos con lo que hay en la base de datos y con lo que se va a actualizar
        //assign nos permite concatenar informacion que va a un mismo registro
        clasificacionObjeto = Object.assign(clasificacionObjeto,req.body);
        clasificacionObjeto.save()
        .then(clasificAlta => {//variable usuarioAlta tiene la informacion ya guardada
        res.status(200).send({messag: 'Los datos se actualizaron correctamente', clasificAlta});

        }).catch(error => res.status(500).send({error}));//enviamos el error

}

//eliminar
function eliminar(req,res){
    //validamos si lo que tiene buscar viene con un error le regresamos al usuario una respuesta
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.clasificacion) return res.status(404).send({message: 'No hay datos para eliminar'});
    req.body.clasificacion[0].remove().then(clasificEliminar =>{//elimina objeto en posicion 0
        res.status(200).send({message: 'La informacion se borro correctamente', clasificEliminar})
    }).catch(error => res.status(500).send({error}));
}

//
module.exports={
    index, //exportamos funcion index
    agregar,//exportamos la funcion agregar
    buscar,
    mostrar,
    actualizar,
    eliminar
}
