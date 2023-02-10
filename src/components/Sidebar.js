import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar() {
    return (
        <div class="sidebar">
            < Usuario />
            < Sugestoes />
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