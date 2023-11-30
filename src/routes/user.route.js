import { Router } from "express";
import { ctrolNewUser } from "../controllers/user.controller.js";

const userRouter = Router();

//*CREANDO UN USUARIO
userRouter.post("/", ctrolNewUser);

//*LISTADO DE USUARIOS

//*LISTANDO UN USUARIO VIA ID

//*ACTUALIZANDO UN USUARIO X ID

//*ELIMINADO UN USUARIO X ID

export { userRouter };
