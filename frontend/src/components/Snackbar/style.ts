import styled from "styled-components";

export const StyledSnackbar = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.green300};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 20px;
  border-radius: 5px;
  animation: slideIn 0.5s ease-out forwards, fadeOut 0.5s ease-out forwards 3s;

  @keyframes slideIn {
    from {
      transform: translateX(-50%) translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
