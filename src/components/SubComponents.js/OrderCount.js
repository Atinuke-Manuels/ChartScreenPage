import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { AntDesign } from '@expo/vector-icons';


const OrderCount = () => {
const [count, setCount] = useState(1)

    const Increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 1 ){
            setCount(count - 1);
        }
    }

  return (
<View style = {[tw`flex flex-row pt-6`, styles.iconContainer]}>
        <Pressable 
        onPress = {decrement}>
                <AntDesign
        style = {[tw`bg-white justify-center`, styles.minus]}
        name  = 'minus' size = {24} color = 'black'
    />
        </Pressable>
    <Text style = {tw`text-center text-lg`}>{count}</Text>
<Pressable
onPress = {Increment}>
            <AntDesign
        style = {[tw`bg-green-600 justify-center`, styles.plus ]}
        name  = 'plus' size = {24} color = 'white'
    />
</Pressable>
</View>
  )
}

export default OrderCount

const styles = StyleSheet.create({
   image: {
    width : 100,
    height: 100,
},
minus: {
    borderWidth : 1,
    borderColor : 'green',
    borderRadius: 5,
    padding     : 3,
    marginRight : 9
},
plus: {
    borderWidth : 1,
    borderColor : 'white',
    borderRadius: 5,
    padding     : 3,
    marginLeft  : 9,
},
iconContainer: {
    alignItems: 'center',
} 
})