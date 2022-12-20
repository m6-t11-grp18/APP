import { Wrapper } from './style';

export default function OutlineButton({
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
