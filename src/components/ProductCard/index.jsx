import { useEffect, useState } from 'react';
import { SellerAvatar } from '../../pages/seller/style';
import Text from '../text/paragraph';
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
  SellerDetails,
} from './style';

export default function ProductCard({ product, ...rest }) {
  const [endPoint, setEndPoint] = useState('/');

  useEffect(() => {
    setEndPoint(window.location.pathname);
  }, []);
  return (
    <Container>
      <Image src={product?.cover} alt="carro" />
      <Title>{product?.title}</Title>
      <Description>{product?.descripition}</Description>

      {/* Retirar quando página home */}
      {endPoint === '/' && (
        <SellerDetails>
          <SellerAvatar
            style={{
              height: '2rem',
              width: '2rem',
              fontSize: '1.5rem',
            }}
          >
            {product?.user?.name[0]}
          </SellerAvatar>
          <Text style={{ color: '#000000' }}>
            {' '}
            {product?.user?.name}
          </Text>
        </SellerDetails>
      )}

      <Container2>
        <Container3>
          <Container4>{product?.milage} KM</Container4>
          <Container4>{product?.year}</Container4>
        </Container3>

        <Price>R$ {product?.price}</Price>
      </Container2>

      {endPoint === '/home' && (
        <Container5>
          <BotaoEditar>Editar</BotaoEditar>
          <BotaoVerComo>Ver como</BotaoVerComo>
        </Container5>
      )}
    </Container>
  );
}
