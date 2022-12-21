import styled from 'styled-components';

export const BlurWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #00000060;
  backdrop-filter: blur(2px);

  z-index: 10;
  ${(props) => props.blurWrapperStyle}
`;

export const ModalWrapper = styled.div`
  z-index: 15;
  box-sizing: content-box;
  -webkit-overflow-y: scroll;
  -moz-overflow-y: scroll;
  -o-overflow-y: scroll;
  overflow-y: scroll;
  fon
  /* width: 40%;
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  background-color: white;
  color: black; */

  ${(props) => props.modalStyle}
`;
