import express from "express";

const app = express();

app.get("/api/notes",  (req,res) => {
    res.status(200).send("you got 10 notes");
});


app.listen(5001, () => {
    console.log("Server started on Port : 5001");
});