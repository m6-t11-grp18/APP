import { Wrapper } from './style';

export default function GreyButton({
  children,
  btnStyle,
  ...rest
}) {
  return (
    <Wrapper type="button" btnStyle={btnStyle} {...rest}>
      {children}
    </Wrapper>
  );
}
