import React from 'react'
import Header from './components/header';
import Historique from './components/historique';
import { Provider } from 'react-redux';
import store from './redux/store';


const App: React.FC = () => {
    return (
      <div>
          <Provider store={store}>
            <Header/>
            <Historique/>
          </Provider>,
      </div>
      );
  };

export default App