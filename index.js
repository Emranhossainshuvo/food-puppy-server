import express from "express";
import cors from "cors";


const app = express();
const port = 4000;


app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
    res.send("Backend server is working!!")
})


app.listen(port, () => {
    console.log("fine")
})

// mongodb+srv://Emran_dev:wMPSF369d9TznubK@cluster0.5xewomm.mongodb.net/?