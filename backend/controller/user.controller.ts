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
    const data = await User.findAll({ limit: 10, order: [["laptime", "ASC"]] });
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

export const getAllUserToCSV = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await User.findAll();

    if (!data || data.length === 0) {
      res.status(400).send({
        message: "No users found!"
      })
      return;
    }

    const header = ["Name", "Phone", "Email", "Laptime", "Created At", "Updated At"];
    const csvRows = [];
    csvRows.push(header.join(','));

    data.forEach((user: any) => {
      const row = [
        user.name,
        user.phone,
        user.email,
        user.laptime,
        user.createdAt,
        user.updatedAt
      ];
      csvRows.push(row.join(","));
    })

    const csvContent = csvRows.join("\n")
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachmen ; filename=player.csv")
    res.send(csvContent);

  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving users.",
    });
  }
}


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
