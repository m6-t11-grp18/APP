import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 50px;
`;

export const Image = styled.img`
  background-color: #e9ecef;
  border-radius: 4px;
`;

export const Title = styled.div`
  margin-top: 20px;
  font-weight: bolder;
  margin-bottom: 25px;
  font-size: 1rem;
`;
export const Description = styled.div`
  font-size: 0.9rem;
  color: #495057;
  margin-bottom: 20px;

  overflow: hidden;
  max-width: 80ch;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 136px;
`;

export const Container4 = styled.div`
  background-color: #edeafd;
  color: #5700e3;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 60px;
`;

export const Price = styled.div`
  font-weight: bolder;
`;

export const Container5 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const BotaoEditar = styled.div`
  border-radius: 4px;
  border: 2px solid black;
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 15px;
  font-weight: bolder;
`;

export const BotaoVerComo = styled.div`
  border-radius: 4px;
  border: 2px solid black;
  font-size: 0.9rem;
  cursor: pointer;
  width: 220px;
  height: 40px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SellerDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
`;
