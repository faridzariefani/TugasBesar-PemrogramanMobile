import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DepartureDate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.departureDate}>
      <View style={[styles.departureDateChild, styles.childShadowBox]} />
      <View
        style={[styles.flights1, styles.flightsLayout, styles.flightsPosition]}
      >
        <View
          style={[
            styles.flights1Child,
            styles.statusBarPosition,
            styles.flightsLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={[styles.flights1Item, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <View style={[styles.flights1Inner, styles.innerShadowBox]} />
        <Image
          style={[
            styles.singaporeAirlinesLogo1Icon,
            styles.singaporeIconLayout,
            styles.singaporeIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/singapore-airlines-logo-1.png")}
        />
        <Text
          style={[
            styles.rp668000,
            styles.rp668000Typo,
            styles.rp668000Position,
          ]}
        >
          Rp 668.000
        </Text>
        <Text style={[styles.text, styles.textLayout1, styles.textFlexBox1]}>
          15:10
        </Text>
        <Text style={[styles.text1, styles.textLayout, styles.textFlexBox1]}>
          16:40
        </Text>
        <Text style={[styles.sinTypo, styles.sinPosition, styles.sinPosition1]}>
          SIN
        </Text>
        <Text style={[styles.cgkTypo, styles.sinPosition1]}>CGK</Text>
        <Image
          style={[
            styles.uplaneFlyIcon,
            styles.uplaneIconLayout,
            styles.uplaneIconLayout1,
            styles.sinPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/uplanefly4.png")}
        />
      </View>
      <View
        style={[styles.flights2, styles.flightsLayout, styles.flightsPosition]}
      >
        <View
          style={[
            styles.flights1Child,
            styles.statusBarPosition,
            styles.flightsLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={[styles.flights2Item, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <View style={[styles.flights2Inner, styles.innerShadowBox]} />
        <Image
          style={[
            styles.singaporeAirlinesLogo2Icon,
            styles.singaporeIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/singapore-airlines-logo-1.png")}
        />
        <Pressable
          style={[styles.rp670000, styles.rp668000Position]}
          onPress={() => navigation.navigate("Seat")}
        >
          <Text style={styles.rp668000Typo}>Rp 670.000</Text>
        </Pressable>
        <Text style={[styles.text2, styles.textLayout1]}>13:00</Text>
        <Text style={[styles.text3, styles.textFlexBox]}>14:50</Text>
        <Text style={[styles.sin1Position, styles.sinTypo, styles.sinPosition]}>
          SIN
        </Text>
        <Text style={[styles.sin1Position, styles.cgkTypo]}>CGK</Text>
        <Image
          style={[
            styles.uplaneFlyIcon1,
            styles.sin1Position,
            styles.uplaneIconLayout,
            styles.uplaneIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/uplanefly4.png")}
        />
      </View>
      <View
        style={[styles.flights3, styles.flightsLayout, styles.flightsPosition]}
      >
        <View
          style={[
            styles.flights1Child,
            styles.statusBarPosition,
            styles.flightsLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.flights3Item}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <View style={[styles.flights3Inner, styles.innerShadowBox]} />
        <Image
          style={[
            styles.singaporeAirlinesLogo3Icon,
            styles.singaporeIconLayout,
            styles.singaporeIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/singapore-airlines-logo-1.png")}
        />
        <Text
          style={[
            styles.rp675000,
            styles.rp668000Typo,
            styles.rp668000Position,
          ]}
        >
          Rp 675.000
        </Text>
        <Text style={[styles.textFlexBox, styles.textLayout1]}>16:20</Text>
        <Text style={[styles.text5, styles.textFlexBox, styles.textLayout]}>
          18:05
        </Text>
        <Text style={[styles.sin2Position, styles.sinTypo, styles.sinPosition]}>
          SIN
        </Text>
        <Text style={[styles.cgk2, styles.sin2Position, styles.sinTypo]}>
          CGK
        </Text>
        <Image
          style={[
            styles.uplaneFlyIcon2,
            styles.sin2Position,
            styles.uplaneIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/uplanefly4.png")}
        />
      </View>
      <View style={[styles.departureDateItem, styles.departureShadowBox]} />
      <View style={[styles.departureDateInner, styles.departureShadowBox]} />
      <View style={styles.tabBar}>
        <View style={styles.shape} />
      </View>
      <View style={styles.up}>
        <Image
          style={[styles.fichevronLeftIcon, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/fichevronleft3.png")}
        />
        <Text style={[styles.jakarta, styles.jakartaTypo]}>{`Jakarta  `}</Text>
        <Text style={[styles.results3, styles.results3Typo]}>Results 3</Text>
        <Text style={[styles.singapore, styles.jakartaTypo]}>Singapore</Text>
        <Text style={[styles.thu10Juni, styles.results3Typo]}>
          Thu, 10 Juni 2021
        </Text>
        <Image
          style={styles.upChild}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  flightsLayout: {
    height: 155,
    width: 335,
  },
  flightsPosition: {
    left: 20,
    width: 335,
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  itemLayout: {
    height: 7,
    width: 92,
    left: 120,
    position: "absolute",
  },
  innerShadowBox: {
    height: 39,
    width: 156,
    backgroundColor: Color.gray_500,
    left: 165,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  singaporeIconLayout: {
    height: 41,
    width: 96,
    position: "absolute",
  },
  singaporeIconLayout1: {
    left: 31,
    height: 41,
    width: 96,
  },
  rp668000Typo: {
    height: 23,
    width: 128,
    color: Color.white,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
  },
  rp668000Position: {
    left: 179,
    position: "absolute",
  },
  textLayout1: {
    width: 52,
    left: 44,
    height: 23,
  },
  textFlexBox1: {
    top: 54,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  textLayout: {
    width: 49,
    height: 23,
  },
  sinPosition: {
    left: 43,
    letterSpacing: -0.4,
    fontSize: FontSize.size_7xl,
  },
  sinPosition1: {
    top: 21,
    position: "absolute",
  },
  uplaneIconLayout: {
    height: 29,
    width: 29,
    overflow: "hidden",
  },
  uplaneIconLayout1: {
    left: 148,
    height: 29,
    width: 29,
  },
  textFlexBox: {
    top: 56,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  sinTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_7xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  cgkTypo: {
    left: 229,
    letterSpacing: -0.4,
    fontSize: FontSize.size_7xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  sin1Position: {
    top: 20,
    position: "absolute",
  },
  sin2Position: {
    top: 23,
    position: "absolute",
  },
  departureShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    top: 0,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_2xl,
  },
  jakartaTypo: {
    letterSpacing: -0.3,
    top: 8,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  results3Typo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  departureDateChild: {
    top: 37,
    height: 775,
    width: 375,
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  flights1Child: {
    borderRadius: Border.br_md,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    width: 335,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  flights1Item: {
    top: 61,
  },
  flights1Inner: {
    top: 100,
  },
  singaporeAirlinesLogo1Icon: {
    top: 95,
  },
  rp668000: {
    top: 109,
  },
  text: {
    color: Color.black,
  },
  text1: {
    left: 238,
    color: Color.black,
  },
  uplaneFlyIcon: {
    overflow: "hidden",
  },
  flights1: {
    top: 184,
  },
  flights2Item: {
    top: 60,
  },
  flights2Inner: {
    top: 97,
  },
  singaporeAirlinesLogo2Icon: {
    top: 93,
    left: 29,
  },
  rp670000: {
    top: 106,
  },
  text2: {
    top: 53,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
    width: 52,
    left: 44,
    textAlign: "center",
    position: "absolute",
  },
  text3: {
    left: 235,
    width: 53,
    height: 17,
  },
  uplaneFlyIcon1: {
    overflow: "hidden",
  },
  flights2: {
    top: 365,
  },
  flights3Item: {
    left: 122,
    top: 63,
    height: 7,
    width: 92,
    position: "absolute",
  },
  flights3Inner: {
    top: 99,
  },
  singaporeAirlinesLogo3Icon: {
    top: 94,
  },
  rp675000: {
    top: 108,
  },
  text5: {
    left: 240,
  },
  cgk2: {
    left: 231,
  },
  uplaneFlyIcon2: {
    left: 150,
    overflow: "hidden",
  },
  flights3: {
    top: 546,
  },
  departureDateItem: {
    height: 171,
    backgroundColor: Color.white,
  },
  departureDateInner: {
    backgroundColor: Color.beige_100,
    height: 130,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  fichevronLeftIcon: {
    width: 35,
    height: 35,
    overflow: "hidden",
  },
  jakarta: {
    left: 50,
  },
  results3: {
    top: 80,
    left: 22,
    color: Color.gray_1100,
  },
  singapore: {
    left: 167,
  },
  thu10Juni: {
    top: 32,
    left: 50,
    color: Color.black,
  },
  upChild: {
    top: 12,
    left: 134,
    width: 20,
    height: 11,
    position: "absolute",
  },
  up: {
    width: 262,
    height: 96,
    left: 21,
    top: 63,
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
    color: Color.black,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  time: {
    width: 56,
    top: 8,
    left: 21,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    width: 375,
  },
  departureDate: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default DepartureDate;
