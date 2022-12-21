import styled from 'styled-components';

export const StyledHeader = styled.div`
  position:fixed;
  top:0;
  left:0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white[0]};
`;

export const StyledRightButtonsWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  height: 100%;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
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
  padding-left:30px;
  margin-right:15px;
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

  cursor: pointer;
`;
