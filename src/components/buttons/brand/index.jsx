import { Wrapper } from './style';

export default function BrandButton({
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
