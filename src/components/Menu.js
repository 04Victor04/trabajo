import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BootstrapHeader from './BootstrapHeader';
import { MenuItems } from '../data/MenuItems';


  

export default function Menu() {
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
  export default Menu;