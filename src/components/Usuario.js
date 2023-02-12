import { useState } from "react";

const Usuario = () => {

    const [nomeDoUsuario, setnomeDoUsuario] = useState('')

    const [novaFoto, setnovaFoto] = useState('')


    let frase = !nomeDoUsuario ? "Usuário não identificado" : `Seja bem vindo(a), ${nomeDoUsuario}`;
    

    const inserirNome = () => {
        const novoNomeDoUsuario = prompt('Qual o seu nome?')
        setnomeDoUsuario(novoNomeDoUsuario)
        
    }

    const inserirFoto = () => {
        const fotoAtualizada = prompt('Insira sua foto de perfil')
        setnovaFoto(fotoAtualizada)
        
    }


    return (
        <div class="box">
            <div class="foto-perfil">
                <img data-test="profile-image" onClick={inserirFoto} src={!novaFoto ? "./img/user.png" : novaFoto} class="pencil-outline"/>
            </div>
                <div class="descricao-perfil">
                    <p data-test="name" class="titulo">{frase}</p>
                </div>
            <ion-icon data-test="edit-name" class="pencil-outline" onClick={inserirNome} name="pencil-outline"></ion-icon>
        </div>
    )
}
export default Usuario