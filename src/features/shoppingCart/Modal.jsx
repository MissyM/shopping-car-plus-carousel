import React from 'react'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { actions as shoppingCartActions } from './slice'

const Modal = () => {
  const dispatch = useDispatch()

  const isOpen = useSelector((state) => state.shoppingCart.isOpen)
  const numItems = useSelector(
    (state) => Object.keys(state.shoppingCart.articles).length
  )
  const articles = useSelector((state) =>
    Object.values(state.shoppingCart.articles)
  )

  const open = () => {
    dispatch(shoppingCartActions.open())
  }
  const close = () => {
    dispatch(shoppingCartActions.close())
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={close}>
      <button className="close-button" onClick={close}>
        <span aria-hidden>×</span>
      </button>
      <h1>Carrito de compras</h1>
      <div>
        <span>{numItems}</span>
        items
      </div>
      <div clasName="articles">
        <div clasName="articles__header">
          <div>Item</div>
          <div>Cantidad</div>
          <div>Precio</div>
        </div>
        {articles.map(({ data, amount, price }) => (
          <div clasName="articles__item">
            <div className="articles__item__data">{data.title}</div>
            <div className="articles__item__amount">
              <button
                disabled={amount === 1}
                onClick={() => {
                  dispatch(shoppingCartActions.decrement({ article: data }))
                }}
              >
                -
              </button>
              {amount}
              <button
                onClick={() => {
                  dispatch(shoppingCartActions.increment({ article: data }))
                }}
              >
                +
              </button>
            </div>
            <div className="articles__item__price">{price}</div>
            <button
              onClick={() => {
                dispatch(shoppingCartActions.remove({ article: data }))
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </Dialog>
  )
}

export default Modal
