import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackedScreens from './src/components/Screens/StackedScreens';

export default function App() {
  return (
    <NavigationContainer>
      <StackedScreens/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'center',
  },
});
