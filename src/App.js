import { useState } from "react";
import { palavras } from "./palavras";



export default function App() {
  const [sorteio, setSorteio] = useState("");
  //const [clicado, setClicado] = useState([]);
  const [linhas, setLinhas] = useState("");
  ///const maiusculoSorteado = sorteio.toUpperCase();
  
  

  function Alfabeto(props) {
    const [color, setColor] = useState(props.color);
    function clicou(letra) {
      if(sorteio.includes(letra) === true){
        setColor("red")
      } else {
        setColor("#e1ecf4")
      }
      
    }
    return (
    <button onClick={() => clicou(props.letra)} style={{ backgroundColor: `${color}` }}>{props.letra}</button>
    )
  
  }

  function iniciarJogo() {
    const sorteado = palavras[Math.floor(Math.random() * palavras.length)];
    let underline = "__ ";
    let tamanho = sorteado.length;
    console.log(sorteio, sorteado)
    setSorteio([sorteado]);
    setLinhas(underline.repeat(tamanho));
  }
  
  const alfabeto = [
    { letra: "A", color: "#e1ecf4" },
    { letra: "B", color: "#e1ecf4" },
    { letra: "C", color: "#e1ecf4" },
    { letra: "D", color: "#e1ecf4" },
    { letra: "E", color: "#e1ecf4" },
    { letra: "F", color: "#e1ecf4" },
    { letra: "G", color: "#e1ecf4" },
    { letra: "H", color: "#e1ecf4" },
    { letra: "I", color: "#e1ecf4" },
    { letra: "J", color: "#e1ecf4" },
    { letra: "K", color: "#e1ecf4" },
    { letra: "L", color: "#e1ecf4" },
    { letra: "M", color: "#e1ecf4" },
    { letra: "N", color: "#e1ecf4" },
    { letra: "O", color: "#e1ecf4" },
    { letra: "P", color: "#e1ecf4" },
    { letra: "Q", color: "#e1ecf4" },
    { letra: "R", color: "#e1ecf4" },
    { letra: "S", color: "#e1ecf4" },
    { letra: "T", color: "#e1ecf4" },
    { letra: "U", color: "#e1ecf4" },
    { letra: "V", color: "#e1ecf4" },
    { letra: "W", color: "#e1ecf4" },
    { letra: "X", color: "#e1ecf4" },
    { letra: "Y", color: "#e1ecf4" },
    { letra: "Z", color: "#e1ecf4" },
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
        <div class="letras">
          {alfabeto.map((a, index) => (
            <Alfabeto letra={a.letra} color={a.color} />
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
