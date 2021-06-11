import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { color } from "react-native-elements/dist/helpers";

const Bubbles = ({
  onUsPress,
  onAusPress,
  onFraPress,
  onRussPress,
  onUkPress,
  onInPress,
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.story}>
        <Text
          style={{
            color: "black",
            fontWeight: "700",
            fontSize: 22,
            margin: 12,
          }}
        >
          Categories{" "}
        </Text>
        <ScrollView horizontal={true}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <TouchableOpacity onPress={onInPress}>
                <Image
                  source={require("../assets/images/india.jpg")}
                  style={styles.avatar}
                />
                <Text style={{ color: "black", marginLeft: 30, marginTop: 5 }}>
                  IN
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={onUsPress}>
                <Image
                  source={require("../assets/images/america.jpg")}
                  style={styles.avatar}
                />
                <Text style={{ color: "black", marginLeft: 30, marginTop: 5 }}>
                  US
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={onAusPress}>
                <Image
                  source={require("../assets/images/australia.jpg")}
                  style={styles.avatar}
                />
                <Text style={{ color: "black", marginLeft: 30, marginTop: 5 }}>
                  AU
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={onFraPress}>
                <Image
                  source={require("../assets/images/france.jpg")}
                  style={styles.avatar}
                />
                <Text style={{ color: "black", marginLeft: 30, marginTop: 5 }}>
                  FR
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={onRussPress}>
                <Image
                  source={require("../assets/images/russia.jpg")}
                  style={styles.avatar}
                />
                <Text style={{ color: "black", marginLeft: 30, marginTop: 5 }}>
                  RU
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={onUkPress}>
                <Image
                  source={require("../assets/images/uk.jpg")}
                  style={styles.avatar}
                />
                <Text style={{ color: "black", marginLeft: 30, marginTop: 5 }}>
                  UK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Bubbles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    height: 60,
    width: 60,
    borderRadius: 18,
    marginLeft: 8,
  },
});
