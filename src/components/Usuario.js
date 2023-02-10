
export default function Usuario () {

    let nomeDoUsuario = ""//prompt('Qual o seu nome?');
    let fotoDePerfil = "./img/user.png";

    let novaFoto = ""//prompt('Insira sua foto de perfil');
    

    let frase = !nomeDoUsuario ? "Usuário não identificado" : `Seja bem vindo(a), ${nomeDoUsuario}`;
    

    return (
        <div class="box">
            <div class="foto-perfil">
                <img src={!novaFoto ? "./img/user.png" : novaFoto} />
            </div>
                <div class="descricao-perfil">
                    <p class="titulo">{frase}</p>
                </div>
            <ion-icon name="pencil-outline"></ion-icon>
        </div>
    )
}