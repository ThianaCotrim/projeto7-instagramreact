export default function Sugestao(){


    const sugestoes = [

        { imagem:"./img/foto1.png", textoUm:"bad.vibes.memes", textoDois:"Segue você" },
        { imagem:"./img/foto5.png", textoUm:"razosparacreditar", textoDois:"Novo no Instagram" },
        { imagem:"./img/foto4.png", textoUm:"adorable_animals", textoDois:"Segue você" }, 
        { imagem:"./img/chibirdart 1.png", textoUm:"smalls_custecats", textoDois:"Segue você" }, 
        { imagem:"./img/animais.png", textoUm: "chisb.iradaderest.",textoDois:"Segue você" },
    ]



    return (
            sugestoes.map((s) => (
                <div class="seguidos">
                <div class="seguidor-individual">
                  
                    <img src={s.imagem} />
                    <div class="meio">
                        <p class="tituloUm"> {s.textoUm} </p>
                        <p class="tituloDois">{s.textoDois} </p>
                    </div>
                    <div class="seguir">
                        <p> Seguir</p>
                    </div>
                </div>
        </div>

            ))
       
    )
} 

