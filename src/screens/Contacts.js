import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert,
    FlatList,
    StyleSheet,
    Image
} from "react-native";
import { image } from "../../constants";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const person = [
    {
        id: 1,
        name: 'Wilmer Hugh',
        company: 'Printing Dimensions',
        url: image.avatar
    },
    {
        id: 2,
        name: 'Viveka Zelma',
        company: 'TreeHive Company',
        url: image.avatar
    },
    {
        id: 3,
        name: 'Tresa Mathey',
        company: 'Blue Inc',
        url: image.avatar
    },
    {
        id: 4,
        name: 'Sylvain Dutoit',
        company: 'Amazing Company',
        url: image.avatar
    },
    {
        id: 5,
        name: 'Wilmer Hugh',
        company: 'Printing Dimensions',
        url: require('../../assets/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg')
    }
];
const renderItem = ({ item }) => (
    <View style={{
        flexDirection: "row",
        marginTop: 20,
        borderBottomColor: "#828282",
        borderBottomWidth: 1,
        marginHorizontal: 10
    }}>
        <View >
            <Image style={styles.image}
                source={item.url}
            />
        </View>
        <View>
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text2}>{item.company}</Text>
        </View>
    </View>
);
const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        marginRight: 15,
        borderRadius: 50
    },
    text1: {
        fontSize: 15,
        marginBottom: 10
    },
    text2: {
        fontSize: 13,
    }
});
const Contacts = (props) => {
    const Tab = createBottomTabNavigator();
    return <View style={{ flex: 1 }}>
        <View>
            <FlatList
                data={person}
                renderItem={renderItem}
                keyExtractor={person => person.id}
            />
        </View>
        <View>
            <Tab.Navigator>

            </Tab.Navigator>
        </View>
    </View>
}
export default Contacts