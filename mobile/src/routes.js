import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigate } from '@react-navigation/stack';

import Feed from './pages/Feed';
import New from './pages/New';

const AppStack = createStackNavigate()

export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigation>
            <AppStack.Screen name={Feed} component={Feed}></AppStack.Screen>
            <AppStack.Screen name={New} component={New}></AppStack.Screen>
         </AppStack.Navigation>
      </NavigationContainer>
   )
}