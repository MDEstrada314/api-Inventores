const invetores = require('../models/invetores.js');
const bcryptjs = require('bcryptjs');

const getInventores = async (req, res)=>{
    try {
        const iventores = await invetores.find();
        res.status(200).json(iventores)


    } catch (error) {
        res.status(500).json({meg:'error'})
    }

}




module.exports = {
    getInventores,
   
}