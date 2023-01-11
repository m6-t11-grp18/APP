import Footer from '../../components/footer';
import Headerr from '../../components/header';
import Text from '../../components/text/paragraph';
import Label from '../../components/form/label';
import Input from '../../components/form/input';
import { MainWrapper, Anchor, Form } from './style';
import { themes } from '../../style/theme';
import BrandButton from '../../components/buttons/brand';
import BrandOutlineButton from '../../components/buttons/brandOutline';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import MotoShopApi from '../../services';
import { useState } from 'react';

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    const data = {
      email: email,
      password: senha,
    };

    console.log('dados do formulario -->', data);

    MotoShopApi.post('/auth/', data)
      .then((resp) => {
        console.log('deu certo o post na api?:', resp);
        localStorage.setItem('@WHO-TOKEN', resp.data.token);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(
          'deu certo o post na API nao -->',
          error.response.data
        );
      });
  };

  const handleButtonRegister = () => {
    navigate(`/register`);
  };

  const TextStyle = {
    color: `${themes.light.white[1]}`,
    fontWeight: `${themes.light.fontWeight[6]}`,
    fontSize: `${themes.light.fontSize[125]}`,
    fontFamily: `${themes.light.fontFamily['Lexend']}`,
  };

  const linkStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  };

  const buttonStyle = {
    width: '100%',
    height: '40px',
  };

  return (
    <>
      <Headerr />
      <MainWrapper id="top">
        <Form>
          <Text style={TextStyle}>Login </Text>

          <Label>Usuário</Label>
          <Input
            onClick={(e) => setEmail(e.target.value)}
            placeholder="Digite seu usuário aqui"
          />

          <Label>Senha</Label>
          <Input
            onClick={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha aqui"
          />

          <Link style={linkStyle}>Esqueci minha senha</Link>

          <BrandButton
            style={buttonStyle}
            onClick={login}
          >
            Entrar
          </BrandButton>

          <Anchor>Ainda não tem sua conta? </Anchor>

          <BrandOutlineButton
            style={buttonStyle}
            onClick={handleButtonRegister}
          >
            Cadastrar
          </BrandOutlineButton>
        </Form>
      </MainWrapper>
      <Footer />
    </>
  );
}
