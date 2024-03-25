import { ContractCDCRow } from "../types/IData";

export const handleWithDate = (dt: string) => {
  const year = parseInt(dt.substring(0, 4));
  const month = parseInt(dt.substring(4, 6)) - 1;
  const day = parseInt(dt.substring(6, 8));

  const date = new Date(year, month, day);

  return date.toISOString();
};

export const handleInstallmentValidity = (row: ContractCDCRow) => {
  const { vlTotal, qtPrestacoes, nrSeqPre, vlPresta, dtVctPre } = row;

  // Arredonda o valor total para o inteiro mais próximo
  const round = Math.round(Number(vlTotal));

  // Verifica se o valor total arredondado é consistente com as prestações
  const expectedInstallmentValue = round / Number(qtPrestacoes);

  // Verifica se o valor da prestação atual é igual ao esperado
  if (Number(vlPresta) !== expectedInstallmentValue) {
    console.log(`Prestação ${nrSeqPre} para o contrato está inconsistente.`);
  }

  // Verifica se há juros acumulados na data de pagamento
  var dataVencimento = new Date(dtVctPre);
  var hoje = new Date();
  if (hoje > dataVencimento) {
    console.log(
      `Prestação ${nrSeqPre} para o contrato possui juros acumulados.`
    );
  }

  console.log(`Todas as prestações para o contrato estão consistentes.`);
};
