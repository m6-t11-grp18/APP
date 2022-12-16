import { TextStyled } from './style';

export default function Text({
  child,
  txtStyl,
  fontSize,
  fontWeight,
  ...rest
}) {
  return (
    <TextStyled
      txtStyl={txtStyl}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {child}
    </TextStyled>
  );
}
