import { useEffect } from "react";
import { StyledSnackbar } from "./style";

interface SnackbarProps {
  message: string;
  onClose: () => void;
  type: string;
}

export default function Snackbar({
  message,
  onClose,
  type = "success",
}: SnackbarProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 7000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return <StyledSnackbar className={type}>{message}</StyledSnackbar>;
}
