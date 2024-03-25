import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4rem;
  width: 100%;
  max-width: 70rem;

  div.table {
    width: 100%;
    min-height: 424px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 10%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: ${(props) => props.theme.colors.green800};
  color: ${(props) => props.theme.colors.white};
  padding: 8px;
  text-align: left;
`;

export const TableCell = styled.td`
  border: 1px solid ${(props) => props.theme.colors.gray300};
  padding: 8px;
  height: 100%;
  min-height: 3rem;
  max-height: 3rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.green800};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
