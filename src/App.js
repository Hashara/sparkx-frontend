import "./App.css";
import {Provider} from 'react-redux';
import store from './redux/store'

import Layout from "./views/core/Layout";
import Home from "./views/home/pages/Home";

function App() {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>

    );
}

export default App;
