let express = require('express');
let router = express.Router();

let loginControllerController = require('../controllers/loginController')

//Aquí las rutas
router.get('/', loginControllerController.index); 
router.get('/cod/:cod', loginControllerController.show);
router.get('/productnew', loginControllerController.create);
router.post('/create', loginControllerController.store);
router.get('/results',loginControllerController.search);


module.exports = router;