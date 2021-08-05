import Article from './Article'
import './carousel.scss'

const Carousel = () => {
  return (
    <div className="slider">
      <Article
        img="https://superfuds-file.s3.us-west-2.amazonaws.com/product/7707322030724_5e543cca2d301.png"
        brand="segalco"
        weight="50gr"
        name="Espaguetti con quinoa"
        price="1200"
        amount="1"
      />
    </div>
  )
}

export default Carousel
