import { TextStyled } from "./style";

export default function Anchor({ child, txtStyl, ...rest }) {
  return <TextStyled txtStyl={txtStyl} {...rest}>{child}</TextStyled>;
}
