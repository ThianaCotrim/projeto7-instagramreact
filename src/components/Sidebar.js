import Usuario from "./Usuario"
import Sugestao from "./Sugestao"

const Sidebar = () => {
    return (
        <div class="sidebar">
            < Usuario />
            < Sugestao />
            <div class="letras-pequenas">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma </p>
            </div>
            <div class="letras-menores">
                <p>© 2021 INSTAGRAM DO FACEBOOK </p>
            </div>
        </div>
    )
}

export default Sidebar