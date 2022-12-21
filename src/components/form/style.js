import styled from 'styled-components';

export const FormWrapper = styled.form`
  background-color: ${({ theme }) => theme.white[0]};
  padding: 2rem 2rem;
  border-radius: 4px;
  ${(props) => props.formStyle}
`;

export const InputWrapper = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 4x;
  border: 1.5px solid ${({ theme }) => theme.grey[7]};
  text-align: left;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.grey[1]};
  font-weight: 400;

  ::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.grey[3]};
    font-size: 0.75rem;
  }
  :-ms-input-placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.grey[3]};
    font-size: 1rem;
  }
  ::-ms-input-placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.grey[3]};
    font-size: 1rem;
  }
  ${(props) => props.inputStyle}
`;

export const LabelWrapper = styled.label`
  color: ${({ theme }) => theme.grey[1]};
  font-weight: 500;
  ${(props) => props.labelStyle}
`;
