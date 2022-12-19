import { Wrapper} from './style';

export default function Footer({
  ...rest
}) {
  return (
    <Wrapper {...rest}>
      <h1>Motors shop</h1>
      <span>@2022 - Todos os direitos reservados.</span>
      <span></span>
    </Wrapper>
  );
}