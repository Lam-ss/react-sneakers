import React from 'react'
import Card from '../components/Card'

function Favorites({ items, onAddToFavorites }) {
    return (
        <div className="content">
            <div className="content-item">
                <h1>Мои закладки</h1>
            </div>

            <div className="sneakers">

                {items.map((item, index) => (<Card
                    title={item.title}
                    price={item.price}
                    idCard={item.idCard}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    favorited={true}
                    onAddToFavorites={onAddToFavorites}
                    key={`${index}${item.imageUrl}`}
                />
                ))}
            </div>
        </div>
    )
}

export default Favorites
