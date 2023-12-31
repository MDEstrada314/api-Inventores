const invetores = require('../models/invetores.js');
/* const bcryptjs = require('bcryptjs'); */

const getInventores = async (req, res)=>{
    try {
        const iventores = await invetores.find();
        res.status(200).json(iventores)


    } catch (error) {
        res.status(500).json({meg:'error'})
    }

}



const postInventores = async (req, res) => {
    try {
        const newInventor = new invetores(req.body); // Crea una nueva instancia del modelo con los datos del cuerpo de la solicitud
        await newInventor.save(); // Guarda el nuevo inventor en la base de datos

        res.status(201).json({
            message: "Inventor creado exitosamente",
            inventor: newInventor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al crear el inventor"
        });
    }
};

    const deleteInventiores = async (req, res) => {
        const { id } = req.params;
    
        try {
        const invetor = await invetores.findByIdAndRemove(id);
    
        if (!invetor) {
            return res.status(404).json({ message: 'Inventor no encontrado' });
        }
    
        res.json({ message: 'Inventor eliminado correctamente' });
        } catch (error) {
        console.error('Error al eliminar Inventor:', error);
        res.status(500).json({ error: 'Error al eliminar Inventor.' });
        }
    };

    const putInventiores = async (req, res)=>{
        const { id } = req.params;
        const { nombre,  ...resto } = req.body;
        const invetor = await invetores.findByIdAndUpdate(id, {nombre, resto}, {new:true});
        res.json({
            msg:"Inventor Actualizado",
            invetor : invetor
        });
    }

module.exports = {
    getInventores,
    postInventores,
    deleteInventiores,
    putInventiores
   
}