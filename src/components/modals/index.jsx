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
          onClick={(event) => {
            set(false);
            event.stopPropagation();
            event.isPropagationStopped();
          }}
          blurWrapperStyle={blurWrapperStyle}
        >
          <ModalWrapper
            modalStyle={modalStyle}
            onClick={(event) => {
              event.stopPropagation();
              event.isPropagationStopped();
            }}
          >
            {children}
          </ModalWrapper>
        </BlurWrapper>
      )}
    </>
  );
}
