const NavBar = () => {

    return (
       <div class="menu-superior">
           <div class="dentro-superior">
                <div class="logo">
                   <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador">
                </div>
                   <img src="./img/logo 1 (1).png" />
                </div>
                <div class="buscar">
                    <input type="text" placeholder="pesquisar"></input>
                </div>
                <div class="icones-superior">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
               </div>
           </div>
       </div>
    )
   }

export default NavBar