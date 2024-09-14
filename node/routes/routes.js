import express from 'express';
import { createForm, deleteForm, getAllForms, getForm, updateForm } from '../controllers/FormController.js';

const router = express.Router()

router.get('/', getAllForms);
router.get('/:id', getForm);
router.post('/', createForm);
router.put('/:id', updateForm);
router.delete('/:id', deleteForm);

export default router;