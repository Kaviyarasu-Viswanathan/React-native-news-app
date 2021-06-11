import * as React from "react";
import { StyleSheet } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Explore from "../components/Explore";
import MarketBanner from "../components/market/MarketBanner";
import MarketPlace from "../components/MarketPlace";
import MarketItems from "../components/market/MarketItems";
import { Text, View } from "../components/Themed";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "../components/Post";
import StackScreen from "./StackScreen";
import { AdMobBanner, PublisherBanner } from "expo-ads-admob";
import { Button } from "react-native-elements";

export default function TabTwoScreen({
  onBPress,
  onSpPress,
  onHelPress,
  onTechPress,
  onSciPress,
  onEntPress,
  navigation,

  handleCategory,
  handleCountry,
}) {
  const Stack = createStackNavigator();

  // india
  const BusinessHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "business",
      handleCountry: "in",
    });
  };

  const TechHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "technology",
      handleCountry: "in",
    });
  };
  const ScienceHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "science",
      handleCountry: "in",
    });
  };
  const EntertainmentHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "entertainment",
      handleCountry: "in",
    });
  };
  const HealthHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "health",
      handleCountry: "in",
    });
  };
  const SportsHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "sports",
      handleCountry: "in",
    });
  };

  //==========================UK==================================
  const Uk_BusinessHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "business",
      handleCountry: "gb",
    });
  };

  const Uk_TechHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "technology",
      handleCountry: "gb",
    });
  };
  const Uk_ScienceHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "science",
      handleCountry: "gb",
    });
  };
  const Uk_EntertainmentHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "entertainment",
      handleCountry: "gb",
    });
  };
  const Uk_HealthHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "health",
      handleCountry: "gb",
    });
  };
  const Uk_SportsHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "sports",
      handleCountry: "gb",
    });
  };
  //========================== AUSTRALIA ==================================
  const AUS_BusinessHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "business",
      handleCountry: "au",
    });
  };

  const AUS_TechHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "technology",
      handleCountry: "au",
    });
  };
  const AUS_ScienceHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "science",
      handleCountry: "au",
    });
  };
  const AUS_EntertainmentHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "entertainment",
      handleCountry: "au",
    });
  };
  const AUS_HealthHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "health",
      handleCountry: "au",
    });
  };
  const AUS_SportsHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "sports",
      handleCountry: "au",
    });
  };
  //========================== USA =====================================
  const USA_BusinessHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "business",
      handleCountry: "us",
    });
  };

  const USA_TechHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "technology",
      handleCountry: "us",
    });
  };
  const USA_ScienceHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "science",
      handleCountry: "us",
    });
  };
  const USA_EntertainmentHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "entertainment",
      handleCountry: "us",
    });
  };
  const USA_HealthHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "health",
      handleCountry: "us",
    });
  };
  const USA_SportsHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "sports",
      handleCountry: "us",
    });
  };
  //========================== FRANCE ============================
  const FR_BusinessHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "business",
      handleCountry: "fr",
    });
  };

  const FR_TechHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "technology",
      handleCountry: "fr",
    });
  };
  const FR_ScienceHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "science",
      handleCountry: "fr",
    });
  };
  const FR_EntertainmentHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "entertainment",
      handleCountry: "fr",
    });
  };
  const FR_HealthHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "health",
      handleCountry: "fr",
    });
  };
  const FR_SportsHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "sports",
      handleCountry: "fr",
    });
  };
  //========================== RUSSIA =====================================
  const RU_BusinessHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "business",
      handleCountry: "ru",
    });
  };

  const RU_TechHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "technology",
      handleCountry: "ru",
    });
  };
  const RU_ScienceHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "science",
      handleCountry: "ru",
    });
  };
  const RU_EntertainmentHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "entertainment",
      handleCountry: "ru",
    });
  };
  const RU_HealthHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "health",
      handleCountry: "ru",
    });
  };
  const RU_SportsHandler = () => {
    navigation.navigate("StackScreen", {
      handleCategory: "sports",
      handleCountry: "ru",
    });
  };
  const HandleDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 80,
            backgroundColor: "white",
            shadowColor: "#000",
            elevation: 1,
          }}
        >
          <Text
            style={{
              color: "black",
              padding: 10,
              fontWeight: "700",
              fontSize: 20,
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Explore
          </Text>
        </View>
        <ScrollView>
          <ScrollView
            style={{ display: "flex", flexDirection: "row", paddingRight: 5 }}
            horizontal={true}
          >
            <PublisherBanner
              bannerSize="smartBannerLandscape"
              adUnitID="ca-app-pub-8814244683975256/3220207201" // Test ID, Replace with your-admob-unit-id
            />
            <PublisherBanner
              bannerSize="smartBannerLandscape"
              adUnitID="ca-app-pub-8814244683975256/8891099225" // Test ID, Replace with your-admob-unit-id
            />
            <PublisherBanner
              bannerSize="smartBannerLandscape"
              adUnitID="ca-app-pub-8814244683975256/8922060212" // Test ID, Replace with your-admob-unit-id
            />
          </ScrollView>
          {/* India*/}
          <Text style={styles.market_banner}>India News</Text>

          <ScrollView
            horizontal={true}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity onPress={() => BusinessHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="http://im.rediff.com/money/2012/dec/20tata1.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Business News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SportsHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://cdn.shopify.com/s/files/1/0969/9128/products/MahendraDhoniThala-CSKIPL-IndianCricketLegend-SportsPoster_03cccf12-137b-4b77-a42c-c31195f52f2f.jpg?v=1597730427" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Sports News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HealthHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://cdn.downtoearth.org.in/library/large/2021-02-17/0.27304500_1613545520_covid19.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Health News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => TechHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.rmit.edu.au/content/dam/rmit/au/en/study-with-us/interest-areas/thumbnails/science-study-area-1220x732.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Technology News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ScienceHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://sdtimes.com/wp-content/uploads/2014/12/1203.sdt-idc.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Science News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => EntertainmentHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Entertainment News
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* */}
          <Text style={styles.market_banner}>USA News</Text>
          <ScrollView
            horizontal={true}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity onPress={() => USA_BusinessHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://cdn.pixabay.com/photo/2016/09/05/17/39/business-1647157_960_720.jpg" />
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    color: "black",
                  }}
                >
                  Business News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => USA_SportsHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.topendsports.com/sport/gridiron/images/usa-football-player.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Sports News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => USA_HealthHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-lshc-global-health-care-p.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Health News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => USA_TechHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://cdn-japantimes.com/wp-content/uploads/2019/10/b-itgiants-a-20191005.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Technology News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => USA_ScienceHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://image.freepik.com/free-vector/colorful-science-education-background_23-2148476361.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Science News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => USA_EntertainmentHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="http://www.wheatleynurseryschool.org/wp-content/uploads/2012/10/06-Hollywood-sign.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Entertainment News
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* france*/}
          <Text style={styles.market_banner}>France News</Text>
          <ScrollView
            horizontal={true}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity onPress={() => FR_BusinessHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://thumbs.dreamstime.com/t/french-business-men-meeting-7296065.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Business News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => FR_SportsHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.easyfrench.co.uk/blog/wp-content/uploads/2014/07/french-soccer.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Sports News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => FR_HealthHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://i.ytimg.com/vi/UPA5wVNbsuY/maxresdefault.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Health News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => FR_TechHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://thumbs-prod.si-cdn.com/EMShoT8oRocoZw-6ZPdW-k-karc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/5f/c9/5fc98648-388d-4e9e-80cb-0ea02e45aa75/istock-450031051.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Technology News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => FR_ScienceHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://img.freepik.com/free-vector/science-education-background_23-2148486901.jpg?size=626&ext=jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Science News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => FR_EntertainmentHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://media.2oceansvibe.com/wp-content/uploads/2018/04/777spinslot23.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Entertainment News
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* */}
          <Text style={styles.market_banner}>Russia News</Text>
          <ScrollView
            horizontal={true}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity onPress={() => RU_BusinessHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://enjoyrussian.com/wp-content/uploads/2020/04/Learn-Russian-for-business-1.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Business News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RU_SportsHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://qph.fs.quoracdn.net/main-qimg-5a6a814f9253cdaa5e81d3d4b2cb4314" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Sports News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RU_HealthHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://cdnuploads.aa.com.tr/uploads/Contents/2020/08/12/thumbs_b_c_0c4c20ffbdde940225633ae809fdaf36.jpg?v=130800" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Health News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RU_TechHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://phototass3.cdnvideo.ru/width/1020_b9261fa1/tass/m2/en/uploads/i/20190530/1222190.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Technology News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RU_ScienceHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.henkel.com/resource/image/526580/16x9/1000/562/91a5ae06f8c1a16dbd793e70188cf7c9/RM/russia-henkel-forscherwelt-in-moscow-school-jpg.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Science News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RU_EntertainmentHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://previews.123rf.com/images/dimakig/dimakig1907/dimakig190700155/128670354-2019-06-01-moscow-russia-entertainment-of-zorbing-in-the-park-children-rolling-downhill-inside-an-or.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Entertainment News
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* */}
          <Text style={styles.market_banner}>UK News</Text>
          <ScrollView
            horizontal={true}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity onPress={() => Uk_BusinessHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://ix-cdn.b2e5.com/images/53826/53826_1af3dbdc4c4e4860961454ae9e7b7d00_1525136909.jpeg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Business News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Uk_SportsHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.worldatlas.com/r/w1200/upload/8f/bc/b8/shutterstock-297495785.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Sports News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Uk_HealthHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/37764/0643afe6-fe03-468d-ad44-891dbea6047a.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Health News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Uk_TechHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.rmit.edu.au/content/dam/rmit/au/en/study-with-us/interest-areas/thumbnails/science-study-area-1220x732.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Technology News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Uk_ScienceHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.aljazeera.com/wp-content/uploads/2020/12/2020-12-30T074006Z_950340652_RC2JXK9U4XG4_RTRMADP_3_HEALTH-CORONAVIRUS-BRITAIN-VACCINE.jpg?resize=770%2C513" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Science News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Uk_EntertainmentHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.westendtheatre.com/wp-content/uploads/2020/12/2020q4-sondheim-750x420-1.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Entertainment News
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* */}
          <Text style={styles.market_banner}>Australia News</Text>
          <ScrollView
            horizontal={true}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity onPress={() => AUS_BusinessHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.wdic.in/wp-content/uploads/2015/12/Australia-Business-Visa.jpg" />
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    color: "black",
                    height: 150,
                  }}
                >
                  Business News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => AUS_SportsHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://i1.wp.com/neoprimesport.com/wp-content/uploads/2018/01/AUS13.jpg?resize=678%2C381&ssl=1" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Sports News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => AUS_HealthHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.propertyguides.com/australia/media/sites/20/Australian-map-with-stethoscope-national-health-care-concept-3D-rendering.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Health News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => AUS_TechHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://www.techguide.com.au/wp-content/uploads/2016/01/Aussieinventions3.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Technology News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => AUS_ScienceHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="https://newsroom.unsw.edu.au/sites/default/files/thumbnails/image/shutterstock_150591119_1.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Science News
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => AUS_EntertainmentHandler()}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <MarketItems petImage="http://www.residentadvisor.com.au/wp-content/uploads/2019/02/Entertainment-in-Australia-1210x642.jpg" />
                <Text style={{ marginLeft: 20, marginTop: 10, color: "black" }}>
                  Entertainment News
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <AdMobBanner
            style={{
              marginBottom: 20,
              width: "100%",
            }}
            bannerSize="banner"
            adUnitID="ca-app-pub-8814244683975256/4804514557" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds={true} // true or false
          />
          {/*     */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header_text: {
    color: "white",
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 10,
    fontWeight: "700",
    fontSize: 25,
  },
  input_container: {
    backgroundColor: "#2f3030",
    padding: 10,
    marginLeft: 30,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 10,
    width: 300,
  },
  input: {
    color: "white",
  },
  market_banner: {
    color: "#fc466b",
    padding: 10,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "700",
  },
  separator: {
    backgroundColor: "white",
  },
});
