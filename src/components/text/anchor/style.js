import styled from 'styled-components';

export const TextStyled = styled.a`
  color: ${({ theme }) => theme.brand[1]};

  font-size: ${(prop, { theme }) =>
    theme.white[prop.fontSize]};
  font-weight: ${(prop, { theme }) =>
    theme.white[prop.fontWeight]};

  ${txtStyl}
`;
