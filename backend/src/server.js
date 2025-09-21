import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// console.log(process.env.MONGODB_URL)
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();


// middleware
app.use(express.json()); // Allows access to JSON body
app.use(rateLimiter);

// // Custom middleware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();0
// });

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
    console.log("Server started on : http://localhost:"+PORT+"/api/notes");
});


// KcrHLSpEuLnhm1KZ
// mongodb+srv://manojbharathi_db_user:KcrHLSpEuLnhm1KZ@cluster0.lt7inyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0