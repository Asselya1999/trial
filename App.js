import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchMovies from "./screens/SearchMovies";
import MovieDetails from "./screens/MovieDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', 
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}; 

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/icons/home-outline-svg.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/icons/people-outline-svg.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigationRoutes"
            component={DrawerNavigationRoutes}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
}
