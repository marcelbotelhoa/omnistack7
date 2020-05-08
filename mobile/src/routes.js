import { createAppContainer, createStackNavigator } from 'react-navigation';

import Feed from './pages/Feed/Feed.js';
import New from './pages/New/New.js';

export default createAppContainer(
   createStackNavigator({
      Feed,
      New,
   })   
);