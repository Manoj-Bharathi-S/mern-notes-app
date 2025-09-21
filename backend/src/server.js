import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
    console.log("Server started on : http://localhost:5001/api/notes");
});


// KcrHLSpEuLnhm1KZ
// mongodb+srv://manojbharathi_db_user:KcrHLSpEuLnhm1KZ@cluster0.lt7inyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0