import { Container, Content } from "./style";
import Dropzone, { FileRejection } from "react-dropzone";
import apiClient from "@/api/apiClient";
import { Dispatch, SetStateAction, useState } from "react";
import Spinner from "../Spinner";
import Snackbar from "../Snackbar";
import { ContractCDCRow } from "@/types/IData";

interface UploadProps {
  setData: Dispatch<SetStateAction<ContractCDCRow[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSnackbar: Dispatch<SetStateAction<boolean>>;
  setSnackbarMessage: Dispatch<SetStateAction<string>>;
}

export default function Upload({
  setData,
  loading,
  setLoading,
  setSnackbar,
  setSnackbarMessage,
}: UploadProps) {
  const handleDrop = async (
    acceptedFiles: File[],
    rejectedFiles: FileRejection[]
  ) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      setSnackbarMessage(`Rejeitado: ${rejectedFiles[0].errors[0].message}`);
      setSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    try {
      setLoading(true);
      const response = await apiClient.post("/contracts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSnackbarMessage(`${response.data}`);
      setSnackbar(true);

      if (response.status === 200) {
        const response = await apiClient.get("/contracts");

        setData(response.data);
      }
    } catch (error) {
      setSnackbarMessage(`Erro ao enviar arquivo: ${error}`);
      setSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <Dropzone
          onDrop={handleDrop}
          accept={{
            "text/plain": [".csv"],
            "application/vnd.ms-excel": [".csv"],
          }}
          multiple={false}
        >
          {({ getRootProps, getInputProps }) => (
            <>
              {loading ? (
                <Spinner />
              ) : (
                <div
                  {...getRootProps({
                    className: "dropzone",
                  })}
                >
                  <input {...getInputProps()} />
                  <>
                    <p>
                      Arraste e solte algum arquivo <b>aqui</b> ou clique para
                      selecionar
                    </p>
                    <em>(Somente *.csv será aceito)</em>
                  </>
                </div>
              )}
            </>
          )}
        </Dropzone>
      </Content>
    </Container>
  );
}
