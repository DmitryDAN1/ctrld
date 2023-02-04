import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {MenuButton} from "./components/menu/menu_button/MenuButton";
import {Slogan} from "./components/slogan/Slogan";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0)
  }, [])

  window.addEventListener('resize', () => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0)
  })

  return (
    <div className="App">
      <MenuButton />
      <Header
        onBrandLogoClick={() => {
          window.scrollTo(0, 0)
        }}
      />
      <Slogan
        headerHeight={headerHeight}
      />
    </div>
  );
}

export default App;
