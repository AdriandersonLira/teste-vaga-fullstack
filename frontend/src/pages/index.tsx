import apiClient from "@/api/apiClient";
import Header from "@/components/Header";
import Snackbar from "@/components/Snackbar";
import Spinner from "@/components/Spinner";
import TableWithPagination from "@/components/TableWithPagination";
import Upload from "@/components/Upload";
import { Container } from "@/styles/pages/app";
import { ContractCDCRow } from "@/types/IData";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const [data, setData] = useState<ContractCDCRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/contracts");
        setData(response.data);
      } catch (error) {
        setSnackbarMessage(`Erro ao buscar contratos: ${error}`);
        setSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  return (
    <Container>
      <Header />

      {loading ? (
        <Spinner />
      ) : (
        <>
          {data.length === 0 ? (
            <Upload
              setData={setData}
              loading={loading}
              setLoading={setLoading}
              setSnackbar={setSnackbar}
              setSnackbarMessage={setSnackbarMessage}
            />
          ) : (
            <TableWithPagination data={data} />
          )}
        </>
      )}
      {snackbar && (
        <Snackbar message={snackbarMessage} onClose={handleCloseSnackbar} />
      )}
    </Container>
  );
}
