import { styled } from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.9rem 0;
  width: 100%;
  /* max-width: 1180; */
  margin: 0 auto;
  display: flex;

  img {
    margin-left: 5.05rem;
    max-width: 12.6rem;
    max-height: 10.2rem;
    width: auto;
    height: auto;
  }
`;
