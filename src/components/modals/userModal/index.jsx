import { useNavigate } from 'react-router-dom';
import { themes } from '../../../style/theme';
import Anchor from '../../text/anchor';
import { NavWrapper } from './style';

export default function UserModal() {
  const navigate = useNavigate();

  const AnchorStyle = {
    fontSize: '1rem',
    color: themes.light.grey[2],
    width: '100%',
    fontWeight: themes.light.fontWeight[4],
    cursor: 'pointer',
  };

  return (
    <NavWrapper>
      <Anchor style={AnchorStyle}>Editar perfil</Anchor>
      <Anchor style={AnchorStyle}>Editar endereço</Anchor>
      <Anchor style={AnchorStyle}>Minhas compras</Anchor>
      <Anchor
        style={AnchorStyle}
        onClick={() => navigate('/home')}
      >
        Meus Anúncios
      </Anchor>
      <Anchor onClick={()=>{
        localStorage.clear()
        navigate('/login')
      }} style={AnchorStyle}>Sair</Anchor>
    </NavWrapper>
  );
}
