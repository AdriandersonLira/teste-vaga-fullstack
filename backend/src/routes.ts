import { Router } from "express";
import multer from "multer";
import {
  uploadContracts,
  getContracts,
} from "./controllers/contractController";

const multerConfig = multer({ dest: "uploads" });
const routes = Router();

routes.post("/contracts", multerConfig.single("file"), uploadContracts);

routes.get("/contracts", getContracts);

export { routes };
