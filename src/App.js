
import Header from './components/header/headerModule';
import Main from './components/main/mainModule';
import Footer from './components/footer/footerModule';
import Preloader from './components/preloader/preloaderModule';
import PizzaRoute from './routes/pizza_route/pizzaRouteModule';
import SushiRoute  from './routes/sushi_route/sushiRouteModule';
import BurgerRoute from './routes/burger_route/burgerRouteModule';
import PotatoRoute  from './routes/potato_route/potatoRouteModule';
import DrinksRoute from './routes/drinks_route/drinksRouteModule';
import IceCreamRoute from './routes/icecream_route/icecreamRouteModule';
import {Routes,Route} from 'react-router-dom';
import React, { Suspense,lazy } from 'react';
import './scss/mainpage.scss';

function App() {

  const homePage = [<Header/>,<Main/>,<Footer/>];

  return (
    <div className="App">

       <Suspense fallback={<Preloader />}>
          <Routes>
              <Route id='home_id' index  path='/' element={homePage}/>
              <Route id='pizza_id'   path='pizza' element={<PizzaRoute />} />
              <Route id='sushi_id'  path='sushi' element={<SushiRoute />} />
              <Route id='burger_id'  path='burger' element={<BurgerRoute />} />
              <Route id='potato_id'  path='potato' element={<PotatoRoute />} />
              <Route id='drinks_id'  path='drinks' element={<DrinksRoute />} />
              <Route id='ice_id'  path='icecream' element={<IceCreamRoute />} />
          </Routes>
       </Suspense>
    </div>
  );
}

export default App;
