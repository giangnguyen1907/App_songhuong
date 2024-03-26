import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import { image } from "../../constants";
import { isValidEmail, isValidPassword } from "../../utilies/Validation";
import Icon from 'react-native-vector-icons/Ionicons'
function Login({ navigation, props }) {
    const [erroMail, setErroMail] = useState('')
    const [erroPass, setErroPass] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlLogin = () => {
        navigation.navigate('Home')
    }
    const handlSignup = () => {
        navigation.navigate('Signup')
    }
    const [iconName1, setIconName1] = useState('eye-outline');
    const newName = iconName1 === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
    const hideOrShowPass = () => {
        setIconName1(newName)
    }
    const screenWidth = Dimensions.get('window').width;
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#ffffff', paddingTop: 30 }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={(image.logo)} style={{ height: 100, width: 350 }} />
            </View>
            <View style={{ paddingHorizontal: 15, marginTop: 50 }}>

                <Text style={{
                    marginTop: 30,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#222222'
                }}>Tên tài khoản</Text>
                <TextInput style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1
                }} placeholder="Nhập tên tài khoản"
                    onChangeText={(text) => {
                        setErroMail(isValidEmail(text) == true ? '' : 'tên tài khoản sai')
                        setEmail(text)
                    }}
                />

                <Text style={{
                    marginTop: 30,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#222222'
                }}>Mật khẩu</Text>
                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,                   
                    alignItems:'center'
                }}>
                    <TextInput style={{
                        width: screenWidth * 80 / 100,

                    }} placeholder="Nhập mật khẩu"
                        onChangeText={(text) => {
                            setErroPass(isValidPassword(text) == true ? '' : 'Mật khẩu cần dài hơn 3 ký tự')
                            setPassword(text)
                        }}
                    />
                    <TouchableOpacity onPress={hideOrShowPass}>
                       <Icon name={iconName1} size={30} /> 
                    </TouchableOpacity>
                    
                </View>

                <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                    <TouchableOpacity >
                        <Text style={{ color: 'blue' }}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => handlLogin()}
                    style={{
                        height: 50,
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#5046CE",
                        marginTop: 30,
                    }}>
                    <Text style={{ fontSize: 18, color: "white", fontWeight: 'bold' }}>Đăng Nhập</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 50, marginBottom: 50 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginTop: 10 }}></View>
                    <Text style={{ marginHorizontal: 10, color: '#222222' }}>Hoặc</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginTop: 10 }}></View>
                </View>
                <TouchableOpacity
                    onPress={() => handlSignup()}
                    style={{
                        height: 40,
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text style={{ fontSize: 18, color: "#5046CE", fontWeight: 'bold' }}>Đăng Kí Ngay</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}
export default Login