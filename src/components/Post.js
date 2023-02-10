export default function Post () {


    const posts = [

        { fotoPequena:"./img/meowed 2.png", nomePerfil:"meowed", fotoPrincipal:"./img/ae.jpg", fotoQuemCurtiu:"./img/respondeai 2.png", quemCurtiu:"respondeai", quantasCurtidas:"101.523"},
        { fotoPequena:"./img/barked 1 (2).png", nomePerfil:"barked", fotoPrincipal:"./img/imagem.jpg", fotoQuemCurtiu:"./img/foto4.png", quemCurtiu:"adorable_animals", quantasCurtidas:"548.001 "},
        { fotoPequena:"./img/nathanwpylestrangeplanet 1 (2).png", nomePerfil:"nathan", fotoPrincipal:"./img/rio.jpg", fotoQuemCurtiu:"./img/foto5.png", quemCurtiu:"razosparacreditar", quantasCurtidas:"12.702"}
    ]

    return (
        posts.map((p) => (

            <div class="feed">
            <div class="cima-feed">
                <div class="cima-feed-esquerdo">
                    <img src={p.fotoPequena} />
                    <p>{p.nomePerfil}</p>
                </div>
                <div class="pontinhos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <img class="fotinha" src={p.fotoPrincipal}/>
            <div class="baixo-feed">
                <div class="icones-baixo">
                    <div class="icones-baixo-esquerdo">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="texto-baixo">
                    <img src={p.fotoQuemCurtiu} />
                    &nbsp; Curtido por {p.quemCurtiu} e outras {p.quantasCurtidas} pessoas
                </div>
            </div>
        </div>
        ))
    )
}


function Feed () {
    return 
}
