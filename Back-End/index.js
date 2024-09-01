import {} from "dotenv/config";
import express from "express";
import loaders from "./loaders/index.js";
import config from "./config/index.js";
import multer from "multer";
import fs from "fs"

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
    destination: "./upload/images",
    filename: (req, file, cb) => {
      return cb(
        null,
        `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });
  const upload = multer({ storage: storage });

  app.post('/upload', upload.single('product'), (req, res) => {
    console.log("Im getting hit");
    
  if (req.file) {
    const imageUrl = `http://localhost:${config.env.port}/images/${req.file.filename}`;
    res.json({
      success: 1,
      image_url: imageUrl, 
    });
  } else {
    res.status(400).json({ success: 0, message: 'No file uploaded' });
  }
});

  app.use("/images", express.static(uploadDir));

  process.on("uncaughtException", (err) => {
    console.log("uncaughtException! Shutting Down the Server...");
    console.log(err);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    console.log("unhandledRejection! Shutting Down the Server...");
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
  });
}

startServer();
