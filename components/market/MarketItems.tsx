import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MarketItems = ({ petImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Image
          source={{ uri: petImage }}
          style={styles.photos}
          resizeMode={"cover"}
        ></Image>
      </View>
    </View>
  );
};

export default MarketItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    height: 140,
    width: 100,
    marginRight: 20,
  },
  gradientItems: {
    height: 140,
    width: 100,
    borderRadius: 10,
    marginTop: 0,
  },
  photos: {
    marginLeft: 20,

    height: "100%",
    width: "100%",

    borderRadius: 10,
  },
});
