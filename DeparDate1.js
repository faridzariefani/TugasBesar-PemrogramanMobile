import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DepartureDate1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.departureDate}>
      <View
        style={[
          styles.departureDateChild,
          styles.barPosition,
          styles.childShadowBox,
        ]}
      />
      <View style={[styles.departureDateItem, styles.departureShadowBox]} />
      <View style={[styles.departureDateInner, styles.departureShadowBox]} />
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={styles.shape} />
      </View>
      <View style={styles.up}>
        <Image
          style={styles.fichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/fichevronleft3.png")}
        />
        <Text
          style={[styles.jakarta, styles.time1FlexBox, styles.jakartaTypo]}
        >{`Jakarta  `}</Text>
        <Text style={[styles.results6, styles.results6Typo]}>Results 6</Text>
        <Text
          style={[styles.singapore, styles.time1FlexBox, styles.jakartaTypo]}
        >
          Singapore
        </Text>
        <Text style={[styles.thu10Juni, styles.results6Typo]}>
          Thu, 10 Juni 2021
        </Text>
        <Image
          style={styles.upChild}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
      </View>
      <View style={styles.flights1Parent}>
        <Pressable
          style={[styles.flights1, styles.flightsLayout]}
          onPress={() => navigation.navigate("DepartureDate")}
        >
          <View
            style={[
              styles.flights1Child,
              styles.flightsLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.flights1Item, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/arrow-1.png")}
          />
          <View style={[styles.flights1Inner, styles.innerShadowBox]} />
          <Image
            style={styles.singaporeAirlinesLogo1Icon}
            resizeMode="cover"
            source={require("../assets/singapore-airlines-logo-1.png")}
          />
          <Text style={[styles.rp780000, styles.rp780000Typo]}>Rp 780.000</Text>
          <Text style={[styles.text, styles.textPosition, styles.textFlexBox2]}>
            12:45
          </Text>
          <Text style={[styles.text1, styles.textFlexBox2]}>14:30</Text>
          <Text style={[styles.sin, styles.sinTypo, styles.sinPosition]}>
            SIN
          </Text>
          <Text style={[styles.cgk, styles.sinTypo, styles.sinPosition]}>
            CGK
          </Text>
          <Image
            style={[
              styles.uplaneIconLayout,
              styles.uplaneIconLayout1,
              styles.sinPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/uplanefly4.png")}
          />
        </Pressable>
        <View style={[styles.flights2, styles.flightsLayout]}>
          <View
            style={[
              styles.flights1Child,
              styles.flightsLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.flights2Item, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/arrow-1.png")}
          />
          <View style={[styles.flights2Inner, styles.innerShadowBox]} />
          <Image
            style={[styles.ga9001Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ga-900-1.png")}
          />
          <Text style={[styles.rp580000, styles.rp780000Typo]}>Rp 580.000</Text>
          <Text
            style={[styles.text2, styles.textFlexBox1, styles.textPosition]}
          >
            09:35
          </Text>
          <Text style={[styles.text3, styles.textFlexBox1]}>11:10</Text>
          <Text style={[styles.sin1, styles.sin1Position, styles.sinTypo]}>
            SIN
          </Text>
          <Text style={[styles.cgk1, styles.sin1Position, styles.sinTypo]}>
            CGK
          </Text>
          <Image
            style={[
              styles.sin1Position,
              styles.uplaneIconLayout,
              styles.uplaneIconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/uplanefly4.png")}
          />
        </View>
        <View style={[styles.flights3, styles.flightsLayout]}>
          <View
            style={[
              styles.flights1Child,
              styles.flightsLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.flights3Item, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/arrow-1.png")}
          />
          <View style={[styles.flights3Inner, styles.innerShadowBox]} />
          <Image
            style={[styles.ga9002Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ga-900-1.png")}
          />
          <Text
            style={[
              styles.rp5800001,
              styles.rp5800001Position,
              styles.rp780000Typo,
            ]}
          >
            Rp 580.000
          </Text>
          <Text style={[styles.text4, styles.textFlexBox]}>10:30</Text>
          <Text style={[styles.text5, styles.textFlexBox]}>11:50</Text>
          <Text style={[styles.sin2, styles.sin2Position, styles.sinTypo]}>
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
        <View style={[styles.flights4, styles.flightsLayout]}>
          <View
            style={[
              styles.flights1Child,
              styles.flightsLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.flights1Item, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/arrow-1.png")}
          />
          <View style={[styles.flights1Inner, styles.innerShadowBox]} />
          <Image
            style={[styles.airasiaXLogoAlt2Icon, styles.airasiaIconLayout]}
            resizeMode="cover"
            source={require("../assets/airasiaxlogoalt-2.png")}
          />
          <Text style={[styles.rp780000, styles.rp780000Typo]}>Rp 520.000</Text>
          <Text style={[styles.text, styles.textPosition, styles.textFlexBox2]}>
            12:55
          </Text>
          <Text style={[styles.text7, styles.textFlexBox2]}>14:25</Text>
          <Text style={[styles.sin, styles.sinTypo, styles.sinPosition]}>
            SIN
          </Text>
          <Text style={[styles.cgk, styles.sinTypo, styles.sinPosition]}>
            CGK
          </Text>
          <Image
            style={[styles.uplaneIconLayout1, styles.sinPosition]}
            resizeMode="cover"
            source={require("../assets/uplanefly4.png")}
          />
        </View>
        <View style={[styles.flights5, styles.flightsLayout]}>
          <View
            style={[
              styles.flights1Child,
              styles.flightsLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.flights5Item, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-11.png")}
          />
          <View style={[styles.flights2Inner, styles.innerShadowBox]} />
          <Text style={[styles.rp580000, styles.rp780000Typo]}>Rp 500.000</Text>
          <Text
            style={[styles.text2, styles.textFlexBox1, styles.textPosition]}
          >
            09:10
          </Text>
          <Text style={[styles.text9, styles.textFlexBox1]}>10:50</Text>
          <Text style={[styles.sin1, styles.sin1Position, styles.sinTypo]}>
            SIN
          </Text>
          <Text style={[styles.cgk1, styles.sin1Position, styles.sinTypo]}>
            CGK
          </Text>
          <Image
            style={[styles.uplaneIconLayout, styles.uplaneIconLayout1]}
            resizeMode="cover"
            source={require("../assets/uplanefly5.png")}
          />
          <Image
            style={[styles.airasiaXLogoAlt1Icon, styles.airasiaIconLayout]}
            resizeMode="cover"
            source={require("../assets/airasiaxlogoalt-2.png")}
          />
        </View>
        <View style={[styles.flights6, styles.flightsLayout]}>
          <View
            style={[
              styles.flights1Child,
              styles.flightsLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.flights6Item, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-11.png")}
          />
          <View style={[styles.flights6Inner, styles.innerShadowBox]} />
          <Image
            style={[styles.jetstarLogoLogotype1Icon, styles.rp5800001Position]}
            resizeMode="cover"
            source={require("../assets/jetstar-logo-logotype-1.png")}
          />
          <Text style={[styles.rp490000, styles.rp780000Typo]}>Rp 490.000</Text>
          <Text style={[styles.text4, styles.textFlexBox]}>07:00</Text>
          <Text style={[styles.text11, styles.textFlexBox]}>08:50</Text>
          <Text style={[styles.sin2, styles.sin2Position, styles.sinTypo]}>
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
            source={require("../assets/uplanefly5.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBar, styles.barPosition]}>
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
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
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
  time1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  jakartaTypo: {
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    top: 8,
  },
  results6Typo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  flightsLayout: {
    height: 155,
    width: 335,
    left: 0,
    position: "absolute",
  },
  itemLayout1: {
    height: 7,
    width: 92,
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
  rp780000Typo: {
    width: 128,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.white,
    fontWeight: "700",
    letterSpacing: 1.4,
    left: 179,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
  },
  textPosition: {
    left: 36,
    width: 52,
  },
  textFlexBox2: {
    top: 54,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: 1.4,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  sinTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_7xl,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  sinPosition: {
    top: 21,
    position: "absolute",
  },
  uplaneIconLayout1: {
    left: 148,
    height: 29,
    width: 29,
  },
  iconLayout: {
    width: 75,
    left: 29,
    height: 41,
    position: "absolute",
  },
  textFlexBox1: {
    top: 53,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: 1.4,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  sin1Position: {
    top: 20,
    position: "absolute",
  },
  uplaneIconLayout: {
    height: 29,
    width: 29,
    overflow: "hidden",
  },
  rp5800001Position: {
    top: 108,
    position: "absolute",
  },
  textFlexBox: {
    top: 56,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: 1.4,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  sin2Position: {
    top: 23,
    position: "absolute",
  },
  airasiaIconLayout: {
    height: 17,
    width: 78,
    position: "absolute",
  },
  itemLayout: {
    height: 0,
    width: 91,
    position: "absolute",
  },
  departureDateChild: {
    top: 37,
    height: 775,
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_xl,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  },
  fichevronLeftIcon: {
    width: 35,
    height: 35,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  jakarta: {
    left: 50,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xl,
  },
  results6: {
    top: 79,
    left: 22,
    color: Color.gray_1100,
  },
  singapore: {
    left: 167,
  },
  thu10Juni: {
    top: 32,
    color: Color.black,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    left: 50,
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
    height: 95,
    left: 21,
    top: 63,
    position: "absolute",
  },
  flights1Child: {
    borderRadius: Border.br_md,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 155,
  },
  flights1Item: {
    top: 61,
    left: 120,
  },
  flights1Inner: {
    top: 100,
  },
  singaporeAirlinesLogo1Icon: {
    top: 95,
    width: 96,
    height: 41,
    left: 31,
    position: "absolute",
  },
  rp780000: {
    top: 109,
    height: 23,
    position: "absolute",
  },
  text: {
    width: 52,
  },
  text1: {
    width: 49,
    left: 243,
  },
  sin: {
    left: 240,
  },
  cgk: {
    left: 29,
  },
  flights1: {
    top: 0,
  },
  flights2Item: {
    top: 60,
    left: 120,
  },
  flights2Inner: {
    top: 97,
  },
  ga9001Icon: {
    top: 96,
  },
  rp580000: {
    top: 106,
    height: 23,
    position: "absolute",
  },
  text2: {
    width: 52,
  },
  text3: {
    width: 49,
    left: 243,
  },
  sin1: {
    left: 240,
  },
  cgk1: {
    left: 29,
  },
  flights2: {
    top: 181,
  },
  flights3Item: {
    left: 122,
    top: 63,
    height: 7,
    width: 92,
  },
  flights3Inner: {
    top: 99,
  },
  ga9002Icon: {
    top: 97,
  },
  rp5800001: {
    height: 23,
  },
  text4: {
    left: 38,
    width: 52,
  },
  text5: {
    width: 49,
    left: 243,
  },
  sin2: {
    left: 240,
  },
  cgk2: {
    left: 31,
  },
  uplaneFlyIcon2: {
    left: 150,
  },
  flights3: {
    top: 362,
  },
  airasiaXLogoAlt2Icon: {
    top: 654,
    left: 31,
  },
  text7: {
    width: 50,
    left: 243,
  },
  flights4: {
    top: 543,
  },
  flights5Item: {
    top: 64,
    left: 120,
  },
  text9: {
    left: 244,
    width: 49,
  },
  airasiaXLogoAlt1Icon: {
    top: 107,
    left: 30,
  },
  flights5: {
    top: 724,
  },
  flights6Item: {
    top: 67,
    left: 122,
  },
  flights6Inner: {
    top: 103,
  },
  jetstarLogoLogotype1Icon: {
    width: 98,
    height: 27,
    left: 29,
  },
  rp490000: {
    top: 112,
    height: 23,
    position: "absolute",
  },
  text11: {
    width: 53,
    left: 240,
  },
  flights6: {
    top: 905,
  },
  flights1Parent: {
    top: 184,
    left: 20,
    height: 574,
    width: 335,
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
    width: 56,
    height: 23,
    top: 8,
    left: 21,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  departureDate: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default DepartureDate1;
