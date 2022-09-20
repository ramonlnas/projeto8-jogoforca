export default function App (){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"]
    return (
        <>
            <div className="Topo">
                <img src = "assets/forca0.png"/>
                <button>Escolher Palavra</button>
            </div>
            <div class="letras">
             {letras.map((l) => <button>{l}</button>)}  
            </div>
            <div class = "Bottom">
                <span>Já sei a palavra!</span>
                <input></input>
                <button>Chutar</button>
            </div>





            
        </>
    )
}
