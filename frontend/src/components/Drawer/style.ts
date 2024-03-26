import styled from "styled-components";

export const Content = styled.div`
  padding: 2rem;
`;

export const Paper = styled.div`
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 4px;

  padding: 1rem;
  margin-top: 1rem;

  max-height: calc(100vh - 110px);
  overflow-y: auto;

  p {
    padding: 7px;
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end;
  margin: 0.6rem 0.7rem 0 0;
`;
