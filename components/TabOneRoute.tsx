import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Post from "../components/Post";
import { Text, View } from "../components/Themed";
import { useTheme } from "@react-navigation/native";
import Bubbles from "../components/Bubbles";
import { Ionicons } from "@expo/vector-icons";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
import { FontAwesome } from "@expo/vector-icons";

export default function TabOneRoute({ navigation }) {
  //states
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState("general");
  const [country, setCountry] = React.useState("in");

  const ref = React.useRef(null);

  //api
  const BASE_URL = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  {
    /*useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    })
  );*/
  }
  {
    /*const handleCategory = () => {
    setCategory("general");
  };
  const handleCountry = () => {
    setCountry("us");
  };
      setTimeout(
      await AdMobInterstitial.setAdUnitID(
        "ca-app-pub-3940256099942544/1033173712"
      ),
      1000
    );


    function showInterstitial() {
      AdMobInterstitial.setAdUnitID("ca-app-pub-8814244683975256/5018769993");
      AdMobInterstitial.requestAdAsync().then(() => {
        AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
      });
    }
        showInterstitial();
  */
  }
  //fetching data from the newsapi
  const getData = () => fetch(BASE_URL).then((res) => res.json());

  React.useEffect(() => {
    getData().then((res) => setNews(res.articles));
    //admob interstitial ad
    const timeoutID = window.setTimeout(() => {
      function showInterstitial() {
        AdMobInterstitial.setAdUnitID("ca-app-pub-8814244683975256/5018769993");
        AdMobInterstitial.requestAdAsync().then(() => {
          AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
        });
      }
      showInterstitial();
    }, 30000);
    return () => window.clearTimeout(timeoutID);
  }, [country, category]);
  console.log(news);

  //colors theme fot the whole app

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
          height: 80,
          backgroundColor: "white",
          shadowColor: "#000",
          elevation: 3,
        }}
      >
        <Ionicons
          name="newspaper-sharp"
          size={24}
          color="#fc466b"
          style={{ marginLeft: 20, marginTop: 15 }}
        />

        <Text
          style={{
            color: "black",
            padding: 10,
            fontWeight: "700",
            fontSize: 20,
            marginLeft: 0,
            marginTop: 15,
          }}
        >
          Kozmo News
        </Text>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              backgroundColor: "white",
            }}
          >
            <FontAwesome
              name="dollar"
              size={22}
              color="black"
              style={{ marginLeft: 100, marginTop: 15 }}
              onPress={() => alert("This is a button!")}
            />
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{ marginLeft: 30, marginTop: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        </View>
      </View>
      <ScrollView ref={ref}>
        <Bubbles
          onAusPress={() => {
            setCountry("au");
          }}
          onUsPress={() => {
            setCountry("us");
          }}
          onUkPress={() => {
            setCountry("gb");
          }}
          onFraPress={() => {
            setCountry("fr");
          }}
          onRussPress={() => {
            setCountry("ru");
          }}
          onInPress={() => {
            setCountry("in");
          }}
        />
        <View style={styles.separator} />

        {/*  <Post
          image={news.articles[0].urlToImage}
          postTitle={news.articles[0].title}
          postDesc="On Friday, Health Minister Rajesh Tope had said Maharashtra seemed headed towards a lockdown while Relief and Rehabilitation Minister Vijay Wadettiwar said the time for such a step was already here."
          url={news.articles[0].url}
        />*/}
        <Text
          style={{
            color: "black",
            fontWeight: "700",
            fontSize: 22,
            margin: 12,
          }}
        >
          Latest News
        </Text>
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
        style={{ width: "100%" }}
        bannerSize="banner"
        adUnitID="ca-app-pub-8814244683975256/3220207201" // Test ID, Replace with your-admob-unit-id ca-app-pub-8814244683975256/3220207201
        servePersonalizedAds={true} // true or false
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {},
  separator: {
    marginTop: 0,
  },
});
