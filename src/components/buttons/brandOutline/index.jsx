import { Wrapper } from './style';

export default function BrandOutlineButton({
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
