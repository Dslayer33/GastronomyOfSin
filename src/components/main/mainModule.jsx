import {Link} from 'react-router-dom';
import './main-style.scss';



function Main() {
    const pizzaImg = require("./img/pizza-386717_1280.jpg");
    const sushiImg = require("./img/sushi-balls-5878892_1280.jpg");
    const burgerImg = require("./img/burger-1835192_1280.jpg");
    const potatoImg = require("./img/bowl-1842294_1280.jpg");
    const drinkImg = require("./img/drink-462776_1280.jpg");
    const icecreamImg = require("./img/ice-564944_1280.jpg");
    


   return(
       <div className="main-container">
            <div className='main-container__block'>
                  <div className='block-content'>
                      <div className='content-area'>
                         <img className='area-img' src={pizzaImg} alt="pizza-img" />
                         <Link to='/pizza'>
                             <button className='area-btn'>
                                 Order Pizza
                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#091625" viewBox="0 0 256 256"><path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z"></path></svg>
                             </button>
                         </Link>
                      </div>
                  </div>
            </div>

            <div className='main-container__block'>
                 <div className='block-content'>
                      <div className='content-area'>
                         <img className='area-img' src={sushiImg} alt="sushi-img" />
                         <Link to='/sushi'>
                            <button className='area-btn'>
                                 Order Sushi
                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#091625" viewBox="0 0 256 256"><path d="M168.06,75.94a12,12,0,1,1-12-12A12,12,0,0,1,168.06,75.94Zm39.87,81c-20.76,26.37-53.85,40.74-98.41,42.77l-22,51.42A8,8,0,0,1,80.13,256l-.51,0a8,8,0,0,1-7.19-5.78L57.62,198.37,5.8,183.53a8,8,0,0,1-1-15.05l51.43-22c2-44.57,16.41-77.66,42.79-98.41,43.21-34,104.91-22.83,116.84-20.25a16,16,0,0,1,12.26,12.26C230.76,52,241.94,113.76,207.93,157ZM161.6,172.61a52.12,52.12,0,0,1-33.42-44.79A52.1,52.1,0,0,1,83.4,94.41c-7,15.86-10.76,35.11-11.3,57.62a8,8,0,0,1-4.85,7.16L31.84,174.34l34.46,9.87a8,8,0,0,1,5.49,5.49l9.84,34.46,15.18-35.41A8,8,0,0,1,104,183.9C126.48,183.37,145.73,179.59,161.6,172.61ZM212.53,43.47c-10.7-2.32-66-12.39-103.57,17.18A80.9,80.9,0,0,0,96.13,73.32a36,36,0,0,0,39.36,38.47,8,8,0,0,1,8.72,8.72,36,36,0,0,0,38.49,39.36,80.64,80.64,0,0,0,12.65-12.81C224.92,109.49,214.85,54.18,212.53,43.47Z"></path></svg>
                            </button>
                         </Link>
                      </div>
                 </div>
            </div>

            <div className='main-container__block'>
                 <div className='block-content'>
                      <div className='content-area'>
                         <img className='area-img' src={burgerImg} alt="burger-img" />
                         <button className='area-btn'>
                              Order Burger
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#091625" viewBox="0 0 256 256"><path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"></path></svg>
                         </button>
                      </div>
                 </div>
            </div>

            <div className='main-container__block'>
                  <div className='block-content'>
                      <div className='content-area'>
                         <img className='area-img' src={potatoImg} alt="potato-img" />
                         <button className='area-btn'>Order Fried Potato</button>
                      </div>
                  </div>
            </div>

            <div className='main-container__block'>
                 <div className='block-content'>
                      <div className='content-area'>
                         <img className='area-img' src={drinkImg} alt="drink-img" />
                         <button className='area-btn'>
                              Order Drink
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#091625" viewBox="0 0 256 256"><path d="M245.66,42.34l-32-32a8,8,0,0,0-11.32,11.32l1.48,1.47L148.65,64.51l-38.22,7.65a8.05,8.05,0,0,0-4.09,2.18L23,157.66a24,24,0,0,0,0,33.94L64.4,233a24,24,0,0,0,33.94,0l83.32-83.31a8,8,0,0,0,2.18-4.09l7.65-38.22,41.38-55.17,1.47,1.48a8,8,0,0,0,11.32-11.32ZM96,107.31,148.69,160,104,204.69,51.31,152ZM81.37,224a7.94,7.94,0,0,1-5.65-2.34L34.34,180.28a8,8,0,0,1,0-11.31L40,163.31,92.69,216,87,221.66A8,8,0,0,1,81.37,224ZM177.6,99.2a7.92,7.92,0,0,0-1.44,3.23l-7.53,37.63L160,148.69,107.31,96l8.63-8.63,37.63-7.53a7.92,7.92,0,0,0,3.23-1.44l58.45-43.84,6.19,6.19Z"></path></svg>
                         </button>
                      </div>
                 </div>
            </div>

            <div className='main-container__block'>
                 <div className='block-content'>
                      <div className='content-area'>
                         <img className='area-img' src={icecreamImg} alt="icecream-img" />
                         <button className='area-btn'>
                              Order IceCream
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#091625" viewBox="0 0 256 256"><path d="M208,89.37V88A80,80,0,0,0,48,88v1.37A24,24,0,0,0,56,136h3.36l61.69,108a8,8,0,0,0,13.9,0l61.69-108H200a24,24,0,0,0,8-46.63ZM128,223.88,77.79,136H97.07l40.57,71ZM134.79,136l21.71,38-9.64,16.88L115.5,136Zm30.92,21.88L153.21,136h25ZM200,120H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V88a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z"></path></svg>
                         </button>
                      </div>
                 </div>
            </div>
       </div>
   )
};

export default Main;