import { Wrapper } from './style';

export default function Footer({
  footerStyle,
  ...rest
}) {
  return (
    <Wrapper footerStyle={footerStyle} {...rest}>
      <span>Motors shop</span> 
      <span>@2022 - Todos os direitos reservados.</span>
      <span></span>
    </Wrapper>
  );
}