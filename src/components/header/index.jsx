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
  MobileMenu,
  Motors,
  MotosButton,
  NavButton,
  Options,
  Options2,
  Options3,
  SamuelLeaoFoto,
  SamuelLeaoNome,
  Shop,
  StyledHeader,
  StyledRightButtonsWrapper,
  TracoDoBotaoNav,
} from './style';

export default function Headerr({ ...rest }) {
  const navigate = useNavigate();

  const [wasClicked, setWasClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { userModal, setUserModal } =
    useContext(StyleContext);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener(
      'resize',
      updateWindowDimensions
    );

    return () =>
      window.removeEventListener(
        'resize',
        updateWindowDimensions
      );
  }, []);

  return (
    <>
      <StyledHeader>
        <LogoContainer onClick={() => navigate('/')}>
          <Motors>Motors</Motors>
          <Shop>shop</Shop>
        </LogoContainer>

        {width > 768 ? (
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
        ) : (
          <nav>
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
                <li>Info</li>
              </Link>
              <Link
                to="login"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <li>Meu perfil</li>
              </Link>
            </Menu>
          </nav>
        )}
      </StyledHeader>
    </>
  );
}
