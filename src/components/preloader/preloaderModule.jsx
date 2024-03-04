
import './preloader-style.scss';


const Preloader =  () => {
    return(
       <div className="preloader">
            <div className='preloader__container'>
                 <h1 className='loader-text'>Loading...</h1>
            </div>
       </div>
    )
};

export default Preloader;