import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const store = configureStore()
store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
       <Provider store={store}>
         <App />
       </Provider>
    </BrowserRouter>
  )

// ReactDOM.render(
//    <BrowserRouter> <Provider store={store}><App /></Provider></BrowserRouter>,
//   document.getElementById('root')
// );
