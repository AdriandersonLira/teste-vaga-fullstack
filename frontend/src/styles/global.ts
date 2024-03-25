import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.gray100};
    color: ${(props) => props.theme.colors.gray900};
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: "antialised";
  }

  body, input, textarea, button {
    font-family: "Work Sans";
    font-weight: 400;
  }
`;
