import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    /* height: 180vh; */
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.white[0]};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 380px;
    gap: 1rem;
    background-color:${({ theme }) => theme.grey[5]} ;
    padding: 2rem 2rem;
    border-radius: 4px;
    margin-bottom:80px;
    margin-top:115px;

    @media (width: 425px) {
        width: 340px;
    }

    @media (max-width: 393px) {
        width: 320px;
    }

    @media (width: 320px) {
        width: 300px;
    }

`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LabelCompartilhada = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 1rem;
`

export const Botaoo1 = styled.button`
  background: ${({ theme }) => theme.brand[1]};
  color: ${({ theme }) => theme.white[0]};
  border-radius: 3px;
  border: none;
  font-size: 1rem;
  width: fit-content;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.brand[2]};
  }
  :disabled {
    background: ${({ theme }) => theme.brand[3]};
    color: ${({ theme }) => theme.brand[4]};
  }

  ${(props) => props.btnStyle}
`

export const Botaoo2 = styled.button`
  background: ${({ theme }) => theme.brand[1]};
  color: ${({ theme }) => theme.white[0]};
  border-radius: 3px;
  border: none;
  font-size: 1rem;
  width: fit-content;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.brand[2]};
  }
  :disabled {
    background: ${({ theme }) => theme.brand[3]};
    color: ${({ theme }) => theme.brand[4]};
  }

  ${(props) => props.btnStyle}
`

