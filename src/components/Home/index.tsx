/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import CartImage from "../../assets/cartIcon.svg";
import {
  ButtonBuy,

  ContainerHome,

  ImgCart,
  ImgMovie,
  MovieArea,
  MovieList,
 
  TextPrice,
  TextQntd,
  TextTitleMovie,
} from "./style";
import { api } from "../../services/axios";
import { MovieListContext } from "../../context";

interface Movie {
  id: number;
  image: string;
  price: number;
  title: string;
  qntd: number;
}

export function Home() {
  const { setQntd, setMovies } = useContext(MovieListContext);

  const [data, setData] = useState<Movie[]>([]);

  const [listMovies, setListMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setQntd(listMovies.length);
  }, [listMovies]);

  useEffect(() => {
    api.get("movies").then((response) => setData(response.data.products));
  },[])

  function formatPrice(num: number) {
    return num.toString().replace(".", ",");
  }

  let list: any = {};

  var result: Movie[];
  function saveMovie(movie: Movie) {
    list = { ...movie, qntd: 1 };

    if (listMovies.length <= 0) {
      setListMovies([...listMovies, list]);
    } else {
      let count: number = 0 
      result = listMovies.filter(function (el) {
        
        if(el.id !== movie.id){
            
            return true
        }else{
            count = el.qntd;
            return false
        }
        
      });
      list = { ...list, qntd: count + 1 };
      setListMovies([...result, list]);
    }
  }

  function countMovie(id: number) {
    let qntdMovie = 0;
    listMovies.map((movie) => (movie.id === id ? qntdMovie = movie.qntd : null));
    return qntdMovie;
  }
  useEffect(() => {
    let aux: any = [...listMovies]
    aux = [...aux]
    setMovies(aux)
    
  }, [listMovies]);

  return (
    <ContainerHome>
    
        <MovieList>
          {data.map((movie) => (
            <MovieArea key={movie.id}>
              <ImgMovie src={movie.image} alt={movie.title} />
              <TextTitleMovie>{movie.title}</TextTitleMovie>
              <TextPrice>R$ {formatPrice(movie.price)}</TextPrice>
              <ButtonBuy
                movieAdd={countMovie(movie.id) > 0}
                onClick={() => saveMovie(movie)}
              >
                <ImgCart src={CartImage} alt="cart image" />
                <TextQntd>{countMovie(movie.id)}</TextQntd>Adicionar ao carrinho
              </ButtonBuy>
            </MovieArea>
          ))}
        </MovieList>
    </ContainerHome>
  );
}
