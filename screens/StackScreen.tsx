import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../components/Post";
import TabTwoScreen from "../screens/TabTwoScreen";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { color } from "react-native-elements/dist/helpers";

const StackScreen = ({ route, navigation }) => {
  const [news, setNews] = React.useState([]);
  const [category, setCategory] = React.useState(handleCategory);
  const [country, setCountry] = React.useState(handleCountry);
  const ref = React.useRef(null);
  const { colors } = useTheme();

  const makeCategory = () => {};
  const makeCountry = () => {};

  const { itemId } = route.params;
  const { handleCategory } = route.params;
  const { handleCountry } = route.params;
  //api
  const BASE_URL = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  const getData = () => fetch(BASE_URL).then((res) => res.json());
  // admob interstitial ads ca-app-pub-8814244683975256/1377540905
  React.useEffect(() => {
    getData().then((res) => setNews(res.articles));
    setCountry(handleCountry);
    setCategory(handleCategory);

    const timeoutID = window.setTimeout(() => {
      function showInterstitial() {
        AdMobInterstitial.setAdUnitID("ca-app-pub-8814244683975256/1377540905");
        AdMobInterstitial.requestAdAsync().then(() => {
          AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
        });
      }
      showInterstitial();
    }, 30000);
    return () => window.clearTimeout(timeoutID);
  }, [country, category]);

  console.log(news);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: colors.card,
        }}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color={colors.text}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: colors.text,
            fontWeight: "700",
            marginTop: -30,
            marginLeft: 50,
            fontSize: 23,
          }}
        >
          {" "}
          News
        </Text>
      </View>

      <ScrollView ref={ref}>
        <View style={styles.postContainer} />

        {/*  <Post
          image={news.articles[0].urlToImage}
          postTitle={news.articles[0].title}
          postDesc="On Friday, Health Minister Rajesh Tope had said Maharashtra seemed headed towards a lockdown while Relief and Rehabilitation Minister Vijay Wadettiwar said the time for such a step was already here."
          url={news.articles[0].url}
        />*/}

        {news.map((article) => (
          <Post
            publishDate={article.publishedAt}
            postWebsite={article.source.name}
            image={article.urlToImage}
            postTitle={article.title}
            postDesc={article.description}
            url={article.url}
          />
        ))}
      </ScrollView>
      <AdMobBanner
        style={{ marginBottom: 20, width: "100%" }}
        bannerSize="banner"
        adUnitID="ca-app-pub-8814244683975256/6259984882" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={true} // true or false
      />
    </View>
  );
};

export default StackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postContainer: {
    marginTop: 30,
  },
  header: {},
  backIcon: {
    marginLeft: 20,
    marginTop: 40,
  },
});
