import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.grey[6]};
  color: ${({ theme }) => theme.grey[2]};
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 25%;
  font-size: 20%;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.grey[5]};
  }
  :disabled {
    background: ${({ theme }) => theme.grey[5]};
    color: ${({ theme }) => theme.white[0]};
  }

  ${props => props.btnStyle}
`;
