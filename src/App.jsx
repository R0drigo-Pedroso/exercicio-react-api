import { Container, card } from "@mui/system";

import { useEffect, useState } from "react";

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.log("Deu errado a aplicação " + error.message);
      }
    }
    getProdutos();
  }, []);

  return (
    <Container maxWidth="sm">
      {/* Função utilizando map */}
      {produtos.map(({ id, title, price, image }) => {
        return (
          <article key={id}>
            <h3>{title}</h3>
            <p>{price}</p>
            <img src={image} alt="" />
          </article>
        );
      })}
    </Container>
  );
};

export default App;
