import styled from "styled-components";

export const ContainerLittleCar = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
  flex-direction: column;
  gap: 24px;

`;
export const Header = styled.div`
  width: 100%;
  display: flex;
`;

export const TitlesHeader = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #999999;
  width: 100%;
  @media (max-width: 600px) {
    display:none;
  }
`;

export const ComponentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ContainerValueTotal = styled.div`
  width: 100%;
  border-top: 1px solid #999999;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
    @media (max-width: 600px) {
        flex-direction: column;
  }
`;

export const ButtonBuy = styled.button`
  width: 173px;
  height: 34px;
  border-radius: 4px;
  background-color: #009edd;
  padding: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
   @media (max-width: 600px) {
    width: 100%;
  }

`;
export const DescriptionTotal = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
   @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const ValueTotal = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32.68px;
  color: #2f2e41;
`;

export const TextTotal = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #999999;
`;
export const EmptyArea = styled.div`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 24px;
  max-width: 1048px;
  padding: 64px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const TextEmpty = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27.24px;
  text-align: center;
  color: #000;
`;

export const EmptyImg = styled.img`
  height: 256px;
  width: 447px;
  border-bottom: 1px solid #000;
`;

export const ButtonRecharge = styled.button`
  width: 173px;
  height: 40px;
  border-radius: 4px;
  background-color: #009edd;
  padding: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
`;

