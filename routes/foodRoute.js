import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";


const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=> {
        return cd(null,`${Date.now()}`)
    }
})

foodRouter.post("/add", addFood)


export default foodRouter;  