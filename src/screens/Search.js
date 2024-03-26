import * as React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { image } from '../../constants';
import moment from 'moment';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Search = ({ navigation }) => {
  const backHome = () => {
    navigation.navigate('Home')
  }                                                                                                                                                                      
  const handleToDetail = () => {
    navigation.navigate('Detail');
  }
  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#3A62EF', paddingHorizontal: 10 }}>
          <TouchableOpacity style={{ alignItems: 'center' }}>           
            <TextInput placeholder='Tìm Kiếm ....' placeholderTextColor={'#FFFFFF'} style={{ color: '#FFFFFF' }}></TextInput>
          </TouchableOpacity>
          <TouchableOpacity >
          <Icon name='search-outline' color={'#FFFFFF'} size={30} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
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
      </ScrollView>
      <View style={{ position: 'absolute', height: 100, width: screenWidth, marginTop: screenHeight * 90 / 100 }}>
      <TouchableOpacity onPress={backHome}>
        <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 15, backgroundColor: '#3A62EF', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>   
            <Icon name='arrow-back-outline' color={'#FFFFFF'} size={30} />
            <Text style={{ color: '#FFFFFF', fontSize: 20}}>Đóng</Text>              
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
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
export default Search