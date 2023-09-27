const {Router} = require('express');
/* const {check} = require('express-validator') */
const {getInventores,postInventores,putInventiores,deleteInventiores} = require('../controllers/invetores.controllers');
/* const { validateDocument } = require('../middlewares/validate.documents.js'); */
const invetores = require('../models/invetores.js');

const router = Router();

router.get("/", getInventores);
router.post("/", postInventores);
router.put("/:id", putInventiores);
router.delete("/:id", deleteInventiores);


module.exports = router;