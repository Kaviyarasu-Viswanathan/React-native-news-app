import React, { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackScreen from "../screens/StackScreen";

export const DataContext = createContext({});

export const NewsProvider = (props) => {
  const [category, setCategory] = React.useState("business");
  const [country, setCountry] = React.useState("in");
  return (
    <View>
      <DataContext.Provider value={[category, setCategory]}>
        {props.children}
      </DataContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({});
