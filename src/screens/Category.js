import * as React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { image } from '../../constants';
import moment from 'moment';
import Video from 'react-native-video';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Category = ({ navigation }) => {
    const [iconName1, setIconName1] = useState('grid-outline');
    const newName = iconName1 === 'grid-outline' ? 'menu-outline' : 'grid-outline';
    const [isStyle1, setIsStyle1] = useState(true);
    const changeList = () => {
        setIconName1(newName)
        setIsStyle1(!isStyle1);
    }
    const getContainerStyle = () => {
        return isStyle1 ? styles.container1 : styles.container2;
    };
    const getlistStyle = () => {
        return isStyle1 ? styles.listView1 : styles.listView2;
    };
    const getImageStyle = () => {
        return isStyle1 ? styles.imageView1 : styles.imageView2;
    };
    return (
        <View style={{}}>
            <ScrollView style={{height:screenHeight-150}}>
                <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 15, backgroundColor: '#3A62EF', paddingHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name='arrow-back-outline' color={'#FFFFFF'} size={30} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginLeft: screenWidth * 26 / 100 }}>Chuyên Mục</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 16, color: '#5046CE' }}>Dạng hiển thị: </Text>
                    <TouchableOpacity onPress={changeList}>
                        <Icon name={iconName1} size={30} color='#5046CE' />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={getlistStyle()}>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={getlistStyle()}>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={getlistStyle()}>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={getlistStyle()}>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={getlistStyle()}>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={getlistStyle()}>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={getContainerStyle()}>
                                <Image source={image.khanhthanh} style={getImageStyle()} />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Huế luôn mới</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', height: 150, width: screenWidth, marginTop: screenHeight * 80 / 100, backgroundColor: '#FFFFFF', paddingHorizontal: 10, borderTopWidth: 1 }}>
                <View>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text>
                            Tác giả nổi bật
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100 , borderRadius: 45 }}>
                                <TouchableOpacity>
                                    <Image source={image.avatar} style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100, resizeMode: 'cover', borderRadius: 45 }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, color: '#222222', marginHorizontal: 10 }}>Phan Ngọc</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100 , borderRadius: 45 }}>
                                <TouchableOpacity>
                                    <Image source={image.avatar} style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100, resizeMode: 'cover', borderRadius: 45 }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, color: '#222222', marginHorizontal: 10 }}>Phan Ngọc</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100 , borderRadius: 45 }}>
                                <TouchableOpacity>
                                    <Image source={image.avatar} style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100, resizeMode: 'cover', borderRadius: 45 }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, color: '#222222', marginHorizontal: 10 }}>Phan Ngọc</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100 , borderRadius: 45 }}>
                                <TouchableOpacity>
                                    <Image source={image.avatar} style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100, resizeMode: 'cover', borderRadius: 45 }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, color: '#222222', marginHorizontal: 10 }}>Phan Ngọc</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listView2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        width: screenWidth * 45 / 100,
        height: screenHeight * 15 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    container2: {
        width: screenWidth * 69 / 100,
        height: screenHeight * 23 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    imageView1: {
        width: screenWidth * 45 / 100,
        height: screenHeight * 15 / 100,

    },
    imageView2: {
        width: screenWidth * 69 / 100,
        height: screenHeight * 23 / 100,

    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Màu của lớp phủ (ở đây là màu đen với độ mờ 50%)
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    overlayText: {
        color: '#ffffff', // Màu chữ
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default Category