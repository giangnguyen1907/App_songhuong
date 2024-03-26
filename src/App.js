import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {   Login } from './screens';
import 'react-native-gesture-handler';
import MainNavi from './navigation/MainNavi';
import Contacts from './screens/Contacts.js';
import Home from './screens/Home.js';
import Category from './screens/Category.js';
import Detail from './screens/Detail.js';
import Search from './screens/Search.js';
import Signup from './screens/Signup.js'
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='MainNavi' component={MainNavi}/>
      </Stack.Navigator>
    </View>
  );
};
const App = () => {
    return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name='Signup' component={Signup} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
    <Stack.Screen name='Main' component={MainStack}/>
    <Stack.Screen name="Category" component={Category}/>
    <Stack.Screen name="Contacts" component={Contacts}/>
    
    </Stack.Navigator>
  </NavigationContainer>
    );
}
export default App; 