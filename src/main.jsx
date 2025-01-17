import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<App></App>
</PersistGate>
</Provider>
  

)
