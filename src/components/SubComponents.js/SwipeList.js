import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, Alert, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import tw from 'tailwind-react-native-classnames';
import OrderCount from './OrderCount';
import { AntDesign } from '@expo/vector-icons';
import Bottom from './BottomPart';

const data = [
  {
    id: 1,
    Name: "Beefy Burger",
    location: 'Allen Avenue',
    price: 1500,
    image: require("../../../assets/imgs/chickenburger.jpg"),
    count: 1,
  },
  {
    id: 2,
    Name: "Pork Burger",
    location: 'Ikoyi Avenue',
    price: 2000,
    image: require("../../../assets/imgs/tpBurger.jpg"),
    count: 1,
  },
];

const SwipeList = () => {
  const [dataList, setDataList] = useState(data);

  const renderHiddenItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Delete?", item.Name);
        }}
        style={tw`flex-row justify-end px-5 py-3 bg-red-500`}
      >
        <AntDesign name='delete' size={22} color='white' />
      </TouchableOpacity>
    );
  };

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

const discount = dataList.reduce((acc, item) => {
  return acc + (item.price * item.count * 0.01);
}, 0);

const totalPrice = dataList.reduce((acc, item) => {
  return acc + (item.price * item.count) - discount/2 ;
}, 0);


  return (
    <View style={[styles.container, tw`-mt-8`]}>
      <SwipeListView
        style={{ flexDirection: 'column' }}
        data={dataList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`flex flex-row justify-between mt-8 ml-4 mr-4 mb-4`}>
            <Image source={item.image} style={[tw``, styles.image]} />
            <View style={tw`justify-center`}>
              <Text style={tw`font-semibold text-lg`}>{item.Name}</Text>
              <Text style={tw`text-gray-400`}>{item.location}</Text>
              <Text style={tw`font-semibold text-lg`}>{isNaN(item.price) || isNaN(item.count) ? 'N/A' : `₦${item.price * item.count}`}</Text>
            </View>
            <View style={[tw`flex flex-row pt-6`, styles.iconContainer]}>
              <Pressable onPress={() => decrementCount(item)}>
                <AntDesign
                  style={[tw`bg-white justify-center`, styles.minus]}
                  name='minus'
                  size={24}
                  color='black'
                />
              </Pressable>
              <Text style={tw`text-center text-lg`}>{item.count}</Text>
              <Pressable onPress={() => incrementCount(item)}>
                  <AntDesign
                    style = {[tw`bg-green-600 justify-center`, styles.plus]}
                    name  = 'plus'
                    size  = {24}
                    color = 'white'
                  />
                </Pressable>
              </View>
<View style = {[tw`ml-4 mt-6`, {height:50, alignSelf: 'center', justifyContent: 'center'}]}>
          <TouchableOpacity 
      onPress={() =>{
        Alert.alert("delete?", item.Name)
      }} 
                 style = {tw`flex-row justify-end px-10 py-3 bg-red-500`}>
      <AntDesign name  = 'delete' size = {22} color = 'white' />
      </TouchableOpacity>
</View>
</View>
        )}
          // To limit the number of items initially displayed by our FlatList.
        initialNumToRender = {2}
        renderHiddenItem   = {(item)=>{
          return(
            <Text>{item.Name}</Text>
          )
        }}
        leftOpenValue = {-75}
        disableRightSwipe
        showsVerticalScrollIndicator = {false}
        //   ItemSeparatorComponent={() => {
        //     return <View style={tw`h-1 bg-gray-200`}></View>
        // }}
      />
<View style = {styles.containerBtm}>
<View         style = {{borderBottomWidth: 1, borderColor: 'white', borderStyle: 'dashed'}}>
          <FlatList
        data         = {dataList}
        keyExtractor = {(item) => item.id.toString()}
        renderItem   = {({ item }) => (
          <View style = {[tw`flex-row justify-between p-2`, {paddingLeft: 10, paddingRight: 10, paddingTop:4}]}>
          <Text style = {{ color: 'white', fontSize: 16 }}>{item.Name}</Text>
              <Text style={tw`font-semibold text-lg text-white`}>{isNaN(item.price) || isNaN(item.count) ? 'N/A' : `₦${item.price * item.count}`}</Text>
          </View>   
        )}
      />
      <View style = {[tw`flex-row justify-between p-2`, {paddingLeft: 10, paddingRight: 10, paddingTop:4}]}>
      <Text style = {{ color: 'white', fontSize: 16 }}>Discount</Text>
      <Text style = {[{ color: 'white', fontSize: 16 }, tw`font-semibold `]}>{-discount}</Text>
      </View>
</View>
      <View >
      <View style = {[tw`flex-row justify-between p-2`, {paddingLeft: 10, paddingRight: 10, paddingTop:4}]}>
      <Text style = {[{ color: 'white', fontSize: 18 }, tw`font-semibold `]}>Total</Text>
      <Text style = {[{ color: 'white', fontSize: 18 }, tw`font-semibold `]}>₦{totalPrice}</Text>
      </View>
        <Pressable
               style = {[{backgroundColor: 'white', width: '95%', height: 45, justifyContent:'center', alignSelf: 'center', alignItems: 'center', borderRadius: 15,}, tw` mt-2 justify-center`]}
        ><Text style = {{fontSize: 20, color: '#007a3d', fontWeight: 'bold'}}>Thank you</Text></Pressable>
      </View>
    </View>
    </View>
  )
}

export default SwipeList;

const styles = StyleSheet.create({
    container: {
    flex         : 1,
    flexDirection: 'column',
      // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      // paddingBottom: 6,
    paddingRight   : 6,
    paddingLeft    : 6,
    backgroundColor: 'white',
},
    image: {
    width       : 80,
    height      : 80,
    borderRadius: 5,
    marginRight : 10,
},
minus: {
    borderWidth : 1,
    borderColor : 'green',
    borderRadius: 5,
    padding     : 3,
    marginRight : 6
},
plus: {
    borderWidth : 1,
    borderColor : 'white',
    borderRadius: 5,
    // tintColor   : 'white',
    padding     : 3,
    marginLeft  : 6,
},
  iconContainer: {
    alignSelf    : 'center',
    flexDirection: 'row',
  },
  containerBtm: {
    width          : 350,
    height         : 230,
    backgroundColor: '#007a3d',
    borderRadius   : 20,
    alignSelf      : 'center',
    justifyContent : 'center',
    marginBottom   : 5,
  },
})