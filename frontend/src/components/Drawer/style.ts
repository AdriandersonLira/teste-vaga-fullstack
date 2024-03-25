import styled from "styled-components";

export const Content = styled.div`
  padding: 2rem;
`;

export const Paper = styled.div`
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 4px;

  padding: 1rem;
  margin-top: 1rem;

  p {
    padding: 7px;
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
    }
  }
`;
