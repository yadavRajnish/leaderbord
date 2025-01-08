import express from 'express';
import { createGame, getAllGames } from '../controller/game.controller';

const router = express.Router();

router.get('/create/:id', createGame);
router.get('/get-all-games', getAllGames);

export default router;