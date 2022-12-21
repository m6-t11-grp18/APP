import { CadastrarButton, CarrosButton, FazerLoginButton, LeilaoButton, LogoContainer, Motors, MotosButton, Options, Options2, Shop, StyledHeader, StyledRightButtonsWrapper } from './style';

export default function Headerr({ ...rest }) {
  return (
    <StyledHeader>
      <LogoContainer>
        <Motors>Motors</Motors>
        <Shop>shop</Shop>
      </LogoContainer>

{/* deslogado ? */}
      <StyledRightButtonsWrapper>
        <Options>
          <CarrosButton>Carros</CarrosButton>
          <MotosButton>Motos</MotosButton>
          <LeilaoButton>Leilão</LeilaoButton>
        </Options>

        <Options2>
          <FazerLoginButton>Fazer Login</FazerLoginButton>
          <CadastrarButton>Cadastrar</CadastrarButton>
        </Options2>
      </StyledRightButtonsWrapper>
       {/* : logado ?  */}
       

    </StyledHeader>
  );
}
