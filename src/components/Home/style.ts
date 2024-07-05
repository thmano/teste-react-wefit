import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 16px;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const MovieArea = styled.div`
  width: 100%;
  max-width: 338px;
  min-width: 328px;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ImgMovie = styled.img`
  width: 147px;
  height: 188px;
`;

export const ImgCart = styled.img`
  width: 12px;
  height: 12px;
`;
export const TextTitleMovie = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
`;
export const TextPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 21.79px;
`;
type ColorButton = {
  movieAdd: boolean;
};

export const ButtonBuy = styled.button<ColorButton>`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => (props.movieAdd ? "#039B00" : "#009edd")};
`;
export const TextQntd = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16.34px;
`;
