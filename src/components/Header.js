import React from 'react'
import { Link } from "react-router-dom"

function Header({ onClickCart }) {
    return (

        <header>
            <Link to="/">
                <div className="headerLeft">
                    <img width={40} height={40} src="/img/logo.png" />
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="headerRight">
                <li onClick={onClickCart}>
                    <img width={18} height={18} src="/img/cart.svg" alt='Корзина' />
                    <span>1250 руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={20} height={20} src="/img/zmdi-favorite.svg" alt='Избранное' />
                    </Link>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt='Профиль' />
                </li>
            </ul>
        </header>
    )
}

export default Header
