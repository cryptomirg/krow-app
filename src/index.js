//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//redux store
import { store } from './_helpers/store';

//components
import App from './App';

//css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/sass/style.scss';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);
