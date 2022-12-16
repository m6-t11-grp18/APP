import { TextStyled } from "./style";

export default function BrandText({ child, txtStyl, ...rest }) {
  return <TextStyled txtStyl={txtStyl} {...rest}>{child}</TextStyled>;
}
