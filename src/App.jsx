import * as React from "react";
import { Container } from "@mui/system";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    <Container>
      {/* Função utilizando map */}
      {produtos.map(({ id, title, price, image }) => {
        return (
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <article key={id}>
                  <h3>{title}</h3>
                  <p>{price}</p>
                  <img src={image} alt="" />
                </article>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Container>
  );
};

export default App;
