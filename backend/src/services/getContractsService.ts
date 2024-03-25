import { Request, Response } from "express";
import { client } from "../database/client";

export const handleGetContracts = async (
  request: Request,
  response: Response
) => {
  const results = await client.contractCDC.findMany();
  return response.json(results);
};
