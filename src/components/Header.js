import React from 'react'

function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" />
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li className="prsdfasdfsdfice">
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span>1250 руб.</span>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" />

                </li>
            </ul>
        </header>
    )
}

export default Header
