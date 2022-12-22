import { useContext } from 'react';
import BrandOutlineButton from '../../components/buttons/brandOutline';
import Footer from '../../components/footer';
import Headerr from '../../components/header';
import CreateAddModal from '../../components/modals/createAdd';
import ProductCard from '../../components/ProductCard';
import Text from '../../components/text/paragraph';
import { MotorShopContext } from '../../provider/motorShopProvider';
import { StyleContext } from '../../provider/styleProvider';
import { themes } from '../../style/theme';
import {
  Announcements,
  AnnouncementSection,
  MainWrapper,
} from '../landing/style';
import {
  SellerAvatar,
  SellerInfosWrapper,
  SellerWrapper,
} from '../seller/style';

export default function HomePage() {
  const { products } = useContext(MotorShopContext);

  const { createAddModal, setCreateAddModal } =
    useContext(StyleContext);
  return (
    <>
      {createAddModal && <CreateAddModal />}
      <Headerr />
      <MainWrapper
        id="top"
        style={{
          padding: '10vh 0 0 0',
          backgroundImage: `linear-gradient(${themes.light.brand[1]} 0, ${themes.light.brand[1]} 25vh,${themes.light.grey[8]} 25vh)`,
          margin: '70px 0 0 0',
        }}
      >
        <SellerWrapper>
          <SellerAvatar>SL</SellerAvatar>
          <SellerInfosWrapper>
            <Text
              style={{
                color: `${themes.light.white[1]}`,
                fontWeight: `${themes.light.fontWeight[6]}`,
                fontFamily: `${themes.light.fontFamily['Lexend']}`,
              }}
            >
              Samuel Leão
            </Text>
            {/* <Text
              style={{
                fontSize: `${themes.light.fontSize['75']}`,
                fontWeight: `${themes.light.fontWeight[5]}`,
                backgroundColor: `${themes.light.brand[4]}`,
                borderRadius: '4px',
                color: `${themes.light.brand[1]}`,
                alignItems: 'center',
                padding: '0 0.5rem',
                textAlign: 'center',
                verticalAlign: 'middle',
                margin: '0 0 0 1rem',
              }}
            >
              Anunciante
            </Text> */}
          </SellerInfosWrapper>
          <Text
            style={{
              fontSize: `${themes.light.fontSize['75']}`,
              fontWeight: `${themes.light.fontWeight[4]}`,
              color: `${themes.light.grey[2]}`,
              margin: '0 0 2rem 0',
            }}
          >
            Mussum Ipsum, cacilds vidis litro abertis. Em pé
            sem cair, deitado sem dormir, sentado sem
            cochilar e fazendo pose.Casamentiss faiz
            malandris se pirulitá.Aenean aliquam molestie
            leo, vitae iaculis nisl.Per aumento de cachacis,
            eu reclamis.
          </Text>

          <BrandOutlineButton
            onClick={() => setCreateAddModal(true)}
          >
            Criar anuncio
          </BrandOutlineButton>
        </SellerWrapper>

        <AnnouncementSection id="carros">
          <Text
            style={{
              fontFamily: 'Lexend',
              fontWeight: 600,
              fontSize: '1.5rem',
              textAlign: 'left',
              padding: '0.5rem',
              color: ` ${themes.light.white[1]}`,
            }}
          >
            Carros
          </Text>
          <Announcements>
            {products.length > 0 &&
              products.map((element, index) => {
                return (
                  element.type === 'car' && (
                    <ProductCard
                      key={index}
                      product={element}
                    />
                  )
                );
              })}
          </Announcements>
        </AnnouncementSection>

        <AnnouncementSection id="motos">
          <Text
            style={{
              fontFamily: 'Lexend',
              fontWeight: 600,
              fontSize: '1.5rem',
              textAlign: 'left',
              padding: '0.5rem',
              color: ` ${themes.light.white[1]}`,
            }}
          >
            Motos
          </Text>
          <Announcements>
            {products.length > 0 &&
              products.map((element, index) => {
                return (
                  element.type === 'motorcycle' && (
                    <ProductCard
                      key={index}
                      product={element}
                    />
                  )
                );
              })}
          </Announcements>
        </AnnouncementSection>

        <Footer />
      </MainWrapper>
    </>
  );
}
