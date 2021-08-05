import './article.scss'
import freeGluten from '../assets/images/gluten-free.png'
import freeAzucar from '../assets/images/sugar.png'
import organic from '../assets/images/plant-based.png'

const Article = ({ img, brand, weight, name, price, amount }) => {
  return (
    <div className="article">
      <div className="article__photo">
        <img src={img} alt="Article" />

        <div className="article__icons">
          <img src={freeGluten} alt="Article" />
          <img src={freeAzucar} alt="Article" />
          <img src={organic} alt="Article" />
        </div>
      </div>

      <div className="artcle__info">
        <div className="artcle__info__supplier">
          <div className="artcle__info__supplier__brand">{brand}</div>
          <div className="artcle__info__supplier__weight">{weight}</div>
        </div>
        <div className="artcle__info__name">{name}</div>
        <div className="artcle__info__price">
          <span className="artcle__info__price--green">$</span>
          <span className="artcle__info__price--black">{price}</span>
          <span className="artcle__info__price--little">x{amount} unids</span>
        </div>
      </div>

      <button className="article__add-article">Agregar al carrito</button>
    </div>
  )
}

export default Article
