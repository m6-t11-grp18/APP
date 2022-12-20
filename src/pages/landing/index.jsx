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
export default function LandingPage() {
  return (
    <MainWrapper>
      <Header>
        <Text
          style={{
            fontFamily: 'Lexend',
            fontWeight: 700,
            fontSize: '2rem',
            textAlign: 'center',
            padding: '0.5rem',
          }}
        >
          Velocidade e experiência em um lugar feito para
          você
        </Text>
        <Text>
          Um ambiente feito para você explorar o seu melhor
        </Text>
        <HeaderBtnsWrapper>
          <BrandOutlineButton
            style={{
              border: `1px solid ${themes.light.white[0]}`,
              color: `${themes.light.white[0]}`,
            }}
          >
            Carros
          </BrandOutlineButton>
          <BrandOutlineButton
            style={{
              border: `1px solid ${themes.light.white[0]}`,
              color: `${themes.light.white[0]}`,
            }}
          >
            Motos
          </BrandOutlineButton>
        </HeaderBtnsWrapper>
      </Header>

      <AnnouncementSection>
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
        <Announcements></Announcements>
      </AnnouncementSection>

      <AnnouncementSection>
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
      <Footer/>
    </MainWrapper>
  );
}
