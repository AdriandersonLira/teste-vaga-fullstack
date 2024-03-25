import { Request, Response } from "express";
import { client } from "../database/client";
import fs from "fs";
import csvParser from "csv-parser";
import { cnpj, cpf } from "cpf-cnpj-validator";
import { ContractCDCRow } from "../types/IData";
import { handleWithDate } from "../utils/helpers";

export const handleUploadContracts = async (
  request: Request,
  response: Response,
  file: Express.Multer.File
) => {
  if (!file) {
    return response.status(400).send("Nenhum arquivo enviado.");
  }

  let count = 0;

  fs.createReadStream(file.path)
    .pipe(csvParser())
    .on("data", async (row: ContractCDCRow) => {
      try {
        if (cpf.isValid(row.nrCpfCnpj) || cnpj.isValid(row.nrCpfCnpj)) {
          const dtContrato = handleWithDate(row.dtContrato);
          const dtVctPre = handleWithDate(row.dtVctPre);

          await client.contractCDC.create({
            data: {
              ...row,
              dtContrato,
              dtVctPre,
            },
          });
        } else {
          console.log(count, " CPF ou CNPJ inválido. ", row.nrCpfCnpj);
          count += 1;
        }
      } catch (error) {
        console.error("Erro ao salvar no banco de dados:", error);
        return response.status(500).send("Erro ao salvar no banco de dados.");
      }
    })
    .on("end", () => {
      return response.send("Upload do arquivo CSV concluído com sucesso.");
    });
};
