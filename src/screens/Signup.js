import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";
import { image } from "../../constants";
import { isValidEmail, isValidPassword } from "../../utilies/Validation";
import { Login } from ".";
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from "react-native-gesture-handler";
const Signup = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const [erroMail, setErroMail] = useState('')
    const [erroPass, setErroPass] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlLogin = () => {
        navigation.navigate('Login')
    }
    const [iconName1, setIconName1] = useState('eye-outline');
    const newName = iconName1 === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
    const hideOrShowPass = () => {
        setIconName1(newName)
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#ffffff', paddingTop: 30 }} behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image source={(image.logo)} style={{ height: 100, width: 350 }} />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 20 }}>

                    <Text style={styles.textHead}>Email</Text>
                    <TextInput style={styles.textInput} placeholder="Nhập Email"
                        onChangeText={(text) => {
                            setErroMail(isValidEmail(text) == true ? '' : 'tên tài khoản sai')
                            setEmail(text)
                        }}
                    />

                    <Text style={styles.textHead}>Tên tài khoản</Text>
                    <TextInput style={styles.textInput} placeholder="Nhập tên tài khoản"
                        onChangeText={(text) => {
                            setErroMail(isValidEmail(text) == true ? '' : 'tên tài khoản sai')
                            setEmail(text)
                        }}
                    />

                    <Text style={styles.textHead}>Mật khẩu</Text>
                    <View style={styles.textInput}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
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
                    </View>

                    <Text style={styles.textHead}>Xác nhận mật khẩu</Text>
                    <View style={styles.textInput}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TextInput style={{
                                width: screenWidth * 80 / 100,

                            }} placeholder="Xác nhận mật khẩu"
                                onChangeText={(text) => {
                                    setErroPass(isValidPassword(text) == true ? '' : 'Mật khẩu cần dài hơn 3 ký tự')
                                    setPassword(text)
                                }}
                            />
                            <TouchableOpacity onPress={hideOrShowPass}>
                                <Icon name={iconName1} size={30} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 30 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginTop: 10 }}></View>
                    </View>
                    <TouchableOpacity
                        onPress={() => handlLogin()}
                        style={{
                            height: 60,
                            borderWidth: 0,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#5046CE",
                        }}>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: 'bold' }}>Đăng Kí Ngay</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    textInput: {
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#5046CE',
        borderWidth: 1,
        paddingLeft: 10
    },
    textHead: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222222'
    }
})
export default Signup