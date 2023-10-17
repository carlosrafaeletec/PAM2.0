import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { Text, TouchableOpacity } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(); 


const MenuIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Text style={{ paddingHorizontal: 10 }}>Menu</Text>
  </TouchableOpacity>
);

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false, drawerLabel: () => null, }} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Segunda Tela" component={SecondScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
