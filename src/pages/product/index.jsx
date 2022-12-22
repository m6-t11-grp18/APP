import Headerr from '../../components/header';
import {
  BasicDetails,
  Header,
  Horizontal,
  MainWrapper,
  Photo,
  Tag,
  Title,
  Gap,
  Price,
  BrandButton,
  Description,
  BasicDetailsHeadline,
  PhotosSection,
  SectionTitle,
  SectionP,
  SellerSection,
  Profile,
  MoreAds,
  CommentsSection,
  CommentHeader,
  CommentProfile,
  MakeCommentSection,
  CommentInput,
  QuickComments,
} from './style';
// import { themes } from '../../style/theme';
import { Ads, User } from '../../data';
import { useParams } from 'react-router-dom';
// import Anchor from '../../components/text/anchor';
import Footer from '../../components/footer';
import { v4 as uuid } from 'uuid';

function ProductMobile() {
  const { id } = useParams();
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const currentUserInitials = User.name
    .split(' ')
    .map((elem) => elem[0])
    .slice(0, 2)
    .join('');

  return (
    <MainWrapper>
      <Headerr />
      <Header>
        <Photo>
          <img
            src={Ads[id]?.cover}
            alt="product principal"
          />
        </Photo>
        <BasicDetailsHeadline />
      </Header>
      <BasicDetails>
        <Title>{Ads[id].title}</Title>
        <Gap height={15} />
        <Horizontal>
          <Tag>{Ads[id].year}</Tag>
          <Tag>{Ads[id].milage} KM</Tag>
        </Horizontal>
        <Price>{formatter.format(Ads[id].price)}</Price>
        <BrandButton>Comprar</BrandButton>
      </BasicDetails>
      <Description>
        <SectionTitle>Descrição</SectionTitle>
        <SectionP>{Ads[id].description}</SectionP>
      </Description>
      <PhotosSection>
        <SectionTitle>Fotos</SectionTitle>
        <ul>
          {Ads[id].images.map((image) => {
            return (
              <li key={uuid()}>
                <img
                  src={image}
                  alt="product details"
                ></img>
              </li>
            );
          })}
        </ul>
      </PhotosSection>
      <SellerSection>
        <Profile>{currentUserInitials}</Profile>
        <SectionP>
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's
        </SectionP>
        <MoreAds>Ver todos os anúncios</MoreAds>
      </SellerSection>
      <CommentsSection>
        <SectionTitle>Comentários</SectionTitle>
        <ul>
          <li>
            <CommentHeader>
              <CommentProfile>MJ</CommentProfile>
              <h3>Mary Jane</h3>
              <span>•</span>
              <span>há 2 dias</span>
            </CommentHeader>
            <SectionP>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book.
            </SectionP>
          </li>
          <li>
            <CommentHeader>
              <CommentProfile>GS</CommentProfile>
              <h3>Gwen Stacy</h3>
              <span>•</span>
              <span>há 5 dias</span>
            </CommentHeader>
            <SectionP>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book.
            </SectionP>
          </li>
          <li>
            <CommentHeader>
              <CommentProfile>PP</CommentProfile>
              <h3>Peter Parker</h3>
              <span>•</span>
              <span>2 semanas atrás</span>
            </CommentHeader>
            <SectionP>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book.
            </SectionP>
          </li>
        </ul>
      </CommentsSection>
      <MakeCommentSection>
        <CommentHeader>
          <CommentProfile>
            {currentUserInitials}
          </CommentProfile>
          <h3>{User.name}</h3>
        </CommentHeader>
        <CommentInput
          placeholder={
            'Carro muito confortável, foi uma ótima experiência de compra...'
          }
        />
        <BrandButton
          height={'45px'}
          width={'135px'}
          fontSize={'15px'}
        >
          Comentar
        </BrandButton>
        <QuickComments>
          <button>Gostei muito!</button>
          <button>Incrível</button>
          <button>Recomendarei para meus amigos!</button>
        </QuickComments>
      </MakeCommentSection>
      <Footer />
    </MainWrapper>
  );
}

export default ProductMobile;
