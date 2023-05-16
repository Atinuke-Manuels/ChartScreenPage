import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
  // import { data } from './extra';

const data = [
  {
    id      : 1,
    Name    : 'Beefy Burger',
    location: 'Allen Avenue',
    price   : '₦1500',
    image   : require('../../../assets/imgs/chickenburger.jpg'),
  },
  {
    id      : 2,
    Name    : 'Pork Burger',
    location: 'Ikoyi Avenue',
    price   : '₦2000',
    image   : require('../../../assets/imgs/tpBurger.jpg'),
  },
];

  //Function to calculate the total
const totalPrice = data.reduce((acc, item) => {
  const price    = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
  let   discount = -60;
  return acc + price + discount;
}, 0);

// const totalPrice = dataList.reduce((acc, item) => {
//   return acc + item.price * item.count;
// }, 0);

// const discount = dataList.reduce((acc, item) => {
//   return acc + (item.price * item.count * 0.01);
// }, 0);

const Bottom = () => {
  return (
<SafeAreaView style = {styles.containerBtm}>
<View         style = {{borderBottomWidth: 1, borderColor: 'white', borderStyle: 'dashed'}}>
          <FlatList
        data         = {data}
        keyExtractor = {(item) => item.id.toString()}
        renderItem   = {({ item }) => (
          <View style = {[tw`flex-row justify-between p-2`, {paddingLeft: 10, paddingRight: 10, paddingTop:4}]}>
          <Text style = {{ color: 'white', fontSize: 16 }}>{item.Name}</Text>
          <Text style = {{ color: 'white', fontSize: 16 }}>{item.price}</Text>
          </View>   
        )}
      />
      <View style = {[tw`flex-row justify-between p-2`, {paddingLeft: 10, paddingRight: 10, paddingTop:4}]}>
      <Text style = {{ color: 'white', fontSize: 16 }}>Discount</Text>
      <Text style = {{ color: 'white', fontSize: 16 }}>-60</Text>
      </View>
</View>
      <View >
      <View style = {[tw`flex-row justify-between p-2`, {paddingLeft: 10, paddingRight: 10, paddingTop:4}]}>
      <Text style = {{ color: 'white', fontSize: 18 }}>Total</Text>
      <Text style = {{ color: 'white', fontSize: 18 }}>₦{totalPrice}</Text>
      </View>
        <Pressable
               style = {[{backgroundColor: 'white', width: '95%', height: 45, justifyContent:'center', alignSelf: 'center', alignItems: 'center', borderRadius: 15,}, tw` mt-4 justify-center`]}
        ><Text style = {{fontSize: 20, color: '#007a3d', fontWeight: 'bold'}}>Thank you</Text></Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  containerBtm: {
    width          : 320,
    height         : 230,
    backgroundColor: '#007a3d',
    borderRadius   : 20,
    alignSelf      : 'center',
    justifyContent : 'center',
    marginBottom   : 5,
  },
});
