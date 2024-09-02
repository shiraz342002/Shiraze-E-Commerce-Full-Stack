import "dotenv/config";
import express from "express";
import loaders from "./loaders/index.js";
import config from "./config/index.js";
import multer from "multer";
import fs from "fs";
import path from "path";

async function startServer() {
  const app = express();
  await loaders.init({ expressApp: app });
  
  const server = app.listen(config.env.port, () =>
    console.log(`Server Started ~ :${config.env.port}`)
  );

  const __dirname = path.resolve();
  const uploadDir = path.join(__dirname, "upload/images");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });

  const upload = multer({ storage });

  // Handling image upload
  app.post('/upload', upload.single('image'), (req, res) => {
    console.log("Upload endpoint hit");
    
    if (req.file) {
      const imageUrl = `http://localhost:${config.env.port}/images/${req.file.filename}`;
      res.json({
        success: true,
        image_url: imageUrl,
      });
    } else {
      res.status(400).json({ success: false, message: 'No file uploaded' });
    }
  });

  // Serving static images
  app.use("/images", express.static(uploadDir));

  process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception! Shutting Down the Server...");
    console.log(err);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection! Shutting Down the Server...");
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
  });
}

startServer();
