import React, { useEffect } from 'react'
// import s from "./Card.module.scss"
import CardLoading from "./cardLoading";

function Card({
    title,
    price,
    imageUrl,
    idCard,
    onAddToCard,
    onAddToFavorites,
    id,
    favorited = false,
    added = false,
}) {
    const [isAdded, setisAdded] = React.useState(added)
    const [isFavorite, setisFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        setisAdded(!isAdded)
        onAddToCard({ title, price, imageUrl, idCard, id })
        console.log('нажал', { title, price, imageUrl, idCard, id })
    }

    const onClickFavorite = () => {
        setisFavorite(!isFavorite)
        onAddToFavorites({ title, price, imageUrl, idCard, id })
    }

    // let loading = true

    return (
        <div>
            <div className="card">
                <div className="favorite">
                    <img onClick={onClickFavorite} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked" />
                </div>
                <img width={133} height={112} src={imageUrl} alt="Sneakers" />
                <h5>{title}</h5>
                <div className="cardBottom">
                    <div className="cardBottomPrice">
                        <span>Цена:</span>
                        <b>{price}</b>
                    </div>
                    <button className='button' onClick={onClickPlus} >
                        <img src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Card
