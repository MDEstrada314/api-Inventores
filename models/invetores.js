const {Schema, model} = require('mongoose');

const invetoresSchema = Schema({
        nombre: {
            type:String,
            required:true
        },
        fechaNacimiento:{
            type:Date,
            required:false
        },
        muerte:{
            type:Date,
            required:false
        } ,
        invento:{
            type:String,
            required:false
        },
        nacionalidad:{
            type:String,
            required:false
        },
        profesion:{
            type:String,
            required:false
        },
        educacion:{
            type:String,
            required:false
        },
        logros: [
         {
            type:String,
            required:false
         }
        ],
        lugarNacimiento:{
            type:String,
            required:false
        },
        lugarMuerte:{
            type:String,
            required:false
        },
        residenciaDestacada:{

        } ,
        frasesFamosas: [
            {
                type:String,
                required:false
             }
        ],
        reconocimientos: [
            {
                type:String,
                required:false
            }
        ],
        creencias:{
            type:String,
            required:false
        },
        legado:{
            type:String,
            required:false
        } 
      

   
});

module.exports = model('Inventores',invetoresSchema,'Inventores');