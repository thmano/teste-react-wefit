/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-args */
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import {
    AreaConterMobile,
  AreaCount,
  AreaTextDetails,
  ContainerListMovies,
  ContainerMobile,
  ContainerPrice,
  ContainerPriceMobile,
  DetailsMobile,
  DetailsMovie,
  DetailsMovieMobile,
  ImgDelete,
  ImgDeleteMobile,
  ImgMovie,
  ImgMovieMobile,
  PriceDetails,
  PriceDetailsMobile,
  TextSubTotalMobile,
  TitleDetails,
  TitleDetailsMobile,
} from "./style";

import ImageDelete from "../../assets/DeleteIcon.svg";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { MovieListContext } from "../../context";
import { useWindowSize } from "../../useWindowResize";

export function ListMovies({ ...item }) {
    const width = useWindowSize();

  const { moviesList, setMovies } = useContext(MovieListContext);
  const [subTotal, setSubTotal] = useState<number>(
    item.item.qntd * item.item.price
  );
  const [value, setValue] = useState(item.item.qntd);

  function handleQntd(values: number, operation: string) {
    let list = { ...item.item };
    let count: number = 0;
    let indexMovie: number = 0;
    operation === "dec" ? setValue(values - 1) : setValue(values + 1);
    moviesList.filter(function (el) {
      if (el.id !== item.item.id) {
        return true;
      } else {
        moviesList.map((movie, index) => {
          if (movie.id === el.id) {
            indexMovie = index;
          }
        });
        count = el.qntd;
        return false;
      }
    });
    list = [...moviesList];
    operation === "dec"
      ? (list[indexMovie].qntd = count - 1)
      : (list[indexMovie].qntd = count + 1);
    setMovies(list);
  }

  function deleteMovie() {
    const result = moviesList.filter(function (el) {
      if (el.id !== item.item.id) {
        return true;
      } else {
        return false;
      }
    });
    let aux: any = result;
    setMovies(aux);
  }

  useEffect(() => {
    setSubTotal(value * item.item.price);
  }, [value]);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: item.item.qntd,
      min: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
    {
        width >  600 ? 

      <ContainerListMovies>
        <DetailsMovie>
          <ImgMovie src={item.item.image} />
          <AreaTextDetails>
            <TitleDetails>{item.item.title}</TitleDetails>
            <PriceDetails>R$ {item.item.price}</PriceDetails>
          </AreaTextDetails>
        </DetailsMovie>
        <AreaCount>
          <HStack maxW="320px">
            <Button
              color="#009EDD"
              width="18px"
              h="18px"
              borderRadius="50%"
              padding="0px"
              minW="18px"
              bg="#fff"
              borderColor="#009EDD"
              border="1px"
              {...dec}
              onClick={() => handleQntd(value, "dec")}
            >
              -
            </Button>

            <Input
              w="62px"
              h="28px"
              color="#2F2E41"
              fontSize="14px"
              textAlign="center"
              borderColor="#D9D9D9"
              {...input}
            />
            <Button
              color="#009EDD"
              width="18px"
              h="18px"
              borderRadius="50%"
              padding="0px"
              minW="18px"
              bg="#fff"
              borderColor="#009EDD"
              border="1px"
              {...inc}
              onClick={() => handleQntd(value, "inc")}
            >
              +
            </Button>
          </HStack>
        </AreaCount>
        <ContainerPrice>
          R$ {subTotal.toFixed(2)}
          <ImgDelete
            src={ImageDelete}
            alt="Delete icon"
            onClick={() => deleteMovie()}
          />
        </ContainerPrice>
      </ContainerListMovies>
:
<ContainerMobile>
        <ImgMovieMobile src={item.item.image} />
        <DetailsMobile>

        
        <DetailsMovieMobile>
          <TitleDetailsMobile>{item.item.title}</TitleDetailsMobile>
          <PriceDetailsMobile>
            R$ {item.item.price}{" "}
            <ImgDeleteMobile
              src={ImageDelete}
              alt="Delete icon"
              onClick={() => deleteMovie()}
              />
          </PriceDetailsMobile>
        </DetailsMovieMobile>
        <AreaConterMobile>
        <AreaCount>
          <HStack maxW="320px">
            <Button
              color="#009EDD"
              width="18px"
              h="18px"
              borderRadius="50%"
              padding="0px"
              minW="18px"
              bg="#fff"
              borderColor="#009EDD"
              border="1px"
              {...dec}
              onClick={() => handleQntd(value, "dec")}
              >
              -
            </Button>

            <Input
              w="62px"
              h="28px"
              color="#2F2E41"
              fontSize="14px"
              textAlign="center"
              borderColor="#D9D9D9"
              {...input}
              />
            <Button
              color="#009EDD"
              width="18px"
              h="18px"
              borderRadius="50%"
              padding="0px"
              minW="18px"
              bg="#fff"
              borderColor="#009EDD"
              border="1px"
              {...inc}
              onClick={() => handleQntd(value, "inc")}
              >
              +
            </Button>
          </HStack>
        </AreaCount>
        <ContainerPriceMobile>
            <TextSubTotalMobile>
                SUBTOTAL
            </TextSubTotalMobile>
          R$ {subTotal.toFixed(2)}
        </ContainerPriceMobile>
        </AreaConterMobile>
        </DetailsMobile>
      </ContainerMobile>
}
    </>
  );
}
