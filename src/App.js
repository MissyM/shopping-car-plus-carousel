import { useEffect, useState } from 'react'

import './App.scss'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Article from './components/Article'
import * as api from './api'

function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    api.getArticles().then((res) => {
      setArticles(res)
    })
    //TODO: handle the error
  }, [])

  return (
    <div className="App">
      <Header />
      <Carousel>
        {articles.map((article) => (
          <Article
            key={article.id}
            image={article.image}
            supplier={article.supplier}
            netContent={article.net_content}
            title={article.title}
            priceReal={article.price_real}
            unitsSf={article.units_sf}
            sellos={article.sellos}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default App
