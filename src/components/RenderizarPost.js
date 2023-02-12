import { useState } from "react";
export default function RenderizarPost(props) {


    const [likes, setLikes] = useState (Number((props.quantasCurtidas)))
    
    const [heart, setHeart] = useState('heart-outline')
    const curtir = () => {
        
        if (heart === 'heart-outline'){
            setHeart('heart')
            setLikes(likes+1)
        } else {
            setHeart('heart-outline')
            setLikes(likes-1)
        }
    }
    
   const curtirNaFoto = () => {
    if (heart === 'heart-outline'){
        setHeart('heart')
        setLikes(likes+1)
        console.log('entrou no if')
    } else {
    }

   }

    const [bookmark, setBookmark] = useState('bookmark-outline')
    const trocarCor = () => {
   
    if (bookmark === 'bookmark-outline'){
        setBookmark('bookmark')
    } else {
        setBookmark('bookmark-outline')
    }
}

    return (
        <div data-test="post" class="feed">
            <div class="cima-feed">
                <div class="cima-feed-esquerdo">
                    <img src={props.fotoPequena} />
                    <p>{props.nomePerfil}</p>
                </div>
                <div class="pontinhos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <img data-test="post-image" onClick={curtirNaFoto} class="fotinha" src={props.fotoPrincipal} />
            <div class="baixo-feed">
                <div class="icones-baixo">
                    <div class="icones-baixo-esquerdo">
                        <div data-test="like-post" onClick={curtir}><ion-icon name={heart}
                        style= {heart ? {color:'red'} : {color:'red'}}></ion-icon></div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>

                    <div >
                        <ion-icon data-test="save-post" onClick={trocarCor} name={bookmark}></ion-icon>
                    </div>
                </div>
                <div class="texto-baixo">
                    <img src={props.fotoQuemCurtiu} />
                    &nbsp; Curtido por <span>&nbsp;{props.quemCurtiu}</span>&nbsp;e  outras&nbsp;<span data-test="likes-number">{likes }</span>&nbsp;pessoas
                </div>
            </div>
        </div>
    )
}