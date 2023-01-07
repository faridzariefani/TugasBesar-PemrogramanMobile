import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.searchChild, styles.barLayout]} />
      <View style={styles.text}>
        <Pressable
          style={[
            styles.textChild,
            styles.textChildLayout,
            styles.textPosition,
          ]}
          onPress={() => navigation.navigate("HotelInformation")}
        />
        <View
          style={[styles.textItem, styles.textChildLayout, styles.textPosition]}
        />
        <View style={[styles.textInner, styles.textLayout]} />
        <View style={styles.rectangleView} />
        <View style={[styles.textChild1, styles.textLayout]} />
        <View style={[styles.textChild2, styles.textChildLayout]} />
        <Text
          style={[
            styles.time1FlexBox,
            styles.recentTypo,
            styles.recentTypo1,
            styles.recentPosition,
          ]}
        >
          Recent
        </Text>
        <Text
          style={[
            styles.suggestion,
            styles.time1FlexBox,
            styles.recentTypo,
            styles.recentTypo1,
          ]}
        >
          Suggestion
        </Text>
        <Text style={[styles.intercontinental, styles.flightToBaliTypo]}>
          Intercontinental
        </Text>
        <Text style={[styles.villa, styles.eatTypo]}>villa</Text>
        <Text style={[styles.flightToBali, styles.flightToBaliTypo]}>
          flight to bali
        </Text>
        <Text style={[styles.promo, styles.eatTypo]}>promo</Text>
        <Text
          style={[
            styles.finance,
            styles.time1FlexBox,
            styles.recentTypo,
            styles.recentTypo1,
          ]}
        >
          finance
        </Text>
        <Text style={[styles.eat, styles.eatTypo]}>eat</Text>
        <Image
          style={[styles.utransactionIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/utransaction.png")}
        />
        <Image
          style={[styles.urestaurantIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/urestaurant.png")}
        />
        <Image
          style={[styles.upricetagAltIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/upricetagalt.png")}
        />
        <Image
          style={[styles.uhomeIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/uhome.png")}
        />
        <Image
          style={[styles.uhistoryIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/uhistory.png")}
        />
      </View>
      <View style={[styles.upper, styles.upperLayout]}>
        <View
          style={[styles.upperChild, styles.upperLayout, styles.recentPosition]}
        />
        <Text
          style={[
            styles.searchDestinationItems,
            styles.time1FlexBox,
            styles.recentTypo,
          ]}
        >
          Search destination, items....
        </Text>
        <Image
          style={styles.iconlylightsearch}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch.png")}
        />
      </View>
      <Image
        style={styles.menuBelowIcon}
        resizeMode="cover"
        source={require("../assets/menu-below2.png")}
      />
      <View style={[styles.statusBar, styles.recentPosition, styles.barLayout]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    width: 375,
    position: "absolute",
  },
  textChildLayout: {
    height: 32,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  textPosition: {
    top: 32,
    backgroundColor: Color.gray_300,
  },
  textLayout: {
    width: 76,
    top: 123,
    height: 32,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  recentTypo: {
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    color: Color.black,
  },
  recentTypo1: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
  },
  recentPosition: {
    top: 0,
    left: 0,
  },
  time1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  flightToBaliTypo: {
    top: 40,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  eatTypo: {
    top: 131,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 127,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  upperLayout: {
    height: 42,
    width: 327,
    position: "absolute",
  },
  shape: {
    height: "6.02%",
    width: "36%",
    top: "84.34%",
    right: "32%",
    bottom: "9.64%",
    left: "32%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.black,
    position: "absolute",
  },
  tabBar: {
    bottom: 0,
    height: 83,
    left: 0,
  },
  searchChild: {
    top: -292,
    backgroundColor: Color.beige_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 447,
    left: 0,
    borderRadius: Border.br_2xl,
    width: 375,
  },
  textChild: {
    left: 30,
    width: 144,
  },
  textItem: {
    left: 182,
    width: 115,
  },
  textInner: {
    left: 97,
  },
  rectangleView: {
    width: 90,
    top: 123,
    height: 32,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  textChild1: {
    left: 180,
  },
  textChild2: {
    top: 168,
    width: 107,
    left: 0,
  },
  suggestion: {
    top: 83,
    left: 0,
  },
  intercontinental: {
    left: 43,
  },
  villa: {
    left: 134,
  },
  flightToBali: {
    left: 197,
  },
  promo: {
    left: 34,
  },
  finance: {
    top: 176,
    left: 42,
  },
  eat: {
    left: 222,
  },
  utransactionIcon: {
    top: 172,
    left: 11,
  },
  urestaurantIcon: {
    left: 192,
  },
  upricetagAltIcon: {
    left: 8,
  },
  uhomeIcon: {
    left: 105,
  },
  uhistoryIcon: {
    top: 36,
    left: 0,
  },
  text: {
    top: 174,
    width: 297,
    height: 200,
    left: 34,
    position: "absolute",
  },
  upperChild: {
    borderRadius: Border.br_xs,
    height: 42,
    width: 327,
    top: 0,
    backgroundColor: Color.white,
  },
  searchDestinationItems: {
    top: 16,
    left: 40,
    fontSize: FontSize.size_sm,
    opacity: 0.3,
  },
  iconlylightsearch: {
    height: "47.62%",
    width: "6.12%",
    top: "26.19%",
    right: "90.21%",
    bottom: "26.19%",
    left: "3.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  upper: {
    top: 76,
    left: 24,
  },
  menuBelowIcon: {
    top: 698,
    left: 18,
    width: 339,
    height: 68,
    position: "absolute",
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    left: 0,
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 44,
  },
  search: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default Search;
