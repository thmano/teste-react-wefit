import {
  Container,
  CountArea,
  ImgBagIcon,
  MarketArea,
  TextItens,
  TextMarket,
  TitleHeader,
} from "./style";
import bagIcon from "../../assets/bagIcon.svg";
import { useContext } from "react";
import { MovieListContext } from "../../context";
import { Link } from "react-router-dom";

;

export function Header() {
    const { qntd } = useContext(MovieListContext);
    
  return (
    <Container>
      <TitleHeader>WeMovie</TitleHeader>
      <MarketArea>
        <CountArea>
          <TextMarket>Meu Carrinho</TextMarket>
          <TextItens>{qntd} itens</TextItens>
        </CountArea>
        <Link to="/littleCart">
            <ImgBagIcon src={bagIcon} alt="bag icon" />
        </Link>
      </MarketArea>
    </Container>
  );
}
