import express from "express";
import cors from "cors";
import userRouter from "./routes/user.router";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});

app.use("/aramco/api/user", userRouter);