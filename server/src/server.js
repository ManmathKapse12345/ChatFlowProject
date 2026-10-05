import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT  = process.env.PORT || 5000;

async function start() {
    await connectDB(); // 1. connect to the database first
    app.listen(PORT, () => {
        // 2. then start accepting requests
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

start().catch((err) => {
    console.error("❌ Failed to start:",err);
    process.exit(1);
})