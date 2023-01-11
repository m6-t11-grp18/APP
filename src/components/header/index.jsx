import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { StyleContext } from '../../provider/styleProvider';
import UserModal from '../modals/userModal';
import {
  CadastrarButton,
  CarrosButton,
  FazerLoginButton,
  Hamburguer,
  LeilaoButton,
  LogoContainer,
  Menu,
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
  NavMobileWrapper,
} from './style';

export default function Headerr({ ...rest }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const { userModal, setUserModal } =
    useContext(StyleContext);

  const [logged, setIsLogged] = useState(false);

  const isLogged = localStorage.getItem('@WHO-TOKEN');

  useEffect(() => {
    if (isLogged) {
      setIsLogged(true);
    }
  }, [logged]);

  return (
    <>
      <StyledHeader>
        <LogoContainer onClick={() => navigate('/')}>
          <Motors>Motors</Motors>
          <Shop>shop</Shop>
        </LogoContainer>
        <StyledRightButtonsWrapper>
          {logged ? (
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
              <Options3
                onMouseEnter={() => setUserModal(true)}
                onMouseLeave={() => setUserModal(false)}
              >
                <SamuelLeaoFoto>SL</SamuelLeaoFoto>
                <SamuelLeaoNome>Samuel Leão</SamuelLeaoNome>
                {userModal && <UserModal />}
              </Options3>
            </Options>
          ) : (
            <Options2>
              <FazerLoginButton
                onClick={() => navigate('/login')}
              >
                Fazer Login
              </FazerLoginButton>
              <CadastrarButton
                onClick={() => navigate('/register')}
              >
                Cadastrar
              </CadastrarButton>
            </Options2>
          )}
        </StyledRightButtonsWrapper>

        <NavMobileWrapper>
          <Hamburguer>
            <input
              type="checkbox"
              onChange={(event) => {
                setIsOpen(event.target.checked);
              }}
            />
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
          <Menu isOpen={isOpen}>
            <Link
              to="carros"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <li>Carros</li>
            </Link>
            <Link
              to="motos"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <li>Motos</li>
            </Link>
            <Link
              to="leilao"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <li>Leilão</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
              onClick={() => navigate('/login')}
            >
              <li>Meu perfil</li>
            </Link>
          </Menu>
        </NavMobileWrapper>
      </StyledHeader>
    </>
  );
}
