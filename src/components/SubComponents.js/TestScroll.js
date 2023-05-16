  // import { StyleSheet, Text, View, Image } from 'react-native'
  // import React from 'react'
  // import tw from 'tailwind-react-native-classnames'
  // import OrderCount from './OrderCount'
  // import { SwipeListView } from 'react-native-swipe-list-view'
  // import { AntDesign } from '@expo/vector-icons'

  // const data = [
  //   {
  //     id: 1,
  //     Name: 'Chicken Burger',
  //     location: 'Allen Avenue',
  //     price: '₦1500',
  //     image: require('../../../assets/imgs/burger.jpg'),
  //   },
  //   {
  //     id: 2,
  //     Name: 'Pork Burger',
  //     location: 'Ikoyi Avenue',
  //     price: '₦2000',
  //     image: require('../../../assets/imgs/tpBurger.jpg'),
  //   },
  // ]

  // const TestScroll = () => {
  //   const renderHiddenItem = () => {
  //     return (
  //       <View style={tw`flex-row justify-end px-5 py-3 bg-red-500`}>
  //         <AntDesign name='delete' size={22} color='white' />
  //       </View>
  //     )
  //   }

  //   return (
  //     <SwipeListView style={tw`flex flex-row `}
  //       data={data}
  //       keyExtractor={(item) => item.id}
  //       renderItem={({ item }) => {
  //         return (
  //           <View style={tw`flex-row justify-between mt-12 ml-4 mr-4 mb-4`}>
  //             <Image source={item.image} style={[tw``, styles.image]} />
  //             <View style={tw`justify-center`}>
  //               <Text style={tw`font-semibold text-lg`}>{item.Name}</Text>
  //               <Text style={tw`text-gray-400`}>{item.location}</Text>
  //               <Text style={tw`font-semibold text-lg`}>{item.price}</Text>
  //             </View>
  //             <OrderCount />
  //           </View>
  //         )
  //       }}
  //       renderHiddenItem={renderHiddenItem}
  //       rightOpenValue={75}
  //       disableLeftSwipe
  //       showsVerticalScrollIndicator={false}
  //       ItemSeparatorComponent={() => {
  //         return <View style={tw`h-1 bg-gray-200`}></View>
  //       }}
  //     />
  //   )
  // }

  // export default TestScroll


  // const styles = StyleSheet.create({
  //     image: {
  //     width : 100,
  //     height: 100,
  // },
  // minus: {
  //     borderWidth : 1,
  //     borderColor : 'green',
  //     borderRadius: 5,
  //     padding     : 3,
  //     marginRight : 6
  // },
  // plus: {
  //     borderWidth : 1,
  //     borderColor : 'white',
  //     borderRadius: 5,
  //     tintColor   : 'white',
  //     padding     : 3,
  //     marginLeft  : 6,
  // },
  // })