import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import MarketBanner from "../components/market/MarketBanner";
import MarketItems from "../components/market/MarketItems";

const MarketPlace = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView
          style={{ display: "flex", flexDirection: "row", paddingRight: 5 }}
          horizontal={true}
        >
          <MarketBanner petBanner="https://www.merlinspetstores.co.uk/ekmps/shops/fe69a8/resources/Design/banner.png" />
          <MarketBanner petBanner="https://www.silversky.com.sg/wp-content/uploads/2020/01/Silversky-Hero-Banners-01.jpg" />
          <MarketBanner petBanner="https://www.royalcaninmalaysia.my/promotions/images/jan2020/banner_contest.jpg" />
        </ScrollView>
        <Text style={styles.market_banner}>Dog Food</Text>
        <ScrollView
          style={{ display: "flex", flexDirection: "row", paddingRight: 0 }}
          horizontal={true}
        >
          <MarketItems petImage="https://www.bigbasket.com/media/uploads/p/l/256654-2_7-pedigree-dry-dog-food-meat-rice-for-adult-dogs.jpg" />
          <MarketItems petImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmoFRy68uVQ05TBNx3kyciXBO7C8bVPlJNQ&usqp=CAU" />
          <MarketItems petImage="https://5.imimg.com/data5/KN/FK/FP/SELLER-6476813/pedigree-dog-food-500x500.jpg" />
          <MarketItems petImage="https://www.pedigree.com/images/default-source/products/dry/10121176-1-pedigree-main-image-(front)-(1).tmb-.jpg?sfvrsn=9c326349_0" />
        </ScrollView>
        <Text style={styles.market_banner}>Pet Sales</Text>
        <ScrollView
          style={{ display: "flex", flexDirection: "row", paddingRight: 0 }}
          horizontal={true}
        >
          <MarketItems petImage="https://www.petplan.co.uk/images/breed-info/beagle/vital-stats_beagle.jpg" />
          <MarketItems petImage="https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" />
          <MarketItems petImage="https://i.pinimg.com/originals/01/bc/8d/01bc8d82a3e2b4fa869f478479b97a3f.png" />

          <MarketItems petImage="https://i.pinimg.com/originals/fc/77/24/fc7724af6b1db59e5e32d1f51c276b48.jpg" />
        </ScrollView>
        <Text style={styles.market_banner}>Pet's accessories</Text>
        <ScrollView
          style={{ display: "flex", flexDirection: "row", paddingRight: 0 }}
          horizontal={true}
        >
          <MarketItems petImage="https://images-na.ssl-images-amazon.com/images/I/71CaERY5tIL.jpg" />
          <MarketItems petImage="https://img.freepik.com/free-photo/portrait-purebred-rottweiler-with-red-thong_85574-12161.jpg?size=626&ext=jpg" />
          <MarketItems petImage="https://n4.sdlcdn.com/imgs/d/k/k/HMSteels-Brown-Muzzle-Large-SDL148404569-3-f6455.jpg" />
          <MarketItems petImage="https://image.made-in-china.com/202f0j00TzPfVthIRsqr/Stand-Collar-Dog-Bows-Pup-Accessories-Tuexdo-Tie-Pet-Products.jpg" />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default MarketPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "lightblue",
    padding: 10,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "700",
  },
});
