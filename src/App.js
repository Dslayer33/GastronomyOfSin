import Header from './components/header/headerModule';
import Main from './components/main/mainModule';
import Footer from './components/footer/footerModule';
import PizzaRoute from './routes/pizza_route/pizzaRouteModule';
import SushiRoute from './routes/sushi_route/sushiRouteModule';
import {Routes,Route} from 'react-router-dom';
import './scss/mainpage.scss';

function App() {

  const homePage = [<Header/>,<Main/>,<Footer/>];

  return (
    <div className="App">
       <Routes>
            <Route  path='/' element={homePage}/>
            <Route  path='pizza' element={<PizzaRoute />} />
            <Route  path='sushi' element={<SushiRoute />} />
       </Routes>
    </div>
  );
}

export default App;
