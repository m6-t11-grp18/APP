import styled from 'styled-components';

export const Wrapper = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.brand[1]};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.brand[1]};
  padding: 25%;
  font-size: 20%;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.brand[4]};
  }
  :disabled {
    background: ${({ theme }) => theme.brand[3]};
    color: ${({ theme }) => theme.brand[4]};
  }

  ${props => props.btnStyle}
`;
