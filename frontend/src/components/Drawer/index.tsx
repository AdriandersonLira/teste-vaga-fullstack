import { cnpj, cpf } from "cpf-cnpj-validator";
import { Content, Paper, Close } from "./style";

import { Drawer as DrawerMui, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import { handleCurrency } from "@/utils/helpers";
import { ContractCDCRow } from "@/types/IData";

interface DrawerProps {
  drawerOpen: boolean;
  handleCloseDrawer: () => void;
  selectedContract: ContractCDCRow | null;
}

export default function Drawer({
  drawerOpen,
  handleCloseDrawer,
  selectedContract,
}: DrawerProps) {
  return (
    <DrawerMui anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
      <Close>
        <IconButton aria-label="Fechar" onClick={handleCloseDrawer}>
          <CloseIcon />
        </IconButton>
      </Close>
      {selectedContract && (
        <Content>
          <h2>Detalhes do Contrato</h2>
          <Paper>
            <p>
              <span>Número da instituição</span> {selectedContract.nrInst}
            </p>
            <p>
              <span> Número da agência</span> {selectedContract.nrAgencia}
            </p>
            <p>
              <span> Código do cliente</span> {selectedContract.cdClient}
            </p>
            <p>
              <span> Nome do cliente</span> {selectedContract.nmClient}
            </p>
            <p>
              <span> CPF ou CNPJ do cliente</span>
              {selectedContract.nrCpfCnpj.length > 11
                ? cnpj.format(selectedContract.nrCpfCnpj)
                : cpf.format(selectedContract.nrCpfCnpj)}
            </p>
            <p>
              <span> Número do contrato </span>
              {selectedContract.nrContrato}
            </p>
            <p>
              <span> Data de assinatura do contrato</span>
              {moment(selectedContract.dtContrato).format("DD/MM/YYYY")}
            </p>
            <p>
              <span> Quantidade total de prestações</span>
              {selectedContract.qtPrestacoes}
            </p>
            <p>
              <span> Valor total do contrato</span>
              {handleCurrency(Number(selectedContract.vlTotal))}
            </p>
            <p>
              <span> Código do produto </span>
              {selectedContract.cdProduto}
            </p>
            <p>
              <span> Descrição do produto </span>
              {selectedContract.dsProduto}
            </p>
            <p>
              <span> Código da carteira </span>
              {selectedContract.cdCarteira}
            </p>
            <p>
              <span> Descrição da carteira </span>
              {selectedContract.dsCarteira}
            </p>
            <p>
              <span> Número da proposta </span>
              {selectedContract.nrProposta}
            </p>
            <p>
              <span> Número da prestação </span>
              {selectedContract.nrPresta}
            </p>
            <p>
              <span> Tipo de prestação </span>
              {selectedContract.tpPresta}
            </p>
            <p>
              <span> Número sequencial da prestação </span>
              {selectedContract.nrSeqPre}
            </p>
            <p>
              <span> Data de vencimento da prestação</span>
              {moment(selectedContract.dtVctPre).format("DD/MM/YYYY")}
            </p>
            <p>
              <span> Valor da prestação</span>
              {handleCurrency(Number(selectedContract.vlPresta))}
            </p>
            <p>
              <span> Valor de mora </span>
              {handleCurrency(Number(selectedContract.vlMora))}
            </p>
            <p>
              <span> Valor de multa</span>
              {handleCurrency(Number(selectedContract.vlMulta))}
            </p>
            <p>
              <span> Valor de outros acréscimos</span>
              {handleCurrency(Number(selectedContract.vlOutAcr))}
            </p>
            <p>
              <span> Valor de IOF</span>
              {handleCurrency(Number(selectedContract.vlIof))}
            </p>
            <p>
              <span> Valor de desconto</span>
              {handleCurrency(Number(selectedContract.vlDescon))}
            </p>
            <p>
              <span> Valor atualizado</span>
              {handleCurrency(Number(selectedContract.vlAtual))}
            </p>
            <p>
              <span> Identificador da situação </span>
              {selectedContract.idSituac}
            </p>
            <p>
              <span> Identificador da situação de vencimento</span>
              {selectedContract.idSitVen}
            </p>
          </Paper>
        </Content>
      )}
    </DrawerMui>
  );
}
