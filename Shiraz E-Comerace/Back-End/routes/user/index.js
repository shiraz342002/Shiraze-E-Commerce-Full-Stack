import express from "express"
import authValidation from "../../validations/user.validation.js"
import validate from "../../middlewares/validate.js"
import controllers from "./user.controllers.js"
import authenticate from "../../middlewares/authenticate.js"

const router = express.Router();
router.get("/", /*authenticate,*/ controllers.getAll);
router.get("/profile", authenticate, controllers.getById);
router.post("/register", (req, res, next) => {
  next();
 
}, validate(authValidation.register), controllers.register);
router.post("/login", (req, res, next) => {
  next();
},  validate(authValidation.login),controllers.login);
router.patch("/:id?", authenticate, validate(authValidation.update), controllers.update);
router.delete("/:id?", authenticate, controllers.delete);

export default router;
