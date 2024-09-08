import { createUser, deleteUser, getimage, getUserById, getUsers, updateUser } from "../Controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.post("/create", createUser);
router.get("/get", getUsers);
router.get("/get/:id", getUserById);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);
router.get("/get/:id/image", getimage)


export default router;