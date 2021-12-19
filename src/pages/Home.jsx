import React from 'react'
import Card from "../components/Card/index";
import CardLoading from "../components/Card/cardLoading";

function Home({ 
    searchValue,
    setSearchValue,
    items,
    onAddToCard,
    onAddToFavorites,
    onChangeSearchInput,
    cartItems,
    loading
}) {
    return (
        <div className="content">
            <div className="content-item">
                <h1>{searchValue ? `Поиск по: "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="search-blok">
                    <img src="/img/search.svg" alt="Search" />
                    {searchValue && <img onClick={() => setSearchValue('')} width={20} height={20} className="search-clear" src="/img/btn-remove.svg" alt="Clear" />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ... " />
                </div>
            </div>

            <div className="sneakers">
                {loading
                    ? [...Array(12)].map(i => <CardLoading />)
                    : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (<Card
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    idCard={item.idCard}
                    imageUrl={item.imageUrl}
                    onAddToCard={onAddToCard}
                    onAddToFavorites={onAddToFavorites}
                    key={`${index}${item.imageUrl}`}
                    cartItems
                    loading={loading}
                    added={cartItems.some(obj => obj.idCard === item.idCard)}
                />
                ))}
            </div>
        </div>
    )
}

export default Home
