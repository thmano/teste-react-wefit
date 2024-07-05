import { useState } from "react";
import { Container, ContainerScreens, ContainerSpinner } from "./styles";
import { Header } from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Home } from "./components/Home";
import { MovieContextProvider } from "./context";
import { LittleCar } from "./components/LittleCar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SuccessOrder } from "./components/SuccessOrder";

export function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <ChakraProvider>
      <MovieContextProvider>
        <Router>
          <Container>
            <Header />
            {loading ? (
              <ContainerSpinner>
                <Spinner color="#fff" size="xl" />
              </ContainerSpinner>
            ) : (
                <ContainerScreens>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/littleCart" element={<LittleCar />} />
                  <Route path="/success" element={<SuccessOrder/>} />
              </Routes>
                </ ContainerScreens>
            )}
          </Container>
        </Router>
      </MovieContextProvider>
    </ChakraProvider>
  );
}
