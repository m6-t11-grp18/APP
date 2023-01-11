import Footer from '../../components/footer';
import Headerr from '../../components/header';
import {
  MainWrapper,
  Form,
  Div,
  LabelCompartilhada,
  Botaoo1,
  Botaoo2,
} from './style';
import Text from '../../components/text/paragraph';
import Label from '../../components/form/label';
import Input from '../../components/form/input';
import { themes } from '../../style/theme';
import { useNavigate } from 'react-router-dom';
import BrandButton from '../../components/buttons/brand';
import { useState, useCallback } from 'react';
import MotoShopApi from '../../services';

export default function Register() {
  let navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [dataDeNascimento, setDataDeNascimento] =
    useState('');
  const [descricao, setDescricao] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [tipoDeConta, setTipoDeConta] =
    useState('Comprador');
  const [senha, setSenha] = useState('');

  const [selectedButton, setSelectedButton] =
    useState(null);

  const handleButtonClick = (e) => {
    const { name } = e.target;
    if (name === selectedButton) {
      setSelectedButton(null);
    } else {
      setSelectedButton(name);
    }
  };

  const createUser = () => {
    const data = {
      name: nome,
      email: email,
      cpf: cpf,
      phone: celular,
      birth: dataDeNascimento,
      descripition: descricao,
      cep: cep,
      estado: estado,
      cidade: cidade,
      rua: rua,
      numero: numero,
      complemento: complemento,
      tipoDeConta: tipoDeConta,
      password: senha,
    };

    console.log('dados do formulario -->', data);

    MotoShopApi.post('/user/', data)
      .then((res) => {
        console.log('deu certo o post na api -->', res);

        navigate(`/login`);
      })
      .catch((error) => {
        console.log(
          'deu certo o post na API nao -->',
          error.response.data
        );
      });
  };

  const TextStyle = {
    color: `${themes.light.white[1]}`,
    fontWeight: `${themes.light.fontWeight[6]}`,
    fontSize: `${themes.light.fontSize[125]}`,
    fontFamily: `${themes.light.fontFamily['Lexend']}`,
  };

  const TextStyle2 = {
    color: `${themes.light.white[1]}`,
    fontWeight: `${themes.light.fontWeight[6]}`,
    fontSize: `${themes.light.fontSize[100]}`,
    fontFamily: `${themes.light.fontFamily['Lexend']}`,
  };

  const buttonStyle = {
    width: '100%',
    height: '40px',
  };

  const buttonStyle2 = {
    width: '45%',
    height: '40px',
  };

  return (
    <>
      <Headerr />
      <MainWrapper>
        <Form>
          <Text style={TextStyle}>Cadastro </Text>
          <Text style={TextStyle2}>
            Informações pessoais
          </Text>

          <Label>Nome</Label>
          <Input
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Samuel Leão"
          />

          <Label>Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: samuel@kenzie.com"
          />

          <Label>CPF</Label>
          <Input
            onChange={(e) => setCpf(e.target.value)}
            placeholder="000.000.000-00"
          />

          <Label>Celular</Label>
          <Input
            onChange={(e) => setCelular(e.target.value)}
            placeholder="(DDD) 90000-0000"
          />

          <Label>Data de Nascimento</Label>
          <Input
            onChange={(e) =>
              setDataDeNascimento(e.target.value)
            }
            placeholder="00/00/00"
          />

          <Label>Descrição</Label>
          <Input
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digitar descrição"
          />

          <Text style={TextStyle2}>
            Informações de Endereço
          </Text>

          <Label>CEP</Label>
          <Input
            onChange={(e) => setCep(e.target.value)}
            placeholder="00000.000"
          />

          <Div>
            <LabelCompartilhada>
              <Label>Estado</Label>
              <Input
                onChange={(e) => setEstado(e.target.value)}
                placeholder="Digitar estado"
              />
            </LabelCompartilhada>
            <LabelCompartilhada>
              <Label>Cidade</Label>
              <Input
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Digitar cidade"
              />
            </LabelCompartilhada>
          </Div>

          <Label>Rua</Label>
          <Input
            onChange={(e) => setRua(e.target.value)}
            placeholder="Digitar rua"
          />

          <Div>
            <LabelCompartilhada>
              <Label>Número</Label>
              <Input
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Digitar número"
              />
            </LabelCompartilhada>
            <LabelCompartilhada>
              <Label>Complemento</Label>
              <Input
                onChange={(e) =>
                  setComplemento(e.target.value)
                }
                placeholder="Ex: apto 307, torre 2"
              />
            </LabelCompartilhada>
          </Div>

          <Text style={TextStyle2}>Tipo de conta</Text>

          <Div>
            <Botaoo1
              type="button"
              name="button1"
              onClick={() => {
                handleButtonClick();
                setTipoDeConta('Comprador');
              }}
              style={
                selectedButton === 'button1'
                  ? { backgroundColor: 'green' }
                  : buttonStyle2
              }
            >
              Comprador
            </Botaoo1>

            <Botaoo2
              type="button"
              name="button2"
              onClick={() => {
                handleButtonClick();
                setTipoDeConta('Anunciante');
              }}
              style={
                selectedButton === 'button2'
                  ? { backgroundColor: 'green' }
                  : buttonStyle2
              }
            >
              Anunciante
            </Botaoo2>
          </Div>

          <Label>Senha</Label>
          <Input
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digitar senha"
          />

          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digitar senha novamente"
          />

          <BrandButton
            style={buttonStyle}
            onClick={createUser}
          >
            Finalizar Cadastro
          </BrandButton>
        </Form>
      </MainWrapper>
      <Footer />
    </>
  );
}
