import BrandOutlineButton from '../../components/buttons/brandOutline';
import Text from '../../components/text/paragraph';
import Footer from '../../components/footer'

import {
  Announcements,
  AnnouncementSection,
  Header,
  HeaderBtnsWrapper,
  MainWrapper,
} from './style';
import { themes } from '../../style/theme';
import { Link } from 'react-scroll';
import Headerr from '../../components/header';
import ProductCard from '../../components/ProductCard';

export default function LandingPage() {
  return (
    <MainWrapper id="top">
      <Headerr/>
      <Header>
        <Text
          style={{
            fontFamily: 'Lexend',
            fontWeight: 700,
            fontSize: '2rem',
            textAlign: 'center',
            padding: '0.5rem',
            maxWidth: '29ch',
            whiteSpace: "wrap",
            overflow: "hidden"
          }}
        >
          Velocidade e experiência em um lugar feito para
          você
        </Text>

        <Text>
          Um ambiente feito para você explorar o seu melhor
        </Text>
        <HeaderBtnsWrapper>
          <Link
            to="carros"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            <BrandOutlineButton
              href="#carros"
              style={{
                border: `1px solid ${themes.light.white[0]}`,
                color: `${themes.light.white[0]}`,
                padding: '1vh 4rem',
              }}
            >
              Carros
            </BrandOutlineButton>
          </Link>
          <Link
            to="motos"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            <BrandOutlineButton
              href="#motos"
              style={{
                border: `1px solid ${themes.light.white[0]}`,
                color: `${themes.light.white[0]}`,
                padding: '1vh 4rem',
              }}
            >
              Motos
            </BrandOutlineButton>
          </Link>
        </HeaderBtnsWrapper>
      </Header>

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
          <ProductCard/>
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
        <Announcements></Announcements>
      </AnnouncementSection>
      <Footer />
    </MainWrapper>
  );
}
