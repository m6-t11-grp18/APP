import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white[0]};
  box-shadow: 0 0 10px 5px #00000060;
`;

export const StyledRightButtonsWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMobileWrapper = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 250px;
  margin-right: 20px;
`;

export const Options2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 330px;
  height: 100%;
  align-items: center;
  border-left: 2px solid rgb(240, 240, 240);
  padding-left: 20px;
`;

export const Options3 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 100%;
  align-items: center;
  border-left: 2px solid rgb(240, 240, 240);
  padding-left: 15px;
  margin-right: 30px;
  gap: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin-left: 45px;
  cursor: pointer;
`;

export const Motors = styled.div`
  font-size: 1.8rem;
  font-weight: bolder;
  background: #000000;
  background: linear-gradient(
    to right,
    #000000 34%,
    purple 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Shop = styled.div`
  font-size: 1.2rem;
  font-weight: bolder;
  color: purple;
  margin-top: 8px;
`;

export const CadastrarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 130px;
  height: 45px;
  border: 2px solid rgb(216, 216, 216);
  cursor: pointer;
`;

export const CarrosButton = styled.div`
  color: #495057;
  cursor: pointer;
`;
export const MotosButton = styled.div`
  color: #495057;

  cursor: pointer;
`;

export const LeilaoButton = styled.div`
  color: #495057;

  cursor: pointer;
`;
export const FazerLoginButton = styled.div`
  color: #495057;

  cursor: pointer;
`;
export const SamuelLeaoFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
  background-color: #5126ea;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`;

export const SamuelLeaoNome = styled.div`
  color: #495057;
  width: 120px;
  cursor: pointer;
`;

export const NavButton = styled.div`
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Hamburguer = styled.div`
  display: none;
  position: relative;
  right: 25px;

  -webkit-user-select: none;
  user-select: none;

  span {
    display: block;
    width: 38px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #000000;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s
        cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input {
    display: block;
    width: 42px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 1;
    transform: rotate(45deg) translate(0, 0);
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span {
    transform: rotate(-45deg) translate(-5px, 0);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.li`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  left: 0;
  top: calc(100% - 1px);
  z-index: 1000;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
  background: ${({ theme }) => theme.white[0]};
  color: ${({ theme }) => theme.grey[0]};
  transition: max-height 1s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  animation-direction: alternate;

  li {
    padding: 15px;
    ${({ selected, theme }) =>
    selected ? theme.brand[2] : '#ffffff'}
  }
`;
