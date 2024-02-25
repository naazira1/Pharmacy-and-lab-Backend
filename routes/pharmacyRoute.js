import express from 'express';
import pharmacyController from '../controller/pharmacyController.js';

const router = express.Router();

router.post('/api/drug', pharmacyController.addDrug)
router.get('/api/drugs', pharmacyController.getDrugs)
router.get('/api/drugs/:id', pharmacyController.getDrug)
router.put('/api/drugs/:id', pharmacyController.updateDrug)
router.delete('/api/drugs/:id', pharmacyController.deleteDrug)





export default router