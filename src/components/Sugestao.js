export default function Sugestao(props){

    return (
        <div class="seguidos">
                <div class="seguidor-individual">
                    <img src={props.imagem} />
                    <div class="meio">
                        <p class="tituloUm"> {props.textoUm} </p>
                        <p class="tituloDois">{props.textoDois} </p>
                    </div>
                    <div class="seguir">
                        <p> Seguir</p>
                    </div>
                </div>
        </div>
    )
} 

