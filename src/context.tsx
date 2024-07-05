import { createContext, ReactNode, useState } from "react";

type MoviesContextProps = {
  children: ReactNode;
};

interface Movies {
  id: number;
  price: number;
  title: string;
  image: string;
  qntd: number;
}
interface MoviesType {
  id: number;
  qntd: number;
  total: number
  moviesList: Movies[];
  setId: (newState: number) => void;
  setQntd: (newState: number) => void;
  setTotal: (newState: number) => void;
  setMovies: (newState: []) => void;
}

const DEFAULT_VALUE = {
  id: 0,
  qntd: 0,
  total: 0,
  moviesList: [],
  setId: () => {},
  setQntd: () => {},
  setTotal: () => {},
  setMovies: () => {},
};

export const MovieListContext = createContext<MoviesType>(DEFAULT_VALUE);

export const MovieContextProvider = ({ children }: MoviesContextProps) => {
  const [id, setId] = useState(0);
  const [qntd, setQntd] = useState(0);
  const [total, setTotal] = useState(0)
  const [moviesList, setMovies] = useState<Movies[]>([]);

  return (
    <MovieListContext.Provider
      value={{
        id,
        setId,
        qntd,
        setQntd,
        total,
        setTotal,
        moviesList,
        setMovies,
      }}
    >
      {children}
    </MovieListContext.Provider>
  );
};
