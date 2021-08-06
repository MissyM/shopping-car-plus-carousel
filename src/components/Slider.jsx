import Carousel from 'react-multi-carousel' //External library
import 'react-multi-carousel/lib/styles.css'
import styles from './slider.module.scss'

const Slider = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <Carousel
      containerClass={styles.container}
      partialVisible
      responsive={responsive}
    >
      {children}
    </Carousel>
  )
}

export default Slider
