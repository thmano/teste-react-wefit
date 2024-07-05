/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
import { useContext } from "react";
import { MovieListContext } from "../../context";
import EmptyImage from "../../assets/hiddenData.svg";
import {
  ButtonBuy,
  ButtonRecharge,
  ComponentList,
  ContainerLittleCar,
  ContainerValueTotal,
  DescriptionTotal,
  EmptyArea,
  EmptyImg,
  Header,
  TextEmpty,
  TextTotal,
  TitlesHeader,
  ValueTotal,
} from "./style";
import { ListMovies } from "../ListMovies";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function LittleCar() {
  const { moviesList, setMovies, setQntd, setTotal  } = useContext(MovieListContext);
    let totalValueOrder: number = 0;

    moviesList.map((item) => {
        let subTotal = item.price * item.qntd
        totalValueOrder = totalValueOrder + subTotal
    })

function finalOrder(){
  
    api.post('Ordered/', {qntd: moviesList.length, total: totalValueOrder, movies: [moviesList]})
    setMovies([])
    setQntd(0)
    setTotal(0)

    
}


  return (
    <>
    {moviesList.length <= 0 ? (
        <EmptyArea>
          <TextEmpty>Parece que não há nada por aqui :(</TextEmpty>
          <EmptyImg src={EmptyImage} alt="Não a nada por aqui" />
          <Link to="/">
          <ButtonRecharge >
            Recarregar página
          </ButtonRecharge>
          </Link>
        </EmptyArea>
      ) : (
    <ContainerLittleCar>
      <Header>
        <TitlesHeader>PRODUTO</TitlesHeader>
        <TitlesHeader>QTD</TitlesHeader>
        <TitlesHeader>SUBTOTAL</TitlesHeader>
      </Header>
      <ComponentList>
        {moviesList.map((item) => (
          <ListMovies key={item.id} item={{ ...item }} />
        ))}
      </ComponentList>
      <ContainerValueTotal>
        <DescriptionTotal>
          <TextTotal>TOTAL</TextTotal>
          <ValueTotal>R$ {totalValueOrder.toFixed(2)}</ValueTotal>
        </DescriptionTotal>
        <Link to="/success">
          <ButtonBuy onClick={()=> finalOrder()}>FINALIZAR PEDIDO</ButtonBuy>
        </Link>
      </ContainerValueTotal>
    </ContainerLittleCar>
      )}
    </>
  );
}
