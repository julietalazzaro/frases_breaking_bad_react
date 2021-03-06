import React, { useState } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase.js";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size, 0.3s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

//http://breaking-bad-quotes.herokuapp.com/v1/quotes
function App() {
  const [frase, setFrase] = useState({});

  //cargar frase inicial

  React.useEffect(() => {
    handleClick();
  }, []);

  // const handleClick = () => {
  //   const api = fetch("http://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const frase = api.then((respuesta) => respuesta.json());
  //   frase.then((resultado) => console.log(resultado));
  // };

  const handleClick = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setFrase(frase[0]);
  };

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={handleClick}>Obtener frase</Boton>;
    </Contenedor>
  );
}

export default App;
