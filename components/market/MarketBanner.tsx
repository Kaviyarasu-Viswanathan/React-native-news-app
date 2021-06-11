import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MarketBanner = ({ petBanner }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <Image
          source={{ uri: petBanner }}
          style={styles.banner}
          resizeMode={"cover"}
        ></Image>
      </View>
    </View>
  );
};

export default MarketBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    position: "relative",
    width: 320,
    marginTop: 20,
    marginLeft: 20,
    height: 100,

    borderRadius: 10,
  },
  gradient: {
    height: 100,
    width: 320,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
});
