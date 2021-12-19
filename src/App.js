import React from "react";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route } from "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";




function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isloading, setloading] = React.useState(true)

  // fetch('https://61b65020c95dd70017d40f00.mockapi.io/items')
  // .then(response => response.json())
  // .then(json => setItems(json));


  const onClickCart = () => {
    setCartOpened(true)
  }

  const onCloseCart = () => {
    setCartOpened(false)
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  React.useEffect(() => {
    async function fetchData() {
      setloading(true)
      console.log('загрузка старт')
      const cartResponse = await axios.get('https://61b65020c95dd70017d40f00.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://61b65020c95dd70017d40f00.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://61b65020c95dd70017d40f00.mockapi.io/items')

      setloading(false)
      console.log('загрузка стоп')

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    
    fetchData()
  }, [])

  const onAddToCard = async (item) => {
    try {
      if (cartItems.find(favObj => favObj.idCard === item.idCard)) {
        const idDel = cartItems.filter(favObj => favObj.idCard === item.idCard)[0].id
        axios.delete(`https://61b65020c95dd70017d40f00.mockapi.io/cart/${idDel}`)
        setCartItems(prev => prev.filter(preObj => Number(preObj.id) !== Number(idDel)))
      } else {
        const dataCard = await axios.post('https://61b65020c95dd70017d40f00.mockapi.io/cart', item)
        setCartItems(prev => [...prev, dataCard.data])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
    }
  }

  const onAddToFavorites = async (item) => {
    try {
      if (favorites.find(favObj => favObj.idCard === item.idCard)) {
        axios.delete(`https://61b65020c95dd70017d40f00.mockapi.io/favorites/${item.id}`)
        // setFavorites(prev => prev.filter(preObj => preObj.id !== item.id))
      } else {
        const { data } = await axios.post('https://61b65020c95dd70017d40f00.mockapi.io/favorites', item)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }

  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61b65020c95dd70017d40f00.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }


  return (
    <div className="wrapper">
      {cartOpened && <Drawer onCloseCart={onCloseCart} onRemoveItem={onRemoveItem} cartItems={cartItems} />}
      <Header onClickCart={onClickCart} />
      <Route path="/" exact>
        <Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          items={items}
          cartItems={cartItems}
          onAddToCard={onAddToCard}
          onAddToFavorites={onAddToFavorites}
          onChangeSearchInput={onChangeSearchInput}
          loading={isloading}
        />
      </Route>
      <Route path="/favorites">
        <Favorites items={favorites} onAddToFavorites={onAddToFavorites} />
      </Route>
    </div>
  );
}

export default App;
