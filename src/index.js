import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
//  import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense,lazy } from 'react';
import Preloader from './components/preloader/preloaderModule';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Preloader />}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
      </React.StrictMode>
  </Suspense>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
