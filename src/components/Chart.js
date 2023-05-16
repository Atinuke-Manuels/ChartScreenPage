import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import OrderCount from './SubComponents.js/OrderCount';
import SwipeList from './SubComponents.js/SwipeList';
import Bottom from './SubComponents.js/BottomPart';

const data = [
  {
    id      : 1,
    Name    : 'Lamb Burger',
    location: 'Allen Avenue',
    price   : 1500,
    image   : require('../../assets/imgs/burger.jpg'),
    count   : 1,
  },
  {
    id      : 2,
    Name    : 'Pork Burger',
    location: 'Ikoyi Avenue',
    price   : 2000,
    image   : require('../../assets/imgs/tpBurger.jpg'),
    count   : 1,
  },
  {
    id      : 3,
    Name    : 'Saucy Burger',
    location: 'GRA Avenue',
    price   : 2500,
    image   : require('../../assets/imgs/burger3.jpg'),
    count   : 1,
  },
  {
    id      : 4,
    Name    : 'Hot Burger',
    location: 'VI Avenue',
    price   : 2800,
    image   : require('../../assets/imgs/burger4.jpg'),
    count   : 1,
  },
  {
    id      : 5,
    Name    : 'Sour Burger',
    location: 'Lekki Avenue',
    price   : 3000,
    image   : require('../../assets/imgs/burger5.jpg'),
    count   : 1,
  },
];

const windowHeight = Dimensions.get('window').height;

const Chart = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate('HomeScreen');
  };

  const [dataList, setDataList] = useState(data);

  const incrementCount = (item) => {
    const updatedDataList = dataList.map((dataItem) => {
      if (dataItem.id === item.id) {
        return {
          ...dataItem,
          count: dataItem.count + 1,
        };
      }
      return dataItem;
    });
    setDataList(updatedDataList);
  };

  const decrementCount = (item) => {
    const updatedDataList = dataList.map((dataItem) => {
      if (dataItem.id === item.id && dataItem.count > 1) {
        return {
          ...dataItem,
          count: dataItem.count - 1,
        };
      }
      return dataItem;
    });
    setDataList(updatedDataList);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    dataList.forEach((item) => {
      totalPrice += item.count * item.price;
    });
    return totalPrice;
  };

  return (
    <SafeAreaView style = {styles.container}>
    <View         style = {tw`pt-4 flex flex-row justify-center`}>
        <AntDesign
          style   = {tw`mr-16`}
          onPress = {goBack}
          name    = "left"
          size    = {28}
          color   = "black"
        />
        <Text style = {tw`font-semibold justify-center text-xl text-black`}>
          Burger Master Menu
        </Text>
      </View>
      <View style = {{ height: windowHeight * 0.25 }}>
        <FlatList
                    data = {dataList}
          horizontal
          keyExtractor = {(item) => item.id.toString()}
          renderItem   = {({ item }) => (
            <View style = {[tw`flex-row justify-between mt-8 ml-4 mr-4 mb-4`, { gap: 6, paddingBottom: 0, justifyContent: 'center', alignContent: 'center', height: 120 }]}>
              <Image
                source = {item.image}
                style  = {[tw``, styles.image]}
              />
              <View style = {tw`justify-center`}>
              <Text style = {tw`font-semibold text-lg`}>{item.Name}</Text>
              <Text style = {tw`text-gray-400`}>{item.location}</Text>
              <Text style = {tw`font-semibold text-lg`}>{isNaN(item.price) || isNaN(item.count) ? 'N/A' : `₦${item.price * item.count}`}</Text>
              </View>
              <View      style   = {[tw`flex flex-row pt-6`, styles.iconContainer]}>
              <Pressable onPress = {() => decrementCount(item)}>
                  <AntDesign
                    style = {[tw`bg-white justify-center`, styles.minus]}
                    name  = 'minus'
                    size  = {24}
                    color = 'black'
                  />
                </Pressable>
                <Text      style   = {tw`text-center text-lg`}>{item.count}</Text>
                <Pressable onPress = {() => incrementCount(item)}>
                  <AntDesign
                    style = {[tw`bg-green-600 justify-center`, styles.plus]}
                    name  = 'plus'
                    size  = {24}
                    color = 'white'
                  />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
      <SwipeList />
      {/* <Bottom totalPrice = {getTotalPrice()} /> */}
    </SafeAreaView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    marginTop      : Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    backgroundColor: 'white',
  },
  image: {
    width       : 100,
    height      : 100,
    borderRadius: 8,
  },
  minus: {
    borderWidth : 1,
    borderColor : 'green',
    borderRadius: 5,
    padding     : 3,
    marginRight : 6,
  },
  plus: {
    borderWidth : 1,
    borderColor : 'white',
    borderRadius: 5,
    padding     : 3,
    marginLeft  : 6,
  },
  iconContainer: {
    alignSelf    : 'center',
    flexDirection: 'row',
  },
});
