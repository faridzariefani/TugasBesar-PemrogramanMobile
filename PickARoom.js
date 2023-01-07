import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PickARoom = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pickARoom, styles.icon5Layout]}>
      <View style={styles.bannerParent}>
        <Pressable
          style={[styles.banner, styles.bannerLayout]}
          onPress={() => navigation.navigate("BookingSummary1")}
        >
          <View
            style={[
              styles.bannerChild,
              styles.upperChildShadowBox,
              styles.childShadowBox,
              styles.bannerChildPosition,
            ]}
          />
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.bannerChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/intercontinentalbandung-1.png")}
          />
          <Text
            style={[
              styles.guestsRoom,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
              styles.twinBedPosition,
            ]}
          >
            2 guest(s) / room
          </Text>
          <Text style={[styles.kingBed, styles.kingBedTypo]}>1 king bed</Text>
          <Text style={[styles.night, styles.bedFlexBox]}>/night</Text>
          <Text style={[styles.rp2060000, styles.rp2060000Typo]}>
            Rp.2.060.000
          </Text>
          <Text style={styles.standard}>Standard</Text>
          <Image
            style={[styles.uusersAltIcon, styles.uusersIconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt4.png")}
          />
          <Image
            style={[styles.ubedDoubleIcon, styles.ubedIconLayout]}
            resizeMode="cover"
            source={require("../assets/ubeddouble.png")}
          />
        </Pressable>
        <View style={[styles.banner1, styles.bannerLayout]}>
          <View
            style={[
              styles.bannerChild,
              styles.upperChildShadowBox,
              styles.childShadowBox,
              styles.bannerChildPosition,
            ]}
          />
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.bannerChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/107690-2.png")}
          />
          <Text
            style={[
              styles.guestsRoom,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
              styles.twinBedPosition,
            ]}
          >
            2 guest(s) / room
          </Text>
          <Text
            style={[
              styles.twinBed,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
              styles.twinBedPosition,
            ]}
          >
            2 twin bed
          </Text>
          <Text style={[styles.night, styles.bedFlexBox]}>/night</Text>
          <Text style={[styles.rp2310000, styles.rp2060000Typo]}>
            Rp.2.310.000
          </Text>
          <Text style={styles.classicRoom}>Classic Room</Text>
          <Image
            style={[styles.uusersAltIcon, styles.uusersIconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt4.png")}
          />
          <Image
            style={[styles.ubedDoubleIcon, styles.ubedIconLayout]}
            resizeMode="cover"
            source={require("../assets/ubeddouble.png")}
          />
        </View>
        <View style={[styles.banner2, styles.bannerLayout]}>
          <View
            style={[
              styles.bannerChild,
              styles.upperChildShadowBox,
              styles.childShadowBox,
              styles.bannerChildPosition,
            ]}
          />
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.bannerChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/107715-1.png")}
          />
          <Text style={[styles.guests1Child, styles.kingBedTypo]}>
            2 guest(s), 1 Child
          </Text>
          <Text
            style={[
              styles.kingBed1,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
            ]}
          >
            1 king bed
          </Text>
          <Text style={[styles.night, styles.bedFlexBox]}>/night</Text>
          <Text style={[styles.rp2575000, styles.rp2060000Typo]}>
            Rp.2.575.000
          </Text>
          <Text style={styles.standard}>Premium</Text>
          <Image
            style={[styles.uusersAltIcon, styles.uusersIconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt4.png")}
          />
          <Image
            style={[styles.ubedDoubleIcon, styles.ubedIconLayout]}
            resizeMode="cover"
            source={require("../assets/ubeddouble.png")}
          />
        </View>
        <View style={[styles.banner3, styles.bannerLayout]}>
          <View
            style={[
              styles.bannerChild,
              styles.upperChildShadowBox,
              styles.childShadowBox,
              styles.bannerChildPosition,
            ]}
          />
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.bannerChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/107716-1.png")}
          />
          <Text
            style={[
              styles.guestsRoom,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
              styles.twinBedPosition,
            ]}
          >
            2 guest(s), 1 Child
          </Text>
          <Text style={[styles.kingBed, styles.kingBedTypo]}>
            1 full bed or 1 king bed
          </Text>
          <Text style={[styles.night, styles.bedFlexBox]}>/night</Text>
          <Text style={[styles.rp2310000, styles.rp2060000Typo]}>
            Rp3.340.000
          </Text>
          <Text style={styles.standard}>Deluxe</Text>
          <Image
            style={[styles.uusersAltIcon, styles.uusersIconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt4.png")}
          />
          <Image
            style={[styles.ubedDoubleIcon, styles.ubedIconLayout]}
            resizeMode="cover"
            source={require("../assets/ubeddouble.png")}
          />
        </View>
        <View style={[styles.banner4, styles.bannerLayout]}>
          <View
            style={[
              styles.bannerChild,
              styles.upperChildShadowBox,
              styles.childShadowBox,
              styles.bannerChildPosition,
            ]}
          />
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.bannerChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/107717-1.png")}
          />
          <Text style={[styles.guests1Child, styles.kingBedTypo]}>
            2 guest(s), 1 Child
          </Text>
          <Text
            style={[
              styles.kingBed1,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
            ]}
          >
            1 king bed
          </Text>
          <Text style={[styles.night, styles.bedFlexBox]}>/night</Text>
          <Text style={[styles.rp2310000, styles.rp2060000Typo]}>
            Rp4.260.000
          </Text>
          <Text style={styles.classicRoom}>Intercontinental Cl...</Text>
          <Image
            style={[styles.uusersAltIcon4, styles.uusersIconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt9.png")}
          />
          <Image
            style={[styles.ubedDoubleIcon4, styles.ubedIconLayout]}
            resizeMode="cover"
            source={require("../assets/ubeddouble5.png")}
          />
        </View>
        <View style={[styles.banner5, styles.bannerLayout]}>
          <View
            style={[
              styles.bannerChild,
              styles.upperChildShadowBox,
              styles.childShadowBox,
              styles.bannerChildPosition,
            ]}
          />
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.bannerChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/107718-1.png")}
          />
          <Text
            style={[
              styles.guestsRoom,
              styles.bedFlexBox,
              styles.bedClr,
              styles.bedTypo,
              styles.twinBedPosition,
            ]}
          >
            2 guest(s) , 1 Child
          </Text>
          <Text style={[styles.kingBed, styles.kingBedTypo]}>1 king bed</Text>
          <Text style={[styles.night, styles.bedFlexBox]}>/night</Text>
          <Text style={[styles.rp2575000, styles.rp2060000Typo]}>
            Rp.4.890.000
          </Text>
          <Text style={styles.classicRoom}>Panorama</Text>
          <Image
            style={[styles.uusersAltIcon, styles.uusersIconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt9.png")}
          />
          <Image
            style={[styles.ubedDoubleIcon, styles.ubedIconLayout]}
            resizeMode="cover"
            source={require("../assets/ubeddouble5.png")}
          />
        </View>
      </View>
      <View style={[styles.upper, styles.upperPosition, styles.upperPosition1]}>
        <View
          style={[
            styles.upperChild,
            styles.upperPosition,
            styles.upperChildShadowBox,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.june2021, styles.nightsTypo]}>10 June 2021</Text>
        <Text style={[styles.nights, styles.nightsTypo]}>1 night(s)</Text>
        <View
          style={[
            styles.upperItem,
            styles.upperPosition,
            styles.upperChildShadowBox,
          ]}
        />
        <Text style={[styles.selectRoom, styles.bedFlexBox, styles.bedClr]}>
          Select Room
        </Text>
        <Pressable
          style={[styles.fichevronLeft, styles.timePosition]}
          onPress={() => navigation.navigate("HotelInformation")}
        >
          <Image
            style={[styles.icon5, styles.icon5Layout]}
            resizeMode="cover"
            source={require("../assets/fichevronleft1.png")}
          />
        </Pressable>
        <Image
          style={[styles.umoonEclipseIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/umooneclipse.png")}
        />
        <Image
          style={[styles.ucalendarAltIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ucalendaralt.png")}
        />
      </View>
      <View style={[styles.tabBar, styles.upperPosition]}>
        <View style={styles.shape} />
      </View>
      <View
        style={[styles.statusBar, styles.upperPosition, styles.upperPosition1]}
      >
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.bedFlexBox, styles.bedClr]}>
            9:27
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon5Layout: {
    overflow: "hidden",
    width: "100%",
  },
  bannerLayout: {
    height: 120,
    left: 0,
    width: 306,
    position: "absolute",
  },
  upperChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  childShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  bannerChildPosition: {
    borderRadius: Border.br_xs,
    top: 0,
    height: 120,
    left: 0,
    position: "absolute",
  },
  bedFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  bedClr: {
    color: Color.black,
    textAlign: "center",
  },
  bedTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  twinBedPosition: {
    left: 170,
    fontSize: FontSize.size_xs,
  },
  kingBedTypo: {
    left: 171,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rp2060000Typo: {
    fontSize: FontSize.size_base,
    top: 82,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  uusersIconLayout: {
    height: 15,
    width: 15,
    left: 148,
    position: "absolute",
    overflow: "hidden",
  },
  ubedIconLayout: {
    height: 14,
    width: 14,
    left: 149,
    position: "absolute",
    overflow: "hidden",
  },
  upperPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  upperPosition1: {
    top: 0,
    width: 375,
  },
  nightsTypo: {
    fontSize: FontSize.size_xl,
    top: 169,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  bannerChild: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    width: 306,
  },
  intercontinentalBandung1Icon: {
    width: 137,
  },
  guestsRoom: {
    fontFamily: FontFamily.comfortaa,
    top: 29,
  },
  kingBed: {
    top: 47,
  },
  night: {
    top: 98,
    left: 256,
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.1,
    color: Color.gray_900,
    fontFamily: FontFamily.comfortaa,
  },
  rp2060000: {
    left: 208,
  },
  standard: {
    left: 148,
    top: 7,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  uusersAltIcon: {
    top: 28,
  },
  ubedDoubleIcon: {
    top: 46,
  },
  banner: {
    top: -15,
  },
  twinBed: {
    top: 47,
    fontFamily: FontFamily.comfortaa,
  },
  rp2310000: {
    left: 209,
  },
  classicRoom: {
    left: 149,
    top: 7,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  banner1: {
    top: 130,
  },
  guests1Child: {
    top: 29,
  },
  kingBed1: {
    left: 172,
    top: 47,
    fontFamily: FontFamily.comfortaa,
  },
  rp2575000: {
    left: 207,
  },
  banner2: {
    top: 272,
  },
  banner3: {
    top: 417,
  },
  uusersAltIcon4: {
    top: 588,
  },
  ubedDoubleIcon4: {
    top: 606,
  },
  banner4: {
    top: 560,
  },
  banner5: {
    top: 705,
  },
  bannerParent: {
    top: 241,
    left: 34,
    height: 524,
    width: 306,
    position: "absolute",
  },
  upperChild: {
    top: 58,
    height: 142,
    borderRadius: Border.br_2xl,
    width: 375,
    shadowRadius: 4,
  },
  june2021: {
    left: 79,
  },
  nights: {
    left: 248,
  },
  upperItem: {
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    height: 155,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    top: 0,
    borderRadius: Border.br_2xl,
  },
  selectRoom: {
    top: 87,
    left: 72,
    fontSize: FontSize.size_3xl,
    letterSpacing: -0.3,
    fontFamily: FontFamily.comfortaa,
  },
  icon5: {
    height: "100%",
  },
  fichevronLeft: {
    top: 75,
    width: 43,
    height: 43,
  },
  umoonEclipseIcon: {
    top: 166,
    left: 208,
  },
  ucalendarAltIcon: {
    top: 164,
    left: 45,
  },
  upper: {
    height: 200,
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
    color: Color.black,
  },
  time: {
    top: 8,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
  },
  pickARoom: {
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
    width: "100%",
    borderRadius: Border.br_2xl,
  },
});

export default PickARoom;
