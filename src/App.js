import React from "react";
import Card from "./components/Card/index";
import Drawer from "./components/Drawer";
import Header from "./components/Header";




function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  fetch('https://61b65020c95dd70017d40f00.mockapi.io/items')
  .then(response => response.json())
  .then(json => setItems(json));


  const onClickCart = () => {
    setCartOpened(true)
  }

  const onCloseCart = () => {
    setCartOpened(false)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onCloseCart={onCloseCart} />}
      <Header onClickCart={onClickCart} />
      <div className="content">
        <div className="content-item">
          <h1>Все кроссовки</h1>
          <div className="search-blok">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ... " />
          </div>
        </div>

        <div className="sneakers">

        {items.map(item =>(<Card 
            title={item.title} 
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
