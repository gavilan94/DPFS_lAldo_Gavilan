let express = require('express');
let router = express.Router();

let carritoController = require('../controllers/carritoController')

//Aquí las rutas
router.get('/', carritoController.index); 
router.get('/cod/:cod', carritoController.show);
router.get('/productnew', carritoController.create);
router.post('/create', carritoController.store);
router.get('/results',carritoController.search);


module.exports = router;