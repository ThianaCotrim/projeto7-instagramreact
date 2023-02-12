import RenderizarSugestoes from "./RenderizarSugestoes"
import sugestoes from "./arrayDeSugestoes"

const Sugestao = () => {

    return (
        sugestoes.map((s) => (
           <div>
            <RenderizarSugestoes imagem={s.imagem} textoUm={s.textoUm} textoDois={s.textoDois}/>
           </div>

            ))
    )
} 
export default Sugestao
