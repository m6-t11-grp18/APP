import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.white[1]};
  color: ${({ theme }) => theme.white[0]};
  border: none;
  padding: 45px 9vw;
  width: 100%;
  max-width: 100%;
  height: 100%;
  /* margin-top: 4rem; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 26px;
    font-weight: 700;
    overflow-x: clip;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    span {
      font-size: 15px;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 13px;
    }
  }

  ${(props) => props.footerStyle}
`;
