import * as React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { image } from '../../constants';
import moment from 'moment';
import Video from 'react-native-video';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Detail = ({ navigation }) => {
    const [iconName1, setIconName1] = useState('heart-outline');
    const [iconColor1, setIconColor1] = useState('black');
    const [iconName3, setIconName3] = useState('bookmark-outline');
    const [iconColor3, setIconColor3] = useState('black');

    const [isMenuVisible1, setIsMenuVisible1] = useState(false);
    const [isMenuVisible2, setIsMenuVisible2] = useState(false);
    const handleIconPress1 = () => {
        const newColor = iconColor1 === 'black' ? 'red' : 'black';
        const newName = iconName1 === 'heart-outline' ? 'heart' : 'heart-outline';
        setIconColor1(newColor);
        setIconName1(newName)
    };
    const [iconName2, setIconName2] = useState('add-circle-outline');
    const handleIconPress2 = () => {
        const newName = iconName2 === 'add-circle-outline' ? 'chevron-down-circle' : 'add-circle-outline';
        setIconName2(newName)
    };

    const handleIconPress3 = () => {
        const newName = iconName3 === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline';
        const newColor = iconColor3 === 'black' ? 'blue' : 'black';
        setIconName3(newName);
        setIconColor3(newColor);
    };
    const toggleMenu1 = () => {
        setIsMenuVisible1(!isMenuVisible1);
    };
    const toggleMenu2 = () => {
        setIsMenuVisible2(!isMenuVisible2);
    };
    const closeMenu1 = () => {
        setIsMenuVisible1(false);
    };
    const closeMenu2 = () => {
        setIsMenuVisible2(false);
    };
    return (
        <View style={{ paddingHorizontal: 10, backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                        <Icon name='arrow-back-outline' size={30} color={'black'} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', paddingLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#222222', marginHorizontal: 10 }}>Phan Ngọc</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={handleIconPress2}>
                                <Icon name={iconName2} style={{ fontSize: 30, color: '#5046CE' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={(toggleMenu1)}>
                            <Icon name='text-outline' size={25} color='#222222' />
                        </TouchableOpacity>
                        <Modal visible={isMenuVisible1} animationType="fade" transparent={true}>
                            <TouchableWithoutFeedback onPress={closeMenu1}>
                                <View >
                                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, width: '80%', marginTop: '20%', marginBottom: '20%', marginLeft: '10%', marginRight: '10%', }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                                            <Text style={{ fontSize: 14 }}>Nhỏ</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                                            <Text style={{ fontSize: 18 }}>Bình thường</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                                            <Text style={{ fontSize: 22 }}>Lớn</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={toggleMenu1}>
                                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', }}>Close</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                        <TouchableOpacity onPress={toggleMenu2}>
                            <Icon name='ellipsis-horizontal-outline' size={35} color='#222222' />
                        </TouchableOpacity>
                        <Modal visible={isMenuVisible2} animationType="fade" transparent={true}>
                            <TouchableWithoutFeedback onPress={closeMenu2}>
                                <View >
                                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, width: '80%', marginTop: '20%', marginBottom: '20%', marginLeft: '10%', marginRight: '10%', }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                                            <Icon name='reader-outline' size={20} color='black' />
                                            <Text style={{ fontSize: 18 }}>Chi tiết tác giả</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                                            <Icon name='warning-outline' size={20} color='black' />
                                            <Text style={{ fontSize: 18 }}>Báo cáo nội dung xấu</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={toggleMenu2}>
                                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', }}>Close</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.tittle}>
                        Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc
                    </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Image source={image.bac_ho} style={styles.imageTittle} />
                    <Text style={styles.nameImage}>
                        Bác Hồ chia quà Tết cho các cháu nhỏ ở Hợp tác xã Khe Cát, huyện Yên Hưng, tỉnh Quảng Ninh ngày 2-2-1965. Ảnh Tư liệu.
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        23/02/2024
                    </Text>
                    <View>
                        <Text></Text>
                    </View>
                </View>

            </ScrollView>
            <View style={{ position: 'absolute', height: 100, width: screenWidth, marginTop: screenHeight * 88 / 100, backgroundColor: '#FFFFFF', paddingHorizontal: 10, borderTopWidth: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                    <TouchableOpacity onPress={handleIconPress1}>
                        <Icon name={iconName1} size={40} color={iconColor1} />
                        <Text>Yêu Thích</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={handleIconPress3} style={{ marginRight: 10, }}>
                            <Icon name={iconName3} size={40} color={iconColor3} />
                            <Text style={{ justifyContent: 'center' }}>Lưu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Icon name={'arrow-redo-outline'} size={40} color={'black'} />
                            <Text style={{ justifyContent: 'center' }}>Chia Sẻ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    tittle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#222222'
    },
    imageTittle: {
        height: 200,
        width: screenWidth,
        resizeMode: 'cover',

    },
    nameImage: {
        fontSize: 13,
        color: '#082073',
        marginTop: 10,
    }
})
export default Detail