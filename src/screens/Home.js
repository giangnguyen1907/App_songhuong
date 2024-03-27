import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Dimensions, Modal, TouchableWithoutFeedback, Linking, PanResponder, Animated } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { image } from '../../constants';
import moment from 'moment';
import Video from 'react-native-video';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Detail from './Detail';
//=======================================================================================================
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

//Các đường dẫn bottomTab
function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#5046CE',
        headerShow: false
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => {
            return (

              <View style={{ alignItems: 'center' }}>
                <Icon name='newspaper-outline' size={focused ? 28 : 24} color={focused ? '#5046CE' : '#222222'} />
                <Text allowFontScaling={false} style={{ fontSize: 12, }}>
                  {('Tin Tức')}
                </Text>
              </View>
            )
          }
        })}
        initialParams={{
          initialRouteName: 'Feed',
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoPlay}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => {
            return (

              <View style={{ alignItems: 'center' }}>
                <Icon name='play-circle-outline' size={focused ? 28 : 24} color={focused ? '#5046CE' : '#222222'} />
                <Text allowFontScaling={false} style={{ fontSize: 12, }}>
                  {('Video')}
                </Text>
              </View>
            )
          }
        })}
      />
      <Tab.Screen
        name="Cover"
        component={Cover}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => {
            return (

              <View style={{ alignItems: 'center' }}>
                <Icon name='library-outline' size={focused ? 28 : 24} color={focused ? '#5046CE' : '#222222'} />
                <Text allowFontScaling={false} style={{ fontSize: 12, }}>
                  {('Tạp Chí Năm')}
                </Text>
              </View>
            )
          }
        })}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => {
            return (

              <View style={{ alignItems: 'center' }}>
                <Icon name='notifications-outline' size={focused ? 28 : 24} color={focused ? '#5046CE' : '#222222'} />
                <Text allowFontScaling={false} style={{ fontSize: 12, }}>
                  {('Thông báo')}
                </Text>
              </View>
            )
          }
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => {
            return (

              <View style={{ alignItems: 'center' }}>
                <Icon name='person-outline' size={focused ? 28 : 24} color={focused ? '#5046CE' : '#222222'} />
                <Text allowFontScaling={false} style={{ fontSize: 12, }}>
                  {('Cá Nhân')}
                </Text>
              </View>
            )
          }
        })}
      />
    </Tab.Navigator>
  );
}
//

