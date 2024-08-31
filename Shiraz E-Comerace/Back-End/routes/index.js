import express from "express";

// routes

import userRoute from "./user/index.js";
import productRoute from "./products/index.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes


// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/products", productRoute);


export { protectedRouter, unProtectedRouter };
