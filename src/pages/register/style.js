import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    height: 180vh;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 380px;
    gap: 1rem;
    background-color: ${({ theme }) => theme.grey[5]};
    padding: 2rem 2rem;
    border-radius: 4px;

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