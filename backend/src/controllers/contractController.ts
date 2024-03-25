import { Request, Response } from "express";

import { handleUploadContracts } from "../services/uploadContractsService";
import { handleGetContracts } from "../services/getContractsService";

export const uploadContracts = (request: Request, response: Response) => {
  const file: Express.Multer.File = request.file;

  const contracts = handleUploadContracts(request, response, file);

  return contracts;
};

export const getContracts = (request: Request, response: Response) => {
  const contracts = handleGetContracts(request, response);

  return contracts;
};
