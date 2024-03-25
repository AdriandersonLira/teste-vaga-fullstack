import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding: 20px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  .dropzone {
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    padding: 15px;

    transition: height 0.2s ease;
  }

  li {
    margin: 2rem 2rem 1.2rem 2rem;
    list-style-type: none;

    p {
      margin: 12px 0;
    }
  }
`;
