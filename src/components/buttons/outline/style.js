import styled from 'styled-components';

export const Wrapper = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.grey[0]};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.grey[0]};
  padding: 25%;
  font-size: 20%;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.grey[2]};
  }
  :disabled {
    background: ${({ theme }) => theme.grey[10]};
    color: ${({ theme }) => theme.grey[10]};
  }

  ${props => props.btnStyle}
`;
