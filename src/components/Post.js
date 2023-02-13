
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





 
