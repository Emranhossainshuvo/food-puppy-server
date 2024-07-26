import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors())

// database connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)

app.get("/", (req, res) => {
    res.send("Backend server is working!!")
})


app.listen(port, () => {
    console.log("fine")
})
