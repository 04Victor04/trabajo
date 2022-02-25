//componente APP para la api de youtube
import React from 'react';
import youtube from "./components/youtube";
import BarraBusqueda from "./components/BarraBusqueda";
import ListaVideos from "./components/ListaVideos";
import VideoInformacion from "./components/VideoInformacion";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BootstrapHeader from './components/BootstrapHeader';
import { MenuItems } from './data/MenuItems';


  

export default function App() {
    return (
      <Router>
        <BootstrapHeader />
        {MenuItems.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
      </Router>
    );
  }