//Trang chủ(bảng tin)
function Feed({ navigation }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const currentDateTime = moment().format('MMMM,dddd  Do YYYY');
  const goToCategoryScreen = () => {
    navigation.navigate('Category');
  };
  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleToDetail = () => {
    navigation.navigate('Detail');
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => goToCategoryScreen()}>
            <Icon name='list-outline' size={30} color='black' />
          </TouchableOpacity>

          <Image source={(image.logo)} style={{ height: 75, width: 262.5, marginHorizontal: 25 }} />
          <View style={{}}>
            <TouchableOpacity onPress={toggleInput}>
              <Icon name="search-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        {isInputVisible && (
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <TextInput style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1
            }}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="Tìm bài viết..."
            />
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon name='search-outline' size={30} />
            </TouchableOpacity>
          </View>
        )}
        <View style={{ flexDirection: 'row' }}>
          <Icon name='calendar-number-outline' size={30} color='black' />
          <View>
            <Text style={{ paddingTop: 5, paddingHorizontal: 5 }}>{currentDateTime}</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Đọc Nhiều</Text>
        </View>
        <View>
          <ScrollView horizontal style={styles.container}>
            <View style={styles.item} >
              <TouchableOpacity onPress={handleToDetail}>
                <View >
                  <Image source={(image.bac_ho)} style={styles.itemImage} />
                </View>
                <View>
                  <Text style={styles.itemTextTac_gia}>Thy Nguyen</Text>
                </View>
                <View>
                  <Text style={styles.itemTittle}>Đón đọc Tạp chí Sông Hương Tết Giáp Thìn số 420, tháng 2 - 2...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.item} >
              <TouchableOpacity onPress={handleToDetail}>
                <View >
                  <Image source={(image.bac_ho)} style={styles.itemImage} />
                </View>
                <View>
                  <Text style={styles.itemTextTac_gia}>Thy Nguyen</Text>
                </View>
                <View>
                  <Text style={styles.itemTittle}>Đón đọc Tạp chí Sông Hương Tết Giáp Thìn số 420, tháng 2 - 2...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.item} >
              <TouchableOpacity onPress={handleToDetail}>
                <View >
                  <Image source={(image.bac_ho)} style={styles.itemImage} />
                </View>
                <View>
                  <Text style={styles.itemTextTac_gia}>Thy Nguyen</Text>
                </View>
                <View>
                  <Text style={styles.itemTittle}>Đón đọc Tạp chí Sông Hương Tết Giáp Thìn số 420, tháng 2 - 2...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.item} >
              <TouchableOpacity onPress={handleToDetail}>
                <View >
                  <Image source={(image.bac_ho)} style={styles.itemImage} />
                </View>
                <View>
                  <Text style={styles.itemTextTac_gia}>Thy Nguyen</Text>
                </View>
                <View>
                  <Text style={styles.itemTittle}>Đón đọc Tạp chí Sông Hương Tết Giáp Thìn số 420, tháng 2 - 2...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.item} >
              <TouchableOpacity onPress={handleToDetail}>
                <View >
                  <Image source={(image.bac_ho)} style={styles.itemImage} />
                </View>
                <View>
                  <Text style={styles.itemTextTac_gia}>Thy Nguyen</Text>
                </View>
                <View>
                  <Text style={styles.itemTittle}>Đón đọc Tạp chí Sông Hương Tết Giáp Thìn số 420, tháng 2 - 2...</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styles1.item}>
              <View>
                <Image source={image.hoivat} style={styles1.image} />
              </View>
              <View>
                <View>
                  <Text style={styles1.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styles1.item}>
              <View>
                <Image source={image.hoivat} style={styles1.image} />
              </View>
              <View>
                <View>
                  <Text style={styles1.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styles1.item}>
              <View>
                <Image source={image.hoivat} style={styles1.image} />
              </View>
              <View>
                <View>
                  <Text style={styles1.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styles1.item}>
              <View>
                <Image source={image.hoivat} style={styles1.image} />
              </View>
              <View>
                <View>
                  <Text style={styles1.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styles1.item}>
              <View>
                <Image source={image.hoivat} style={styles1.image} />
              </View>
              <View>
                <View>
                  <Text style={styles1.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
//

//Trang Video
function VideoPlay({ navigation }) {
  const [iconColor1, setIconColor1] = useState('#FFFFFF');
  const [iconName1, setIconName1] = useState('heart-outline');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleIconPress1 = () => {
    const newColor = iconColor1 === '#FFFFFF' ? 'red' : '#FFFFFF';
    const newName = iconName1 === 'heart-outline' ? 'heart' : 'heart-outline';
    setIconColor1(newColor);
    setIconName1(newName)
  };
  const [iconName2, setIconName2] = useState('add-circle-outline');
  const handleIconPress2 = () => {
    const newName = iconName2 === 'add-circle-outline' ? 'chevron-down-circle' : 'add-circle-outline';
    setIconName2(newName)
  };
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  const handlePress = () => {
    // Xử lý sự kiện press để tránh gọi handleDoubleTap khi chỉ có một lần nhấp
  };
  const handleDoubleTapEvent = () => {
    let timer = 0;
    const delay = 200; // Độ trễ giữa các lần nhấp để xem là double tap

    return () => {
      const now = new Date().getTime();
      if (now - timer < delay) {
        handleIconPress1();
        console.log('aaaaa')
      }
      timer = now;
    };
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ flex: 2, backgroundColor: '#222222' }}>
        <View style={{ flex: 1, width: screenWidth, marginTop: screenHeight * 15 / 100, justifyContent: 'center', alignItems: 'center' }}>
          {/* <Image source={image.khanhthanh} style={{ width: screenWidth, resizeMode: 'contain' }} /> */}
          <Video
            source={image.video}
            style={{ width: screenWidth, height: screenHeight * 80 / 100, justifyContent: 'center', alignItems: 'center' }}
            resizeMode={'contain'}
            controls={true}
            volume={1.0}
          // repeat = {true}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: screenHeight * 10 / 100 }}>
          <TouchableOpacity onPress={handleIconPress1}>
            <Icon name={iconName1} size={40} color={iconColor1} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingTop: 30 }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100, backgroundColor: 'blue', borderRadius: 45 }}>
                <TouchableOpacity>
                  <Image source={image.avatar} style={{ width: screenWidth * 12.5 / 100, height: screenWidth * 12.5 / 100, resizeMode: 'cover', borderRadius: 45 }} />
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#FFFFFF', marginHorizontal: 10 }}>Phan Ngọc</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={handleIconPress2}>
                  <Icon name={iconName2} style={{ fontSize: 30, color: '#5046CE' }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: screenWidth * 88 / 100, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, color: '#FFFFFF', marginHorizontal: 10 }}>Thừa Thiên Huế đón hơn 102.000 lượt khách đến tham quan dịp Tết</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ paddingTop: 5 }}>
              <TouchableOpacity>
                <Icon name='arrow-redo-outline' size={35} color='#FFFFFF' />
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 22 }}>
              <TouchableOpacity onPress={toggleMenu}>
                <Icon name='ellipsis-horizontal-outline' size={35} color='#FFFFFF' />
              </TouchableOpacity>
              <Modal visible={isMenuVisible} animationType="fade" transparent={true}>
                <TouchableWithoutFeedback onPress={closeMenu}>
                  <View>
                    <View style={videoStyles.menuContent}>
                      <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                        <Icon name='reader-outline' size={20} color='black' />
                        <Text style={{ fontSize: 18 }}>Đọc tin</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                        <Icon name='warning-outline' size={20} color='black' />
                        <Text style={{ fontSize: 18 }}>Báo cáo nội dung xấu</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={toggleMenu}>
                        <Text style={videoStyles.closeButton}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
