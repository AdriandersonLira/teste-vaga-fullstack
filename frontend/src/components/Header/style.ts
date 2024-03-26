import { styled } from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.9rem 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 5.05rem;
    max-width: 12.6rem;
    max-height: 10.2rem;
    width: auto;
    height: auto;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 5.05rem;

  .picture {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .info {
    margin: 0;
    font-size: 14px;
  }
`;
