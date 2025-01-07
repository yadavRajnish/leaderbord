"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUsers = exports.addUSer = void 0;
const index_1 = __importDefault(require("../model/index"));
const User = index_1.default.user;
// create a User
const addUSer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingPhone = yield User.findOne({
            where: { phone: req.body.phone },
        });
        if (existingPhone) {
            res.status(400).json({
                message: "Failed! Phone no is already in use!",
            });
        }
        const data = yield User.create(req.body);
        res.status(201).json(data);
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the User.",
        });
    }
});
exports.addUSer = addUSer;
//get all the users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield User.findAll();
        res.status(200).json({
            data: data,
            message: "User retrieved successfully",
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving users.",
        });
    }
});
exports.getAllUsers = getAllUsers;
//get the user by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // const data = await User.findByPk(id);
        const data = yield User.findOne({ where: { id: id } });
        res.status(200).json({
            data: data,
            message: "User retrieved successfully",
        });
    }
    catch (error) {
        res.status(500).send({
            message: "Error retrieving User with id=" + id,
        });
    }
});
exports.getUserById = getUserById;
