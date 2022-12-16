import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.feedback[3]};
  color: ${({ theme }) => theme.feedback[1]};
  border-radius: 3px;
  border: none;
  padding: 25%;
  font-size: 20%;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  
  :hover {
    background: ${({ theme }) => theme.feedback[2]};
  }
  :disabled {
    background: ${({ theme }) => theme.grey[5]};
    color: ${({ theme }) => theme.white[0]};
  }

  ${props => props.btnStyle}
`;
