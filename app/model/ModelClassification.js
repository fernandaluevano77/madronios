const mongoose=require('mongoose');

const clasificacionSchema = new mongoose.Schema({
    especie:{
        type: [Number],
        required:true
    },
    estados:{
        type: [Number],
        required:true
    },
    habito:{
        type: [Number],
        required:true
    },
    color_flor:{
        type: [Number],
        required:true
    },
    vello_hojas:{
        type: [Number],
        required:true
    }
})

const Clasificacion = mongoose.model('Clasificacion', clasificacionSchema);

module.exports = Clasificacion;