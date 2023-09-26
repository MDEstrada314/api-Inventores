const {Router} = require('express');
/* const {check} = require('express-validator') */
const {getInventores} = require('../controllers/invetores.controllers');
/* const { validateDocument } = require('../middlewares/validate.documents.js'); */
const invetores = require('../models/invetores.js');

const router = Router();

router.get("/", getInventores);


module.exports = router;