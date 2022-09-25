import { useState } from "react";
import { palavras } from "./palavras";



export default function App() {
  const [sorteio, setSorteio] = useState("");
  const [linhas, setLinhas] = useState("");

  function Alfabeto(props) {
    const {letra, color} = props;
    const [cor, setCor] = useState(color);

    function clicou(letra) {
      if(sorteio.includes(letra) === true){
        setCor("red")
      } 
      console.log(letra, sorteio)
    }
    return (
    <button onClick={() => clicou(letra)} style={{ backgroundColor: `${cor}` }}>{letra}</button>
    )
  
  }

  function iniciarJogo() {
    const sorteado = palavras[Math.floor(Math.random() * palavras.length)];
    let underline = "__ ";
    let tamanho = sorteado.length;

  
    setSorteio(sorteado);
    setLinhas(underline.repeat(tamanho));
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
        <img src="assets/forca0.png" alt="Forca"/>
        <button onClick={() => iniciarJogo()}>Escolher Palavra</button>
      </div>
      <div className="words">
        <span>{sorteio}</span>
      </div>
      <div className="underline">
        <span>{linhas}</span>
      </div>

      <div className="conteiner-letras">
        <div className="letras">
          {alfabeto.map((a, index) => (
            <Alfabeto letra={a.letra} color={a.color} key = {index}/>
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
