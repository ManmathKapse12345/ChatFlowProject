import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());   // turns a JSON request body into req.body

// Health check: "is the server alive, and is the DB connected?"
app.get("/api/health",(req,res) => {
    res.json({
        status: "ok",
        db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    });
});

export default app;