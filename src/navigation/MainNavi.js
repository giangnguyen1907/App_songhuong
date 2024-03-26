import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { Text,View } from 'react-native';
import AllStackNavi from './AllStackNavi';
const MainNavi = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShow:false
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: 'Home',
              headerShown:false
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: 'Updates',
              headerShow:false
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Video}
            options={{
              tabBarLabel: 'Profile',
              
            }}
          />
        </Tab.Navigator>
      );
}
export default MainNavi