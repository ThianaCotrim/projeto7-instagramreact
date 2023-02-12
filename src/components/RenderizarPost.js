import { useState } from "react";
export default function RenderizarPost(props) {
    console.log('objeto',props)


    const [coracao, setCoracao] = useState('branco')
    const curtir = () => {
        if (coracao === 'branco'){
            setCoracao('vermelho')
        } else {
            setCoracao('branco')
        }
    }

    const [escolhido, setEscolhido] = useState(undefined)

    const escolher = (nome) => {
        setEscolhido(nome);
        console.log('Post escolhido foi', nome)
    }

    return (
        <div class="feed">
            <div class="cima-feed">
                <div class="cima-feed-esquerdo">
                    <img src={props.fotoPequena} />
                    <p>{props.nomePerfil}</p>
                </div>
                <div class="pontinhos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <img class="fotinha" src={props.fotoPrincipal} />
            <div class="baixo-feed">
                <div class="icones-baixo">
                    <div class="icones-baixo-esquerdo">
                        <div onClick={curtir} class={coracao}><ion-icon name="heart-outline"></ion-icon></div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>

                    <div onClick={() => escolher(props.nomePerfil)}>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="texto-baixo">
                    <img src={props.fotoQuemCurtiu} />
                    &nbsp; Curtido por <span>&nbsp;{props.quemCurtiu}</span>&nbsp;e outras&nbsp;<span>{props.quantasCurtidas}</span>&nbsp;pessoas
                </div>
            </div>
        </div>
    )
}