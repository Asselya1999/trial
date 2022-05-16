import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchMovies from "./screens/SearchMovies";
import MovieDetails from "./screens/MovieDetails";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Splash from "./screens/SplashScreen";

import BottomTabNavigator from "./App";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchMovies"
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerLeft: (props) => null }}
      />
      <Stack.Screen
        name="SearchMovies"
        component={SearchMovies}
        options={{ title: "Movie Browser" }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ title: "Movie Details" }}
      />
      <Stack.Screen name="StackNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="About" component={About} />
   

    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ headerLeft: (props) => null }}
      />
    </Stack.Navigator>
  );
};

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Api" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, ContactStackNavigator };
