let express = require('express');
let router = express.Router();

let registerClientController = require('../controllers/registerClientController')

//Aquí las rutas
router.get('/', registerClientController.index); 
router.get('/cod/:cod', registerClientController.show);
router.get('/productnew', registerClientController.create);
router.post('/create', registerClientController.store);
router.get('/results',registerClientController.search);


module.exports = router;