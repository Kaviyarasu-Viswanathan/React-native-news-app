import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { useTheme } from "@react-navigation/native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

const Post = ({
  image,
  postTitle,
  postDesc,
  url,
  postWebsite,
  publishDate,
}) => {
  const { colors } = useTheme();
  function handlePress() {
    WebBrowser.openBrowserAsync(url);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: colors.border,
          marginBottom: 20,
          paddingTop: 20,
          borderRadius: 20,
          width: "90%",
          marginLeft: 15,
        }}
      >
        <View style={styles.postContainer}>
          <View>
            <Text
              style={{
                color: colors.text,
                fontWeight: "700",
                marginTop: -40,
                position: "absolute",
                top: -10,
                left: 20,
              }}
            >
              Source : {postWebsite}
            </Text>
            <Text
              style={{
                color: colors.text,
                fontWeight: "700",
                marginTop: -40,
                paddingBottom: 10,
                position: "absolute",
                top: 10,
                left: 20,
              }}
            >
              Date : {publishDate}
            </Text>
          </View>
          <Image
            source={{
              uri: image,
            }}
            style={styles.postImage}
          />
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              marginLeft: 7,
              fontWeight: "700",
              textTransform: "uppercase",
              padding: 10,
            }}
          >
            {postTitle}
          </Text>
          <Text
            style={{
              marginLeft: 7,
              color: colors.text,
              padding: 10,
              paddingBottom: 30,
            }}
          >
            {postDesc}
          </Text>
        </View>
        {/* <AdMobBanner
          style={{ marginBottom: 20 }}
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={true} // true or false
       /> */}
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  postContainer: {
    marginTop: 40,
  },
  postImage: {
    height: 200,
    width: "90%",
    marginLeft: 15,
  },
  postTitle: {},
  postDesc: {},
});
