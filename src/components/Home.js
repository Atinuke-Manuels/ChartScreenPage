import { StyleSheet, Text, View, Pressable , SafeAreaView, StatusBar, Platform, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';
import tw from 'tailwind-react-native-classnames'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';



const Home = () => {
    const navigation = useNavigation();
    
    const pressHandler = () => {
        navigation.navigate("ChartScreen");

    }
          //to transition between pages without clicking anything. This uses the set interval
            useEffect(() => {
            setTimeout(()=>{
                navigation.replace('ChartScreen');
            }, 300) 
        })

  return (
    <SafeAreaView style = {[tw`bg-green-200`,styles.container]}>
    <View         style = {tw`justify-center`} >
        <TouchableOpacity 
        onPress = {pressHandler}
        style   = {{justifyContent: 'center', alignItems: 'center'}}>
                     <Image 
         style  = {{width: 220, height: 220, borderRadius: 10}}
         source = {require("../../assets/imgs/tpBurger.jpg")} />
        </TouchableOpacity>
        
         <Pressable
                 style   = {[tw`bg-green-600 rounded-full ml-8 mr-8 mt-1 p-4 flex flex-row`]}
                 onPress = {pressHandler}>
      <Text      style   = {[tw`text-center text-red-100 font-bold pr-6`, {fontSize: 16}]}>Welcome to burger Master..</Text>
      <AntDesign name    = 'right' size = {20} color = 'white' />
      </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex          : 1,
        justifyContent: 'center',
        marginTop     : Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    },
})