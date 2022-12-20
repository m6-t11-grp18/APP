import styled from 'styled-components';

export const TextStyled = styled.p`
  color: ${({ theme }) => theme.white[0]};
  font-family: 'Inter';
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  ${(props) => props.txtStyle}
`;