//

//Bìa tạp chí
function Cover({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 15, backgroundColor: '#3A62EF', paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
            <Icon name='arrow-back-outline' color={'#FFFFFF'} size={30} />
          </TouchableOpacity>
          <Text style={{ color: '#FFFFFF', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginLeft: screenWidth * 28 / 100 }}>Bìa Tạp Chí</Text>
        </View>
        <View style={{ paddingHorizontal: 10, flex: 1 }} >
          <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity >
              <Text style={{ fontSize: 16, color: '#5046CE' }}>Thay đổi</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, }}>2023</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Image source={image.bia1} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={image.bia2} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Image source={image.bia3} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={image.bia4} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Image source={image.bia1} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={image.bia2} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Image source={image.bia3} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={image.bia4} style={{ width: screenWidth * 40 / 100, height: screenHeight * 27.5 / 100, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
//

//Profile
function Profile({ navigation }) {
  const handleWeather = () => {
    Linking.openURL('https://nchmf.gov.vn')
  };
  const handleSchedule = () => {
    Linking.openURL('https://lichviet.app')
  };
  const handleScoreFootball = () => {
    Linking.openURL('https://bongda24h.vn/bong-da/ket-qua.html')
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 10 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
            <Icon name='arrow-back-outline' size={30} color={'black'} />
          </TouchableOpacity>

          <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', marginLeft: screenWidth * 31 / 100, color: '#222222' }}>Cá nhân</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: screenWidth * 15 / 100, height: screenWidth * 15 / 100, borderRadius: 45 }}>
              <TouchableOpacity>
                <Image source={image.avatar} style={{ width: screenWidth * 15 / 100, height: screenWidth * 15 / 100, resizeMode: 'cover', borderRadius: 45 }} />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, color: '#222222', fontWeight: 'bold' }}>Hi, Hoàng Đức Nam</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 5, marginTop: 10, flexDirection: 'row' }}>
          <View style={{ width: screenWidth * 50 / 100 }}>
            <View >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Icon name='bookmark' size={25} color={'#5046CE'} />
                <Text style={{ color: '#222222', fontSize: 16, marginLeft: 10 }}>Đã lưu</Text>
              </TouchableOpacity>

            </View>
            <View >
              <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }}>
                <Icon name='archive' size={25} color={'#5046CE'} />
                <Text style={{ color: '#222222', fontSize: 16, marginLeft: 10 }}>Tin đã tải</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={{ width: screenWidth * 50 / 100 }}>
            <View >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Icon name='checkbox' size={25} color={'#5046CE'} />
                <Text style={{ color: '#222222', fontSize: 16, marginLeft: 10 }}>Đang theo dõi</Text>
              </TouchableOpacity>

            </View>
            <View >
              <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }}>
                <Icon name='time' size={25} color={'#5046CE'} />
                <Text style={{ color: '#222222', fontSize: 16, marginLeft: 10 }}>Đọc gần đây</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
        <View style={{ borderTopWidth: 1, borderColor: 'black', marginTop: 30 }}>
          <Text style={{ fontSize: 18, color: '#5046CE', fontWeight: 'normal', marginBottom: 20, marginTop: 15 }}>TIỆN ÍCH</Text>
          <View style={{}}>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }} onPress={handleSchedule}>
              <Icon name='calendar-outline' size={25} />
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Lịch Việt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }} onPress={handleWeather}>
              <Icon name='thunderstorm-outline' size={25} />
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Thời tiết</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }} onPress={handleScoreFootball}>
              <Icon name='football-outline' size={25} />
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Kết quả bóng đá</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }}>
              <Icon name='document-text-outline' size={25} />
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Sửa thông tin cá nhân</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }}>
              <Icon name='ellipsis-horizontal-circle-outline' size={25} />
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Tiện ích khác</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderTopWidth: 1, borderColor: 'black', marginTop: 30 }}>
          <Text style={{ fontSize: 18, color: '#5046CE', fontWeight: 'normal', marginBottom: 20, marginTop: 15 }}>SẢN PHẨM</Text>
          <View style={{}}>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Liên hệ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222', }}>Kiểm tra phiên bản</Text>
                <Text style={{ color: '#5046CE', fontSize: 17, }}>24.04</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Điều khoản sử dụng</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20, maxWidth: screenWidth * 50 / 100 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 17, color: '#222222' }}>Góp ý, báo lỗi</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ borderTopWidth: 1, borderColor: 'black', marginTop: 30, marginBottom: 30 }}>
            <TouchableOpacity
              style={{
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#5046CE",
                marginTop: 30,
                flexDirection: 'row'
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontSize: 18, color: "white", fontWeight: 'bold', marginRight: 10 }}>Đăng Xuất</Text>
              <Icon name='log-out-outline' size={30} color={'#FFFFFF'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
//
//Notification
function Notification({ navigation }) {
  const [isMenuVisible2, setIsMenuVisible2] = useState(false);
  const closeMenu2 = () => {
    setIsMenuVisible2(false);
  };
  const backHome = () => {
    navigation.navigate('Home')
  }
  const handleToDetail = () => {
    navigation.navigate('Detail');
  }
  const toggleMenu2 = () => {
    setIsMenuVisible2(!isMenuVisible2);
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        pan.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > 100) {
          setMenuVisible(true);
        } else {
          setMenuVisible(false);
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const menuStyle = {
    transform: [{ translateX: pan.x }],
  };

  const handleMenuClick = () => {
    // Xử lý sự kiện khi menu được click
  };
  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15, backgroundColor: '#3A62EF', paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name='arrow-back-outline' color={'#FFFFFF'} size={30} />
          </TouchableOpacity>
          <Text style={{ color: '#FFFFFF', fontSize: 20, alignItems: 'center' }}>Thông Báo</Text>
          <TouchableOpacity onPress={toggleMenu2}>
            <Icon name='ellipsis-horizontal-outline' size={35} color='#FFFFFF' />
          </TouchableOpacity>
        </View>
        <Modal visible={isMenuVisible2} animationType="fade" transparent={true}>
          <TouchableWithoutFeedback onPress={closeMenu2}>
            <View >
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, width: '80%', marginTop: '20%', marginBottom: '20%', marginLeft: '10%', marginRight: '10%', }}>
                <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                  <Icon name='reader-outline' size={20} color='black' />
                  <Text style={{ fontSize: 18 }}>Đánh dấu tất cả là đã đọc</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleMenu2}>
                  <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToDetail}>
            <View style={styleNoti.item}>
              <View>
                <Image source={image.hoivat} style={styleNoti.image} />
              </View>
              <View>
                <View>
                  <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>Dương Hoàng   .    1 giờ trước</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Animated.View style={[styles.card, pan.getLayout()]} {...panResponder.panHandlers}>
                <View style={styleNoti.item}>
                  <View>
                    <Image source={image.hoivat} style={styleNoti.image} />
                  </View>
                  <View>
                    <View>
                      <Text style={styleNoti.tittle}>Người trí thức yêu nước được Bác Hồ tặng áo ấm và bài thơ tứ tuyệt nhân dịp Tết Mậu Tý năm 1948 ở Việt Bắc</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>Dương Hoàng   .    1 giờ trước</Text>
                    </View>
                  </View>
                </View>
              </Animated.View>
            </TouchableOpacity>
            {menuVisible && (
              <View style={menuStyle}>
                <View style={styleNoti.menu}>
                  <Text>mmmm</Text>
                </View>
              </View>
            )}
          </View>
      </ScrollView>
      <View style={{ position: 'absolute', height: 100, width: screenWidth, marginTop: screenHeight * 90 / 100 }}>
      </View>
    </View>
  )
}
//style of notifile
const styleNoti = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  item: {
    flexDirection: 'row',
    width: screenWidth * 70 / 100,
    height: screenWidth * 22.9 / 100,
    marginBottom: 15,
  },
  image: {
    height: screenWidth * 22.9 / 100,
    width: screenWidth * 22.9 / 100,
    marginRight: 10,
  },
  tittle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000'
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  menu: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
  },
});
//

//========================================================================================================

//style of home 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  item: {
    width: screenWidth * 50.9 / 100,
    height: 160,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: screenWidth * 50.9 / 100,
    height: 100,
    resizeMode: 'cover',
  },
  itemTextTac_gia: {
    fontSize: 10,
    marginBottom: 8,
  },
  itemTittle: {
    fontSize: 14,
    color: '#000000'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  item: {
    flexDirection: 'row',
    width: screenWidth * 70 / 100,
    height: screenWidth * 22.9 / 100,
    marginBottom: 15,
  },
  image: {
    height: screenWidth * 22.9 / 100,
    width: screenWidth * 22.9 / 100,
    marginRight: 10,
  },
  tittle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000'
  }
});
// end style home

// style of video
const videoStyles = StyleSheet.create({
  menuContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    marginTop: '20%',
    marginBottom: '20%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  closeButton: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
//end style of video
export default function Home() {
  return (
    <MyTabs />
  );
}