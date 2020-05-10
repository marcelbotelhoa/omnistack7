import 'react-native-gesture-handler';
import React from 'react';
import { Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';
import New from './pages/New';

import Logo from './assets/logo.png';
import camera from './assets/camera.png'

const AppStack = createStackNavigator()

export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigator>
            <AppStack.Screen name="Feed" component={Feed} options={styleFeed} />
            <AppStack.Screen name="New" component={New} options={styleNew}/>
         </AppStack.Navigator>
      </NavigationContainer>
   )
}

const styleFeed = {
   headerTitle: <Image source={Logo} />,
   headerRight: () => (
      <TouchableOpacity
         style={{ marginRight: 20 }}
         onPress={() => alert('Você clicou em um botão')}>
         <Image source={camera} />
      </TouchableOpacity>
   ),
   headerTintColor: '#000',
   headerTitleAlign: "center",
   headerBackTitle: null,
   mode: 'modal'
}

const styleNew = {
   title: <Image source={Logo} />,
   headerTintColor: '#000',
   headerTitleAlign: "center",
   headerBackTitle: null,
   mode: 'modal'
}