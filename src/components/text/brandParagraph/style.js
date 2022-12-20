import styled from 'styled-components';

export const TextStyled = styled.p`
  color: ${({ theme }) => theme.brand[1]};
  background-color: ${({ theme }) => theme.brand[4]};

  padding: 12.5% 16%;
  border-radius: 4px;

  font-size: ${(prop, { theme }) =>
    theme.white[prop.fontSize]};
  font-weight: ${(prop, { theme }) =>
    theme.white[prop.fontWeight]};

  ${txtStyl}
`;
