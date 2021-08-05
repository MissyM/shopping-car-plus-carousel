import './header.scss'
import superfuds from '../assets/images/superfuds.png'
import shoppingcar from '../assets/images/shopping-car.png'
import arrowdown from '../assets/images/arrow-down.png'
import man from '../assets/images/man.png'
import loupe from '../assets/images/loupe.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={superfuds} alt="superfuds icon" />
      </div>
      <div className="header__browser">
        <input placeholder="Busca marcas y productos..." type="text" />
        <img className="search-icon" src={loupe} alt="Search" />
      </div>
      <div className="header__shopping-car">
        <img src={shoppingcar} alt="Shopping Car" />
      </div>
      <div className="header__user">
        <div className="header__user--left">
          <label>Saiby Alimentos</label>
          <div className="header__user--left-down">
            <div>Mi perfil</div>
            <div>
              <img src={arrowdown} alt="Desplegar perfil" />
            </div>
          </div>
        </div>
        <img className="header__user--img" src={man} alt="UserPhoto" />
      </div>
    </div>
  )
}

export default Header
