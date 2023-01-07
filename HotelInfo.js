import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HotelInformation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.hotelInformation, styles.tabBarChildLayout]}>
      <View style={[styles.nameParent, styles.nameLayout]}>
        <View style={[styles.name, styles.nameLayout]}>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("Map")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/107686-1.png")}
            />
          </Pressable>
          <View style={[styles.nameChild, styles.nameChildLayout]} />
          <View style={[styles.nameItem, styles.nameChildLayout]} />
          <View style={[styles.nameInner, styles.nameChildLayout]} />
          <View style={[styles.starView, styles.nameChildLayout]} />
          <View style={[styles.nameChild1, styles.nameChildLayout]} />
          <Text
            style={[
              styles.intercontinentalBandungDago,
              styles.selectRoomFlexBox,
              styles.bandungFlexBox,
              styles.dagoTypo,
            ]}
          >
            InterContinental Bandung Dago Pakar is the splendid choice for you
            who are seeking a luxurious treat for your holiday. Get pampered
            with the most excellent services.
          </Text>
          <Text style={[styles.dagoBandung, styles.checkClr, styles.dagoTypo]}>
            Dago, Bandung
          </Text>
          <Text
            style={[styles.intercontinental, styles.checkClr]}
          >{`Intercontinental `}</Text>
          <Text style={[styles.facilities, styles.checkClr, styles.dagoTypo]}>
            Facilities
          </Text>
          <Image
            style={[styles.ulocationPointIcon, styles.ulocationLayout]}
            resizeMode="cover"
            source={require("../assets/ulocationpoint1.png")}
          />
          <Pressable
            style={[styles.ulocationPoint, styles.ulocationLayout]}
            onPress={() => navigation.navigate("Search")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/ulocationpoint2.png")}
            />
          </Pressable>
          <Image
            style={[styles.uswimmerIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uswimmer.png")}
          />
          <Image
            style={[styles.ucarIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uswimmer.png")}
          />
          <Image
            style={[styles.ucrockeryIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uswimmer.png")}
          />
          <Image
            style={[styles.uaccessibleIconAlt, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uswimmer.png")}
          />
          <Image
            style={[styles.ulaptopIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uswimmer.png")}
          />
          <Text
            style={[styles.checkInCheckOut, styles.checkClr, styles.dagoTypo]}
          >
            Check-in / Check-out Time
          </Text>
          <Text
            style={[styles.checkIn, styles.checkInTypo]}
          >{`Check-in `}</Text>
          <Text style={[styles.checkOut, styles.checkOutTypo]}>Check-out</Text>
          <Text style={[styles.from1500, styles.checkInTypo]}>from 15:00</Text>
          <Text style={[styles.before1200, styles.checkOutTypo]}>
            before 12:00
          </Text>
        </View>
        <Image
          style={styles.filledBookmarkIcon}
          resizeMode="cover"
          source={require("../assets/filled-bookmark.png")}
        />
      </View>
      <View style={styles.hotelInformationChild} />
      <View
        style={[
          styles.interconSlideHome011Parent,
          styles.interconSlideHome011ParentLayout,
        ]}
      >
        <Image
          style={[styles.interconSlideHome011Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/interconslidehome01-1.png")}
        />
        <Image
          style={[
            styles.img1008IndonesiaJavaIntercIcon,
            styles.interconSlideHome011ParentLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/img-1008indonesiajavaintercontinentalhotelbandungreview0021024x683-1.png")}
        />
        <Image
          style={[styles.intercontinentalBandung1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/intercontinentalbandung-12.png")}
        />
        <Image
          style={[styles.intercontinentalBandung11, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/intercontinentalbandung-12.png")}
        />
      </View>
      <View style={[styles.tabBar, styles.barPosition]}>
        <View
          style={[
            styles.tabBarChild,
            styles.tabChildShadowBox,
            styles.tabBarChildLayout,
          ]}
        />
        <Pressable
          style={[styles.tabBarItem, styles.tabChildShadowBox]}
          onPress={() => navigation.navigate("PickARoom")}
        />
        <Text
          style={[
            styles.selectRoom,
            styles.bandungTypo,
            styles.selectRoomFlexBox,
          ]}
        >
          Select Room
        </Text>
        <View style={styles.shape} />
      </View>
      <View style={styles.groupChildPosition}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.tabChildShadowBox,
          ]}
        />
        <Pressable
          style={[styles.fichevronLeft, styles.timePosition]}
          onPress={() => navigation.navigate("PickAHotel")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/fichevronleft1.png")}
          />
        </Pressable>
        <Text
          style={[styles.bandung, styles.bandungTypo, styles.bandungFlexBox]}
        >
          Bandung
        </Text>
        <View style={[styles.statusBar, styles.barPosition]}>
          <Image
            style={styles.connectionsIcon}
            resizeMode="cover"
            source={require("../assets/connections.png")}
          />
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.time1, styles.checkClr]}>9:27</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarChildLayout: {
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
  nameLayout: {
    width: 342,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  nameChildLayout: {
    height: 25,
    width: 25,
    backgroundColor: Color.gold,
    borderRadius: Border.br_7xs,
    top: 40,
    position: "absolute",
  },
  selectRoomFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  bandungFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  dagoTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.comfortaa,
  },
  checkClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  ulocationLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout1: {
    height: 40,
    width: 40,
    top: 419,
    position: "absolute",
    overflow: "hidden",
  },
  checkInTypo: {
    top: 527,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  checkOutTypo: {
    top: 557,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  interconSlideHome011ParentLayout: {
    height: 195,
    position: "absolute",
  },
  iconLayout: {
    width: 339,
    height: 195,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  tabChildShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bandungTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  groupChildPosition: {
    height: 137,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xs,
  },
  pressable: {
    left: 37,
    top: 222,
    width: 264,
    height: 128,
    position: "absolute",
  },
  nameChild: {
    left: 0,
  },
  nameItem: {
    left: 23,
  },
  nameInner: {
    left: 46,
  },
  starView: {
    left: 69,
  },
  nameChild1: {
    left: 92,
  },
  intercontinentalBandungDago: {
    top: 125,
    width: 338,
    fontFamily: FontFamily.comfortaa,
    left: 4,
    position: "absolute",
  },
  dagoBandung: {
    top: 77,
    left: 31,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  intercontinental: {
    fontSize: FontSize.size_6xl,
    letterSpacing: -0.4,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    left: 4,
    top: 0,
  },
  facilities: {
    top: 385,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    left: 4,
  },
  ulocationPointIcon: {
    top: 73,
    left: 0,
    overflow: "hidden",
  },
  icon1: {
    overflow: "hidden",
  },
  ulocationPoint: {
    left: 297,
    top: 37,
  },
  uswimmerIcon: {
    left: 27,
  },
  ucarIcon: {
    left: 149,
  },
  ucrockeryIcon: {
    left: 88,
  },
  uaccessibleIconAlt: {
    left: 271,
  },
  ulaptopIcon: {
    left: 210,
  },
  checkInCheckOut: {
    top: 497,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    left: 4,
  },
  checkIn: {
    left: 12,
  },
  checkOut: {
    left: 13,
  },
  from1500: {
    left: 245,
  },
  before1200: {
    left: 232,
  },
  name: {
    height: 573,
    left: 0,
    top: 0,
  },
  filledBookmarkIcon: {
    height: "9.54%",
    width: "7.81%",
    top: "0%",
    right: "5.94%",
    bottom: "90.46%",
    left: "86.26%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameParent: {
    top: 408,
    height: 256,
    left: 19,
  },
  hotelInformationChild: {
    top: 137,
    shadowRadius: 4,
    elevation: 4,
    width: 376,
    height: 234,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  interconSlideHome011Icon: {
    left: 0,
  },
  img1008IndonesiaJavaIntercIcon: {
    left: 357,
    width: 337,
    borderRadius: Border.br_xs,
    top: 0,
  },
  intercontinentalBandung1Icon: {
    left: 714,
  },
  intercontinentalBandung11: {
    left: 1073,
  },
  interconSlideHome011Parent: {
    top: 157,
    width: 357,
    left: 19,
  },
  tabBarChild: {
    height: "134.94%",
    top: "-34.94%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  tabBarItem: {
    bottom: 66,
    left: 55,
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_500,
    width: 268,
    height: 46,
    position: "absolute",
  },
  selectRoom: {
    width: "47.73%",
    top: "-19.28%",
    left: "26.67%",
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
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
  },
  groupChild: {
    backgroundColor: Color.beige_100,
    borderRadius: Border.br_2xl,
    height: 137,
    shadowRadius: 0,
  },
  fichevronLeft: {
    top: 75,
    width: 43,
    height: 43,
  },
  bandung: {
    top: 87,
    left: 73,
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
    textAlign: "center",
    left: 0,
  },
  time: {
    top: 8,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  hotelInformation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default HotelInformation;
