import { useEffect, useState } from 'react'

import './App.scss'
import Header from './components/Header'
import Slider from './components/Slider'
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
      <div className="container">
        <Slider>
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
        </Slider>
      </div>
    </div>
  )
}

export default App
