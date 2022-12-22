import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { StyleContext } from '../../provider/styleProvider';
import UserModal from '../modals/userModal';
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
  const navigate = useNavigate();

  const { userModal, setUserModal } =
    useContext(StyleContext);

  return (
    <StyledHeader>
      <LogoContainer onClick={() => navigate('/')}>
        <Motors>Motors</Motors>
        <Shop>shop</Shop>
      </LogoContainer>

      <StyledRightButtonsWrapper>
        <Options>
          <Link
            to="carros"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            <CarrosButton>Carros</CarrosButton>
          </Link>
          <Link
            to="motos"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            <MotosButton>Motos</MotosButton>
          </Link>
          <Link
            to="leilao"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            <LeilaoButton>Leilão</LeilaoButton>
          </Link>
        </Options>

        <Options3
          onMouseEnter={() => setUserModal(true)}
          onMouseLeave={() => setUserModal(false)}
        >
          <SamuelLeaoFoto>SL</SamuelLeaoFoto>
          <SamuelLeaoNome>Samuel Leão</SamuelLeaoNome>
          {userModal && <UserModal />}
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
