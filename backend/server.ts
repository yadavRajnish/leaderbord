import express from "express";
import cors from "cors";
import userRouter from "./routes/user.router";
import cron from 'node-cron';
import { genUserReport } from "./schedules/genUserReport";

const app = express();
const PORT = 3000;

cron.schedule('0 9 * * *', genUserReport);

app.use(cors());
app.use(express.json());

app.use('/public', express.static('public'));

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});

app.use("/aramco/api/user", userRouter);