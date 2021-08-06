import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import './App.scss'
import Header from './components/Header'
import Slider from './components/Slider'
import Article from './components/Article'
import ShoppingCartModal from './features/shoppingCart/Modal'
import * as api from './api'
import { actions as shoppingCartActions } from './features/shoppingCart/slice'

function App() {
  const dispatch = useDispatch()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    api.getArticles().then((res) => {
      setArticles(res)
    })
    //TODO: handle the error
  }, [])

  return (
    <div className="App">
      <Header
        onOpenCart={() => {
          dispatch(shoppingCartActions.open())
        }}
      />
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
              onAddToCart={() => {
                dispatch(shoppingCartActions.add({ article }))
              }}
            />
          ))}
        </Slider>
        <ShoppingCartModal />
      </div>
    </div>
  )
}

export default App
