import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.MONGODB_URL)
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
    console.log("Server started on : http://localhost:"+PORT+"/api/notes");
});


// KcrHLSpEuLnhm1KZ
// mongodb+srv://manojbharathi_db_user:KcrHLSpEuLnhm1KZ@cluster0.lt7inyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0