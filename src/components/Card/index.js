import React, { useEffect } from 'react'
// import s from "./Card.module.scss"

function Card({ title, price, imageUrl }) {
    const [isAdded, setisAdded] = React.useState(false)

    const onClickPlus = () => {
        setisAdded(!isAdded)
    }
    
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
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
    )
}

export default Card
