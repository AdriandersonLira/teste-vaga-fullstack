import {
  Container,
  PaginationButton,
  PaginationContainer,
  StyledTable,
  TableCell,
  TableHeader,
} from "./style";
import { ContractCDCRow } from "@/types/IData";
import { useState } from "react";

import { cpf, cnpj } from "cpf-cnpj-validator";
import moment from "moment";

import AssignmentIcon from "@mui/icons-material/Assignment";

import { IconButton } from "@mui/material";
import { handleCurrency } from "@/utils/helpers";
import Drawer from "../Drawer";

interface TableWithPaginationProps {
  data: ContractCDCRow[];
}

export default function TableWithPagination({
  data,
}: TableWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(7);

  const [selectedContract, setSelectedContract] =
    useState<ContractCDCRow | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const generatePaginationButtons = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return [...Array(totalPages)].map((_, i) => {
      const pageNumber = i + 1;

      return (
        <PaginationButton key={i} onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </PaginationButton>
      );
    });
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleOpenDrawer = (contract: ContractCDCRow) => {
    setSelectedContract(contract);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setSelectedContract(null);
    setDrawerOpen(false);
  };

  return (
    <Container>
      <div className="table">
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>CPF/CNPJ</TableHeader>
              <TableHeader>Cliente</TableHeader>
              <TableHeader>Número da instituição</TableHeader>
              <TableHeader>Número do contrato</TableHeader>
              <TableHeader>Data de assinatura</TableHeader>
              <TableHeader>Quantidade de prestações</TableHeader>
              <TableHeader>Valor total</TableHeader>
              <TableHeader>Ações</TableHeader>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <TableCell>
                  {item.nrCpfCnpj.length > 11
                    ? cnpj.format(item.nrCpfCnpj)
                    : cpf.format(item.nrCpfCnpj)}
                </TableCell>
                <TableCell>{item.nmClient}</TableCell>
                <TableCell>{item.nrInst}</TableCell>
                <TableCell>{item.nrContrato}</TableCell>
                <TableCell>
                  {moment(item.dtContrato).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>{item.qtPrestacoes}</TableCell>
                <TableCell>{handleCurrency(Number(item.vlTotal))}</TableCell>
                <TableCell className="actions">
                  <IconButton onClick={() => handleOpenDrawer(item)}>
                    <AssignmentIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>

      <PaginationContainer>{generatePaginationButtons()}</PaginationContainer>

      <Drawer
        drawerOpen={drawerOpen}
        handleCloseDrawer={handleCloseDrawer}
        selectedContract={selectedContract}
      />
    </Container>
  );
}
