import React from "react";
import Card from "./components/Card/index";
import Drawer from "./components/Drawer";
import Header from "./components/Header";




function App() {
  const arr = [1,2,3,4,5]

  return (
    <div className="wrapper">

      <Drawer />

      <Header />

      
      <div className="content">
        <div className="content-item">
          <h1>Все кроссовки</h1>
          <div className="search-blok">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ... " />
          </div>
        </div>

        <div className="sneakers">
        <Card 
          title={'Мужские Кроссовки Nike Blazer Mid Suede'} 
          price={'12 999 руб.'}
          imageUrl={'/img/heart-unliked.svg'}
        />
        <Card 
          title={'fgfМужские Кроссовки Nike Blazer Mid Suede'} 
          price={'12 999 руб.'}
          imageUrl={'/img/heart-unliked.svg'}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
