// Module Imports
import express from 'express';
import cloudersController from '../controllers/cloudersController';

// Module Consts
const router = express.Router();

/* GET obtener todos los clouders. */
router.get('/listarClouders', cloudersController.makeListarClouders);

/* GET obtener un clouder. */
router.get('/listarClouder', cloudersController.makeListarClouder);

/* POST guardar un clouder. */
router.post('/guardarClouder', cloudersController.makeGuardarClouder);

/* POST guardar un clouder. */
router.get('/hmac256', cloudersController.makeHmac256);

export default router;
