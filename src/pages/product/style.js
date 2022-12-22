import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.grey[8]};
  align-items: center;
  justify-content: center;
  gap: 20px;

  box-sizing: border-box;
`;

export const Header = styled.section`
  position: relative;
  width: calc(100vw + 2px);
  height: 50vh;
  margin-top: 70px;
  background-color: ${({ theme }) => theme.brand[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0;
  box-sizing: border-box;
`;

export const Photo = styled.div`
  position: absolute;
  top: 5vw;
  width: 95vw;
  height: 95vw;
  max-height: 40vh;
  background: ${({ theme }) => theme.grey[10]};
  border-radius: 7px;

  img {
    width: 95%;
    height: 95%;
    object-fit: contain;
  }
`;

export const BasicDetailsHeadline = styled.div`
  position: absolute;
  height: 20px;
  width: 95vw;
  top: calc(100% - 19px);
  border-radius: 7px 7px 0 0;
  background: ${({ theme }) => theme.grey[10]};
`;

export const BasicDetails = styled.section`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  padding: 8px 28px 28px 28px;
  width: calc(95vw - 54px);
  height: fit-content;
  background: ${({ theme }) => theme.grey[10]};
  border-radius: 0 0 7px 7px;
  gap: 30px;
`;

export const Title = styled.h1`
font-family: 'Lexend';
font-style: normal;
font-weight: 600;
font-size: 1.75rem;
line-height: 35px;
color ${({ theme }) => theme.grey[1]};
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.brand[4]};
  color: ${({ theme }) => theme.brand[1]};
  display: flex;
  border-radius: 7px;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  font-size: 17px;
  height: fit-content;
  width: fit-content;
  padding: 10px 15px;
  min-width: 60px;
`;

export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  gap: 10px;
`;

export const Gap = styled.div`
  height: ${({ height }) =>
    height ? height + 'px' : '0px'};
  width: ${({ width }) => (width ? width + 'px' : '0px')};
`;

export const Price = styled.span`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 35px;
`;

export const BrandButton = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : '17px'};
  line-height: 0px;
  color: #ffffff;
  border-radius: 7px;
  border: 1.5px solid #4529e6;
  background-color: ${({ theme }) => theme.brand[1]};

  width: ${({ width }) => (width ? width : '150px')};
  height: ${({ height }) => (height ? height : '55px')};
`;

export const SectionTitle = styled.h2`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 35px;
  color: ${({ theme }) => theme.grey[1]};
`;

export const Description = styled.div`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 95vw;
  gap: 32px;
  background-color: ${({ theme }) => theme.grey[10]};
`;

export const SectionP = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.grey[2]};
`;

export const PhotosSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 7vw;
  width: calc(95vw - 14vw);
  height: auto;
  background-color: ${({ theme }) => theme.grey[10]};
  border-radius: 7px;
  gap: 30px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    aspect-ratio: 1/1;
    max-width: 170px;
    background-color: ${({ theme }) => theme.grey[7]};
    border-radius: 7px;
  }

  img {
    width: 93%;
    height: 93%;
    object-fit: contain;
  }
`;

export const SellerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  height: auto;
  gap: 30px;
  width: calc(95vw - 50px);
  background-color: ${({ theme }) => theme.grey[10]};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.brand[1]};
  color: #ffffff;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 26.6538px;
  line-height: 39px;
`;

export const MoreAds = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 0px;
  color: #ffffff;
  border-radius: 7px;
  border: 1.5px solid #4529e6;
  background-color: ${({ theme }) => theme.grey[0]};

  width: 100%;
  min-width: 200px;
  max-width: 275px;
  height: 55px;
`;

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px;
  height: auto;
  gap: 30px;
  width: calc(95vw - 50px);
  background-color: ${({ theme }) => theme.grey[10]};

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: justify;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: justify;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.grey[1]};
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.grey[3]};
  }
`;

export const CommentProfile = styled.div`
  padding: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brand[1]};
  color: #ffffff;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border-radius: 100%;
`;

export const MakeCommentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 65px;
  height: fit-content;
  gap: 15px;
  width: calc(95vw - 130px);
  background-color: ${({ theme }) => theme.grey[10]};
`;

export const CommentInput = styled.textarea`
  padding: 15px;
  height: 128px;
  width: 100%;
  color: ${({ theme }) => theme.grey[3]};
  border: 1px solid ${({ theme }) => theme.grey[7]};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  :focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.grey[5]};
  }
`;

export const QuickComments = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  button {
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.grey[7]};
    color: ${({ theme }) => theme.grey[3]};

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;

    outline: none;
    border: none;
    box-sizing: border-box;

    :focus {
      outline: none;
      border: none;
    }
  }
`;
