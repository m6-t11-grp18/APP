import { Link } from 'react-scroll';
import {
  CadastrarButton,
  CarrosButton,
  FazerLoginButton,
  LeilaoButton,
  LogoContainer,
  Motors,
  MotosButton,
  Options,
  Options2,
  Options3,
  SamuelLeaoFoto,
  SamuelLeaoNome,
  Shop,
  StyledHeader,
  StyledRightButtonsWrapper,
} from './style';

export default function Headerr({ ...rest }) {
  return (
    <StyledHeader>
      <LogoContainer>
        <Motors>Motors</Motors>
        <Shop>shop</Shop>
      </LogoContainer>

      <StyledRightButtonsWrapper>
        <Options>
          <Link to="carros" spy={true} smooth={true} offset={0} duration={100}>
            <CarrosButton>Carros</CarrosButton>
          </Link>
          <Link to="motos" spy={true} smooth={true} offset={0} duration={100}>
            <MotosButton>Motos</MotosButton>
          </Link>
          <Link to="leilao" spy={true} smooth={true} offset={0} duration={100}>
            <LeilaoButton>Leilão</LeilaoButton>
          </Link>
        </Options>

        <Options3>
          <SamuelLeaoFoto>SL</SamuelLeaoFoto>
          <SamuelLeaoNome>Samuel Leão</SamuelLeaoNome>
        </Options3>

        {/* esse daqui debaixo é pro usuário deslogado */}
        {/* <Options2>
          <FazerLoginButton>Fazer Login</FazerLoginButton>
          <CadastrarButton>Cadastrar</CadastrarButton>
        </Options2> */}
      </StyledRightButtonsWrapper>
    </StyledHeader>
  );
}
