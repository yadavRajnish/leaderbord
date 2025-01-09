import express from 'express';
import { addUSer, getAllUsers, getAllUserToCSV, getUserById } from '../controller/user.controller';

const router = express.Router();

router.post('/add-user', addUSer);
router.get('/get-all-users', getAllUsers);
router.get('/export-user-csv', getAllUserToCSV);

router.get('/get-user-by-id/:id', getUserById);

export default router;