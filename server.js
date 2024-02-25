import express from "express";
import cors from 'cors'
import morgan from "morgan";
import pharmacyRoute from './routes/pharmacyRoute.js'
import labRoute from './routes/labRoute.js'
import dotenv from 'dotenv';
import connectDB from "./db.js";


dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;


// app.use(cors({origin: "http://localhost:5174"}))
app.use(cors({origin: "http://localhost:5173"}))
app.use(morgan('dev'))
app.use(express.json())
app.use('/', pharmacyRoute)
app.use('/', labRoute)

app.listen(PORT, () => {
    connectDB()
    console.log(`server is running on PORT ${PORT}`);
})