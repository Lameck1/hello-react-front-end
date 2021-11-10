import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Home from './components/Home';
import Greeting from './components/Greeting';
import Header from './components/Header';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: 'greeting',
    name: 'Greeting',
    component: <Greeting />,
  },
];

const App = () => (
  <Provider store={store}>
    <Router>
      <Header routes={routes} />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Routes>
    </Router>
  </Provider>
);

export default App;
