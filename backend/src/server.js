import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
import path from 'path';


dotenv.config();
// console.log(process.env.MONGODB_URL)
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );
}
app.use(express.json()); // Allows access to JSON body
app.use(rateLimiter);

// // Custom middleware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();0
// });

app.use('/api/notes', notesRoutes);

// Serve static files from frontend/dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle SPA (Single Page Application) routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

// KcrHLSpEuLnhm1KZ
// mongodb+srv://manojbharathi_db_user:KcrHLSpEuLnhm1KZ@cluster0.lt7inyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
