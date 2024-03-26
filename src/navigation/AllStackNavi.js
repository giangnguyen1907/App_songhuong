import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Contacts } from "../screens";
import Home from "../screens/Home";
const Stack = createStackNavigator();
const AllStackNavi = ({navigation,route}) => {
    const {initialRouteName} = route.params
    return (
        <Stack.Navigator
            screenOptions = {{headerShow:false}}
            initialRouteName = {initialRouteName}
        >
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}
export default AllStackNavi