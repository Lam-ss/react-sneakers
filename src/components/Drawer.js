import React from 'react'

function Drawer({ onCloseCart, cartItems = [], onRemoveItem }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img onClick={onCloseCart} width={40} height={40} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" /></h2>

                {
                    cartItems.length > 0 ?
                        <div>
                            <div className="items">
                                {cartItems.map((obj) => (
                                    <div className="cartItem">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                        <div className="cartItemText">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img onClick={() => onRemoveItem(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%</span>
                                        <div></div>
                                        <b>1074 руб. </b>
                                    </li>
                                </ul>
                                <button className="greenButton">Оформить заказ
                                    <img src="/img/arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        :
                        <div class="cartEmpty">
                            <img className='box' src="/img/empty-cart.jpg" alt="Empty" />
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onCloseCart} className="greenButton">
                                <img src="/img/arrow.svg" alt="Arrow" />
                                Вернуться назад
                            </button>
                        </div>

                }






            </div>
        </div>


    )
}

export default Drawer
