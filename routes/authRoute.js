import express from 'express';
import {registerController} from '../controllers/registerController.js';

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

export default router;