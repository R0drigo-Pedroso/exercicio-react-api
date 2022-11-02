import { useEffect, useState } from "react";

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const capt = await res.json();
        setProdutos(capt);
      } catch (error) {
        console.log("Alguma coisa está errado! " + error.message);
      }
    }
    getProdutos();
  }, []);

  return (
    <section className="container">
      {produtos.map(({ id, title, price, image }) => {
        return (
          <section className="alinhamento">
            <article className="boxConteudo" key={id}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{price}</p>
            </article>
          </section>
        );
      })}
    </section>
  );
};

export default App;
