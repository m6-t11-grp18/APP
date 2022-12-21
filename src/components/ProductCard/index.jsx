import {
  Container,
  Description,
  Image,
  Title,
  Container2,
  Container3,
  Container4,
  Price,
  Container5,
  BotaoEditar,
  BotaoVerComo,
} from './style';

import carro from '../../assets/carro.png';

export default function ProductCard({ ...rest }) {
  return (
    <Container>
      <Image src={carro} alt="carro" />
      <Title>Product title stays here - max 1 line</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem...
      </Description>
      <Container2>
        <Container3>
          <Container4>0 KM</Container4>
          <Container4>2019</Container4>
        </Container3>

        <Price>R$ 00.000,00</Price>
      </Container2>

      <Container5>
        <BotaoEditar>Editar</BotaoEditar>
        <BotaoVerComo>Ver como</BotaoVerComo>
      </Container5>
    </Container>
  );
}
