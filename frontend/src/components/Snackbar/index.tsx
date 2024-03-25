import { useEffect } from "react";
import { StyledSnackbar } from "./style";

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

export default function Snackbar({ message, onClose }: SnackbarProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 7000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return <StyledSnackbar>{message}</StyledSnackbar>;
}
