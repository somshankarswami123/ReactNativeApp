import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from "../components/Login/Login";
import ListView from "../components/List-View/listview";


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: Login,
  Register: Login,
  Home: MainTabNavigator,
  ListView: ListView
}));
