import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import MyStack from "./components/MyStack";
import { createStackNavigator } from "@react-navigation/stack";
import StackScreen from "./screens/StackScreen";
import { NewsProvider } from "./components/NewsContext";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="dark" />
      </SafeAreaProvider>
    );
  }
}
