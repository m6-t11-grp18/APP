import { useContext, useState } from 'react';
import Modal from '..';
import { StyleContext } from '../../../provider/styleProvider';
import { themes } from '../../../style/theme';
import BrandOutlineButton from '../../buttons/brandOutline';
import NegativeButton from '../../buttons/negative';
import Input from '../../form/input';
import Label from '../../form/label';
import { FormWrapper } from '../../form/style';
import Anchor from '../../text/anchor';
import Text from '../../text/paragraph';
import { InputsWrapper, TitleWrapper } from './style';
import { MdExposurePlus1 } from 'react-icons/md';

export default function CreateAddModal() {
  const { createAddModal, setCreateAddModal } =
    useContext(StyleContext);

  const [typeBtnsColor, setTypeBtnsColor] = useState({
    venda: {
      color: themes.light.white[0],
      backgroundColor: themes.light.brand[1],
      borderColor: themes.light.brand[1],
    },
    leilao: {
      color: themes.light.grey[0],
      backgroundColor: themes.light.white[0],
      borderColor: themes.light.grey[4],
    },
  });

  const [typeVeicColor, setTypeVeicColor] = useState({
    carro: {
      color: themes.light.white[0],
      backgroundColor: themes.light.brand[1],
      borderColor: themes.light.brand[1],
    },
    moto: {
      color: themes.light.grey[0],
      backgroundColor: themes.light.white[0],
      borderColor: themes.light.grey[4],
    },
  });

  const [galleryItens, setGalleryItens] = useState(1);

  function createElement(prop) {
    return (
      <>
        {' '}
        <Label
          htmlFor="gallery"
          style={{
            width: '60%',
            margin: '4% 20% 2% 20%',
            padding: '5px 10px',
            // width: '200px',
            backgroundColor: themes.light.brand[1],
            color: '#FFF',
            textAlign: 'center',
            display: 'block',
            marginTop: '10px',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          `${prop}`ª Imagem da galeria
        </Label>
        <Input
          type="file"
          style={{ display: 'none' }}
          name="gallery"
          id="gallery"
          multiple
        />
      </>
    );
  }

  return (
    <Modal
      variable={createAddModal}
      set={setCreateAddModal}
      modalStyle={
        `width: 40%;` +
        `display: flex;` +
        `flex-direction: column;` +
        `font-family: 'Inter';` +
        `background-color: ${themes.light.white[0]}; ` +
        `padding: 1% 2%;` +
        `margin: 4vh 0`
      }
    >
      <TitleWrapper>
        <Text
          style={{
            color: `${themes.light.white[1]}`,
            textAlign: 'center',
          }}
        >
          Criar anuncio
        </Text>
        <NegativeButton
          style={{ backgroundColor: 'transparent' }}
          onClick={() => setCreateAddModal(false)}
        >
          X
        </NegativeButton>
      </TitleWrapper>
      <FormWrapper
        style={{
          width: '100%',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Label style={{ width: '100%' }}>
          Tipo de anúncio
        </Label>
        <InputsWrapper
          style={{
            margin: '3% 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <BrandOutlineButton
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setTypeBtnsColor({
                venda: {
                  color: themes.light.white[0],
                  backgroundColor: themes.light.brand[1],
                  borderColor: themes.light.brand[1],
                },
                leilao: {
                  color: themes.light.grey[0],
                  backgroundColor: themes.light.white[0],
                  borderColor: themes.light.grey[4],
                },
              });
            }}
            style={{
              width: '45%',
              color: typeBtnsColor.venda.color,
              backgroundColor:
                typeBtnsColor.venda.backgroundColor,
              borderColor: typeBtnsColor.venda.borderColor,
            }}
          >
            Venda
          </BrandOutlineButton>
          <BrandOutlineButton
            onClick={(event) => {
              event.preventDefault();
              setTypeBtnsColor({
                leilao: {
                  color: themes.light.white[0],
                  backgroundColor: themes.light.brand[1],
                  borderColor: themes.light.brand[1],
                },
                venda: {
                  color: themes.light.grey[0],
                  backgroundColor: themes.light.white[0],
                  borderColor: themes.light.grey[4],
                },
              });
            }}
            type="button"
            style={{
              width: '45%',
              color: typeBtnsColor.leilao.color,
              backgroundColor:
                typeBtnsColor.leilao.backgroundColor,
              borderColor: typeBtnsColor.leilao.borderColor,
            }}
          >
            Leilão
          </BrandOutlineButton>
        </InputsWrapper>
        <Label style={{ width: '100%' }}>
          Infomações do veículo
        </Label>
        <Label
          style={{ width: '100%', margin: '3% 0 2% 0' }}
        >
          Título
        </Label>
        <Input placeholder="Digitar título" />

        <InputsWrapper
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '4%',
          }}
        >
          <InputsWrapper
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '25%',
            }}
          >
            <Label>Ano</Label>
            <Input
              placeholder="Digitar ano"
              style={{
                marginTop: '3%',
              }}
            />
          </InputsWrapper>
          {
            <InputsWrapper
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '25%',
              }}
            >
              <Label>Quilometragem</Label>
              <Input
                placeholder="0"
                style={{
                  marginTop: '3%',
                }}
              />
            </InputsWrapper>
          }
          <InputsWrapper
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '25%',
            }}
          >
            <Label>Preço</Label>
            <Input
              placeholder="Digitar preço"
              style={{
                marginTop: '3%',
              }}
            />
          </InputsWrapper>
        </InputsWrapper>
        <Label
          style={{ width: '100%', margin: '3% 0 2% 0' }}
        >
          Descrição
        </Label>
        <Input
          type="textarea"
          placeholder="Digitar descrição"
        />

        <Label style={{ width: '100%', marginTop: '4%' }}>
          Tipo de veículo
        </Label>
        <InputsWrapper
          style={{
            margin: '3% 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <BrandOutlineButton
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setTypeVeicColor({
                carro: {
                  color: themes.light.white[0],
                  backgroundColor: themes.light.brand[1],
                  borderColor: themes.light.brand[1],
                },
                moto: {
                  color: themes.light.grey[0],
                  backgroundColor: themes.light.white[0],
                  borderColor: themes.light.grey[4],
                },
              });
            }}
            style={{
              width: '45%',
              color: typeVeicColor.carro.color,
              backgroundColor:
                typeVeicColor.carro.backgroundColor,
              borderColor: typeVeicColor.carro.borderColor,
            }}
          >
            Carro
          </BrandOutlineButton>
          <BrandOutlineButton
            onClick={(event) => {
              event.preventDefault();
              setTypeVeicColor({
                moto: {
                  color: themes.light.white[0],
                  backgroundColor: themes.light.brand[1],
                  borderColor: themes.light.brand[1],
                },
                carro: {
                  color: themes.light.grey[0],
                  backgroundColor: themes.light.white[0],
                  borderColor: themes.light.grey[4],
                },
              });
            }}
            type="button"
            style={{
              width: '45%',
              color: typeVeicColor.moto.color,
              backgroundColor:
                typeVeicColor.moto.backgroundColor,
              borderColor: typeVeicColor.moto.borderColor,
            }}
          >
            moto
          </BrandOutlineButton>
        </InputsWrapper>

        <Label
          htmlFor="cover"
          style={{
            width: '60%',
            margin: '4% 20% 2% 20%',
            padding: '5px 10px',
            // width: '200px',
            backgroundColor: themes.light.brand[1],
            color: '#FFF',
            textAlign: 'center',
            display: 'block',
            marginTop: '10px',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Imagem de capa
        </Label>
        <Input
          type="file"
          style={{ display: 'none' }}
          name="cover"
          id="cover"
        />
        <InputsWrapper
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 'fit-content',
            flexWrap: 'nowrap',
          }}
        >
          <Label
            style={{
              width: 'fit-content',
              margin: '4% 2% 0 0',
              whiteSpace: 'nowrap',
            }}
          >
            Imagens da galeria
          </Label>
          <button
            style={{
              borderRadius: '50%',
              width: '2rem',
              height: '2rem',
              border: `1px solid ${themes.light.brand[1]}`,
              fontWeight: themes.light.fontWeight[1000],
              color: themes.light.white[0],
              backgroundColor: themes.light.brand[1],
            }}
          >
            <MdExposurePlus1
              stroke-width="0"
              style={{
                height: '80%',
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                border: 'none',

              }}
            />
          </button>
        </InputsWrapper>
        <Label
          htmlFor="gallery"
          style={{
            width: '60%',
            margin: '4% 20% 2% 20%',
            padding: '5px 10px',
            // width: '200px',
            backgroundColor: themes.light.brand[1],
            color: '#FFF',
            textAlign: 'center',
            display: 'block',
            marginTop: '10px',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          1ª Imagem da galeria
        </Label>
        <Input
          type="file"
          style={{ display: 'none' }}
          name="gallery"
          id="gallery"
          multiple
        />
      </FormWrapper>
    </Modal>
  );
}
