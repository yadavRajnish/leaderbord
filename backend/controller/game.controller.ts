import { Request, Response } from "express";
import db from "../model";


export const createGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const user = await db.user.findByPk(userId)
        const data = await db.game.create(req.body);

        res.status(201).json(data);
    } catch (error: any) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the User.",
        });
    }
};

export const getAllGames = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await db.game.findAll({
            include: [{ model: db.user }]
        });
        res.status(200).json({
            data: data,
            message: "Games retrieved successfully",
        });
    } catch (error: any) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving games.",
        });
    }
};