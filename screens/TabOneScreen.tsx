import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import TabOneIcon from "../navigation/BottomTabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneRoute from "../components/TabOneRoute";
import TabTwoScreen from "./TabTwoScreen";

const TabOneScreen = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabOneRoute} />
        <Drawer.Screen name="TwoScreen" component={TabTwoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({});
