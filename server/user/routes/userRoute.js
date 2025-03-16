import express from 'express';
import { signup,signin } from '../controller/userController.js';
import authMiddleware from '../middlewares/userVerification.js';
const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

export default userRouter;
