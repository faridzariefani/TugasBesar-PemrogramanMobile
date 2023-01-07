import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Introduction1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.introduction}>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
        <Pressable
          style={styles.tabBarChild}
          onPress={() => navigation.navigate("SignIn")}
        />
        <Image
          style={[styles.fichevronRightIcon, styles.iconlylightsearchLayout]}
          resizeMode="cover"
          source={require("../assets/fichevronright.png")}
        />
      </View>
      <View style={[styles.text, styles.textPosition1]}>
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
        <View
          style={[
            styles.rectangleView,
            styles.image3IconPosition,
            styles.textChildLayout,
          ]}
        />
        <View style={[styles.textChild1, styles.textLayout]} />
        <View style={[styles.textChild2, styles.textChildLayout]} />
        <Text
          style={[
            styles.recent,
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
      <View style={styles.upper}>
        <View style={styles.upperChild} />
        <View style={styles.upperItem} />
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
          style={[styles.iconlylightsearch, styles.iconlylightsearchLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch.png")}
        />
      </View>
      <Image
        style={[styles.menuBelowIcon, styles.textPosition1]}
        resizeMode="cover"
        source={require("../assets/menu-below.png")}
      />
      <Text style={styles.goodWishes}>Good Wishes</Text>
      <Text style={[styles.bestOfLuck, styles.time1FlexBox]}>
        best of luck on your journey, we hope we can help you make some memories
      </Text>
      <View style={styles.introductionChild} />
      <View style={[styles.introductionItem, styles.introductionLayout]} />
      <View style={[styles.introductionInner, styles.introductionLayout]} />
      <Image
        style={[styles.image3Icon, styles.image3IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
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
  iconlylightsearchLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition1: {
    display: "none",
    position: "absolute",
  },
  textChildLayout: {
    height: 32,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_xs,
  },
  textPosition: {
    top: 32,
    backgroundColor: Color.gray_300,
    position: "absolute",
  },
  textLayout: {
    width: 76,
    top: 123,
    height: 32,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  image3IconPosition: {
    top: 123,
    left: 0,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  recentTypo: {
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  recentTypo1: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
  },
  recentPosition: {
    top: 0,
    left: 0,
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
  introductionLayout: {
    width: 11,
    height: 4,
    borderRadius: Border.br_6xs,
    top: 626,
    backgroundColor: Color.beige_100,
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
  tabBarChild: {
    height: "72.29%",
    width: "16%",
    top: "-36.14%",
    right: "10.93%",
    bottom: "63.86%",
    left: "73.07%",
    backgroundColor: Color.gray_500,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  fichevronRightIcon: {
    height: "42.17%",
    width: "9.33%",
    top: "-21.69%",
    right: "13.87%",
    bottom: "79.52%",
    left: "76.8%",
  },
  tabBar: {
    bottom: 0,
    height: 83,
    left: 0,
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
  },
  textChild1: {
    left: 180,
  },
  textChild2: {
    top: 168,
    width: 107,
    left: 0,
    position: "absolute",
  },
  recent: {
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  suggestion: {
    top: 83,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
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
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
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
  },
  upperChild: {
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: Color.beige_100,
    height: 447,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_2xl,
  },
  upperItem: {
    top: 368,
    left: 24,
    width: 327,
    height: 42,
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  searchDestinationItems: {
    top: 384,
    left: 64,
    fontSize: FontSize.size_sm,
    opacity: 0.3,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  iconlylightsearch: {
    height: "4.47%",
    width: "5.33%",
    top: "84.79%",
    right: "85.07%",
    bottom: "10.74%",
    left: "9.6%",
  },
  upper: {
    top: -292,
    height: 447,
    display: "none",
    width: 375,
    left: 0,
    position: "absolute",
  },
  menuBelowIcon: {
    top: 698,
    left: 18,
    width: 339,
    height: 68,
  },
  goodWishes: {
    top: "57.76%",
    left: "18.4%",
    fontSize: FontSize.size_8xl,
    letterSpacing: -0.5,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  bestOfLuck: {
    width: "77.33%",
    top: "65.89%",
    left: "12%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.3,
    color: Color.gray_1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.comfortaa,
  },
  introductionChild: {
    left: 194,
    width: 22,
    height: 4,
    borderRadius: Border.br_6xs,
    top: 626,
    backgroundColor: Color.beige_100,
    position: "absolute",
  },
  introductionItem: {
    left: 158,
  },
  introductionInner: {
    left: 176,
  },
  image3Icon: {
    width: 418,
    height: 296,
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
    color: Color.black,
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
  introduction: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default Introduction1;
