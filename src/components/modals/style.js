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

  background-color: #00000020;
  backdrop-filter: blur(20px);

  z-index: 6000;
  ${(props) => props.blurWrapperStyle}
`;

export const ModalWrapper = styled.div`
  ${(props) => props.modalStyle}

  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
`;
