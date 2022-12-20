import { TextStyled } from './style';

export default function Text({
  children,
  txtStyle,
  fontSize,
  fontWeight,
  ...rest
}) {
  return (
    <TextStyled
      txtStyle={txtStyle}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </TextStyled>
  );
}
