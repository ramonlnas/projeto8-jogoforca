import { useState } from "react";
import { palavras } from "./palavras";

export default function App() {
  const [sorteio, setSorteio] = useState("");
  const [contador, setContador] = useState(1);
  const [secreto, setSecreto] = useState("");
  const [clicado, setClicado] = useState();
  const [listaClicada, setListaClicada] = useState([]);

  function Alfabeto(props) {
    const { letra, color } = props;
    const [cor, setCor] = useState(color);
    console.log(cor);

    function clicou(letra) {
      const novaLista = [...listaClicada,letra]
      setListaClicada(novaLista)

      if (clicado.includes(letra)) {
        const letraCerta = clicado.indexOf(letra);
        console.log(letraCerta);
        setSecreto(secreto.fill([letra], letraCerta, letraCerta + 1));
        console.log(secreto);
        setCor("green");
      } else {
        setContador(contador + 1);
        setCor("red");

      }
      console.log(letra, sorteio);
      console.log(clicado);
    }
    return (
      <button
        onClick={() => clicou(letra)}
        style={{ backgroundColor: `${cor}` }}
      >
        {letra}
      </button>
    );
  }

  function iniciarJogo() {
    const sorteado = palavras[Math.floor(Math.random() * palavras.length)];
    const arraySorteado = sorteado.split("");
    console.log(arraySorteado);
    setClicado(arraySorteado);
    const palavraSeparada = [...arraySorteado];
    const underline = palavraSeparada.fill(" _ ");
    setSecreto(underline);
    setSorteio(sorteado);
  
  }

  const alfabeto = [
    { letra: "a", color: "#e1ecf4" },
    { letra: "b", color: "#e1ecf4" },
    { letra: "c", color: "#e1ecf4" },
    { letra: "d", color: "#e1ecf4" },
    { letra: "e", color: "#e1ecf4" },
    { letra: "f", color: "#e1ecf4" },
    { letra: "g", color: "#e1ecf4" },
    { letra: "h", color: "#e1ecf4" },
    { letra: "i", color: "#e1ecf4" },
    { letra: "j", color: "#e1ecf4" },
    { letra: "k", color: "#e1ecf4" },
    { letra: "l", color: "#e1ecf4" },
    { letra: "m", color: "#e1ecf4" },
    { letra: "n", color: "#e1ecf4" },
    { letra: "o", color: "#e1ecf4" },
    { letra: "p", color: "#e1ecf4" },
    { letra: "q", color: "#e1ecf4" },
    { letra: "r", color: "#e1ecf4" },
    { letra: "s", color: "#e1ecf4" },
    { letra: "t", color: "#e1ecf4" },
    { letra: "u", color: "#e1ecf4" },
    { letra: "v", color: "#e1ecf4" },
    { letra: "w", color: "#e1ecf4" },
    { letra: "x", color: "#e1ecf4" },
    { letra: "y", color: "#e1ecf4" },
    { letra: "z", color: "#e1ecf4" },
  ];

  return (
    <>
      <div className="Topo">
        <img src="assets/forca0.png" alt="Forca" />
        <button onClick={() => iniciarJogo()}>Escolher Palavra</button>
      </div>
      <div className="words">
        <span>{}</span>
      </div>
      <div className="underline">
        <span>{secreto}</span>
      </div>

      <div className="conteiner-letras">
        <div className="letras">
          {alfabeto.map((a, index) => (
            <Alfabeto letra={a.letra} color={a.color} key={index} />
          ))}
        </div>
      </div>
      <div class="Bottom">
        <span>Já sei a palavra!</span>
        <input></input>
        <button>Chutar</button>
      </div>
    </>
  );
}