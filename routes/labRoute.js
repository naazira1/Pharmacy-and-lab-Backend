import express from 'express';
import labController from '../controller/labController.js';

const router = express.Router();

 router.post('/api/lab', labController.addLab)
 router.get('/api/labs', labController.getLabs)
 router.get('/api/labs/:id', labController.getLab)
 router.put('/api/labs/:id', labController.updateLab)
 router.delete('/api/labs/:id', labController.deleteLab)



export default router