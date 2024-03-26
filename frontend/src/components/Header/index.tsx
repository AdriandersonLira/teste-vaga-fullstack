import { Header as HeaderStyled, ProfileInfo } from "./style";

export default function Header() {
  return (
    <HeaderStyled>
      <img src="https://kronoos.com/hs-fs/hubfs/logo-kronoos.png" alt="" />

      <ProfileInfo>
        <div className="picture">
          <img src="/profile.jpeg" alt="Foto de Perfil" />
        </div>
        <div className="info">
          <p>Adrianderson Lira</p>
          <p>github.com/AdriandersonLira</p>
        </div>
      </ProfileInfo>
    </HeaderStyled>
  );
}
