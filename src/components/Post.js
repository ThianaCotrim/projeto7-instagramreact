import { useState } from "react"
import posts from "./arrayDePosts"
import RenderizarPost from "./RenderizarPost"


const Post = () => {

   

    return (
        posts.map((p) => (
            
            <div>
                < RenderizarPost fotoPequena={p.fotoPequena} nomePerfil={p.nomePerfil} fotoPrincipal={p.fotoPrincipal} fotoQuemCurtiu={p.fotoQuemCurtiu} quemCurtiu={p.quemCurtiu} quantasCurtidas={p.quantasCurtidas}/>
            </div>
       
        ))
    )
}
export default Post





 {/* <div onClick={trocarCor} class={cor}> */}
{/* </div> */}

// const [cor, setCor] = useState('branco')



// const trocarCor = () => {
   
//     if (cor === 'branco'){
//         setCor('preto')
//     } else {
//         setCor('branco')
//     }
// }

 
