import ProductController from "./products.controller.js"
import express from "express"
import productValidation from "../../validations/Product.Validation.js"
import validate from "../../middlewares/validate.js";
const router = express.Router();
router.post('/add',validate(productValidation),  ProductController.addProduct);
router.get('/getAll',  ProductController.getAllProducts);
export default router;