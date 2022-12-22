import { TextStyled } from './style';

export default function Anchor({
  children,
  txtStyl,
  ...rest
}) {
  return (
    <TextStyled txtStyl={txtStyl} {...rest}>
      {children}
    </TextStyled>
  );
}
