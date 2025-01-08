import { Request, Response } from "express";
import db from "../model/index";
const User = db.user;

// create a User
export const addUSer = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await User.create(req.body);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};

//get all the users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await User.findAll({
      limit: 10
    });
    res.status(200).json({
      data: data,
      message: "User retrieved successfully",
    });
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving users.",
    });
  }
};

//get the user by id
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    // const data = await User.findByPk(id);
    const data = await User.findOne({ where: { id: id } });
    res.status(200).json({
      data: data,
      message: "User retrieved successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id,
    });
  }
};
