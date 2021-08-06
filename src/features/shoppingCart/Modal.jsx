import React from 'react'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { actions as shoppingCartActions } from './slice'
import './modal.scss'

const Modal = () => {
  const dispatch = useDispatch()

  const isOpen = useSelector((state) => state.shoppingCart.isOpen)
  const numItems = useSelector(
    (state) => Object.keys(state.shoppingCart.articles).length
  )
  const articles = useSelector((state) =>
    Object.values(state.shoppingCart.articles)
  )

  const close = () => {
    dispatch(shoppingCartActions.close())
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={close}>
      <div className="modal__close-button">
        <button id="modal__close-button" onClick={close}>
          &#60;
        </button>
        <label for="modal__close-button">Volver a la tienda</label>
      </div>
      <h1>Carrito de compras</h1>
      <div className="modal__num-items">
        <span>{numItems}</span>
        items
      </div>
      <div className="articles">
        <div>Item</div>
        <div className="articles--center">Cantidad</div>
        <div className="articles--center">Precio</div>
        {/* Remove space */}
        <div></div>
        {articles.map(({ data, amount, price }) => (
          <React.Fragment key={data.id}>
            <div className="articles__item__data">{data.title}</div>
            <div className="articles__item__amount articles--center">
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
            <div className="articles__item__price articles--center">
              {price}
            </div>
            <button
              className="articles__item__remove"
              onClick={() => {
                dispatch(shoppingCartActions.remove({ article: data }))
              }}
            >
              remove
            </button>
          </React.Fragment>
        ))}
      </div>
    </Dialog>
  )
}

export default Modal
