import './article.scss'

const Article = ({
  image,
  supplier,
  netContent,
  title,
  priceReal,
  unitsSf,
  sellos,
  onAddToCart,
}) => {
  //const [showModal, setShowModal] = useState(false)

  // const openModal =() => {
  //   setShowModal(prev => !prev)
  // }
  return (
    <div className="article">
      <div className="article__photo">
        <img src={image} alt="Article" />
        <div className="article__sellos">
          {sellos.map((sello, i) => (
            <img key={i} src={sello.image} alt={sello.name} />
          ))}
        </div>
      </div>

      <div className="artcle__info">
        <div className="artcle__info__supplier">
          <div className="artcle__info__supplier__brand">{supplier}</div>
          <div className="artcle__info__supplier__weight">{netContent}</div>
        </div>
        <div className="artcle__info__name">{title}</div>
        <div className="artcle__info__price">
          <span className="artcle__info__price--green">$</span>
          <span className="artcle__info__price--black">{priceReal}</span>
          <span className="artcle__info__price--little">x{unitsSf} unids</span>
        </div>
      </div>

      <button className="article__add-article" onClick={onAddToCart}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default Article
