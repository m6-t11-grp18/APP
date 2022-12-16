import { TextStyled } from "./style";

export default function Label({ child, txtStyl, ...rest }) {
  return <TextStyled txtStyl={txtStyl} {...rest}>{child}</TextStyled>;
}
