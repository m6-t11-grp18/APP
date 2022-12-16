import { useEffect, useState } from 'react';
import { ModalWrapper, BlurWrapper } from './style';

export default function Modal({
  children,
  variable,
  set,
  modalStyle,
  blurWrapperStyle,
}) {
  return (
    <>
      {variable && (
        <BlurWrapper
          onClick={() => set(false)}
          blurWrapperStyle={blurWrapperStyle}
        >
          <ModalWrapper modalStyle={modalStyle}>
            {children}
          </ModalWrapper>
        </BlurWrapper>
      )}
    </>
  );
}
