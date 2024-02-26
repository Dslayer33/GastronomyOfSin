import {Link} from 'react-router-dom';
import './header-styles.scss';



function Header() {
    return(
        <div className='header-main-block'>
             <div className='header-main-block__left'>
                  <svg className='header-icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#091625" viewBox="0 0 256 256"><path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path></svg>
                  <h1 className='icon-title'>GastronomyOfSin</h1>
             </div>

             <nav className='header-main-block__nav'>
                 <a href className='header-nav-link'>Shop</a>
                 <a href className='header-nav-link'>Contact</a>
                 <a href className='header-nav-link'>Sign In</a>

                 <div className='shop-items'>
                     <svg className='nav-icon' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#091625" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path></svg>
                     <div className='items-calc'>
                         <div className='calc-cont'>
                              <div className='calc-content'>{0}</div>
                         </div>
                     </div>
                 </div>
             </nav>
        </div>
    )
};

export default Header;