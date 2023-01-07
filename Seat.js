import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Seat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.seat}>
      <View style={[styles.seatChild, styles.seatChildShadowBox]} />
      <View style={styles.rowSeat}>
        <View style={[styles.rowSeatChild, styles.rowLayout]} />
        <View style={[styles.rowSeatItem, styles.rowLayout]} />
        <View style={[styles.rowSeatInner, styles.rowLayout]} />
        <View style={[styles.rectangleView, styles.rowLayout]} />
        <View style={[styles.rowSeatChild1, styles.rowChildLayout8]} />
        <View style={[styles.rowSeatChild2, styles.rowChildLayout8]} />
        <View style={[styles.rowSeatChild3, styles.rowChildLayout8]} />
        <View style={[styles.rowSeatChild4, styles.rowChildLayout8]} />
        <View style={[styles.rowSeatChild5, styles.rowChildLayout7]} />
        <View style={[styles.rowSeatChild6, styles.rowChildLayout7]} />
        <View style={[styles.rowSeatChild7, styles.rowChildLayout7]} />
        <Pressable
          style={[styles.rectanglePressable, styles.rowChildLayout7]}
          onPress={() => navigation.navigate("BookingSummary")}
        />
        <View style={[styles.rowSeatChild8, styles.rowChildLayout6]} />
        <View style={[styles.rowSeatChild9, styles.rowChildLayout6]} />
        <View style={[styles.rowSeatChild10, styles.rowChildLayout6]} />
        <View style={[styles.rowSeatChild11, styles.rowChildLayout6]} />
        <View style={[styles.rowSeatChild12, styles.rowChildLayout5]} />
        <View style={[styles.rowSeatChild13, styles.rowChildLayout5]} />
        <View style={[styles.rowSeatChild14, styles.rowChildLayout5]} />
        <View style={[styles.rowSeatChild15, styles.rowChildLayout5]} />
        <View style={[styles.rowSeatChild16, styles.rowChildLayout4]} />
        <View style={[styles.rowSeatChild17, styles.rowChildLayout4]} />
        <View style={[styles.rowSeatChild18, styles.rowChildLayout4]} />
        <View style={[styles.rowSeatChild19, styles.rowChildLayout4]} />
        <View style={[styles.rowSeatChild20, styles.rowChildLayout3]} />
        <View style={[styles.rowSeatChild21, styles.rowChildLayout3]} />
        <View style={[styles.rowSeatChild22, styles.rowChildLayout3]} />
        <View style={[styles.rowSeatChild23, styles.rowChildLayout3]} />
        <View style={[styles.rowSeatChild24, styles.rowChildLayout2]} />
        <View style={[styles.rowSeatChild25, styles.rowChildLayout2]} />
        <View style={[styles.rowSeatChild26, styles.rowChildLayout2]} />
        <View style={[styles.rowSeatChild27, styles.rowChildLayout2]} />
        <View style={[styles.rowSeatChild28, styles.rowChildLayout1]} />
        <View style={[styles.rowSeatChild29, styles.rowChildLayout1]} />
        <View style={[styles.rowSeatChild30, styles.rowChildLayout1]} />
        <View style={[styles.rowSeatChild31, styles.rowChildLayout1]} />
        <View style={[styles.rowSeatChild32, styles.rowChildLayout]} />
        <View style={[styles.rowSeatChild33, styles.rowChildLayout]} />
        <View style={[styles.rowSeatChild34, styles.rowChildLayout]} />
        <View style={[styles.rowSeatChild35, styles.rowChildLayout]} />
        <Text
          style={[
            styles.text,
            styles.textFlexBox,
            styles.textTypo1,
            styles.textTypo2,
          ]}
        >
          1
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>2</Text>
        <Text style={[styles.text2, styles.textTypo]}>3</Text>
        <Text style={[styles.text3, styles.textTypo]}>4</Text>
        <Text style={[styles.text4, styles.textTypo]}>5</Text>
        <Text style={[styles.text5, styles.textTypo]}>6</Text>
        <Text style={[styles.text6, styles.textTypo]}>7</Text>
        <Text style={[styles.text7, styles.textTypo]}>8</Text>
        <Text style={[styles.text8, styles.textTypo]}>9</Text>
        <Text
          style={[
            styles.text9,
            styles.textFlexBox,
            styles.textTypo1,
            styles.textTypo2,
          ]}
        >
          10
        </Text>
        <Image
          style={[styles.fixIcon, styles.fixIconLayout, styles.fixIconLayout1]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon1, styles.fixIconPosition5]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon2, styles.fixIconPosition5]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon3, styles.fixIconLayout, styles.fixIconLayout1]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon4, styles.fixIconLayout]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon5, styles.fixIconPosition4]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon6, styles.fixIconPosition4]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon7, styles.fixIconLayout, styles.fixIconLayout1]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon8, styles.fixIconPosition5]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon9, styles.fixIconLayout, styles.fixIconLayout1]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon10, styles.fixIconPosition4]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon11, styles.fixIconPosition4]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon12, styles.fixIconPosition3]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon13, styles.fixIconPosition3]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon14, styles.fixIconPosition3]}
          resizeMode="cover"
          source={require("../assets/fix.png")}
        />
        <Image
          style={[styles.fixIcon15, styles.fixIconPosition2]}
          resizeMode="cover"
          source={require("../assets/fix15.png")}
        />
        <Image
          style={[styles.fixIcon16, styles.fixIconPosition1]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon17, styles.fixIconPosition1]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon18, styles.fixIconPosition2]}
          resizeMode="cover"
          source={require("../assets/fix15.png")}
        />
        <Image
          style={[styles.fixIcon19, styles.fixIconLayout]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon20, styles.fixIconLayout]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon21, styles.fixIconPosition2]}
          resizeMode="cover"
          source={require("../assets/fix15.png")}
        />
        <Image
          style={[styles.fixIcon22, styles.fixIconPosition1]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon23, styles.fixIconPosition2]}
          resizeMode="cover"
          source={require("../assets/fix15.png")}
        />
        <Image
          style={[styles.fixIcon24, styles.fixIconPosition]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon25, styles.fixIconPosition]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon26, styles.fixIconPosition]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
        <Image
          style={[styles.fixIcon27, styles.fixIconPosition]}
          resizeMode="cover"
          source={require("../assets/fix16.png")}
        />
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.barLayout]} />
        <View style={[styles.up, styles.upLayout]}>
          <Image
            style={[styles.fichevronLeftIcon, styles.upLayout]}
            resizeMode="cover"
            source={require("../assets/fichevronleft3.png")}
          />
          <Text style={[styles.seat1, styles.seat1Typo, styles.timePosition]}>
            Seat
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View
            style={[
              styles.groupItem,
              styles.groupPosition,
              styles.seatChildShadowBox,
            ]}
          />
          <Image
            style={[styles.unnamed1Icon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/unnamed-13.png")}
          />
          <Text
            style={[
              styles.singaporeAirlines,
              styles.groupPosition,
              styles.seat1Typo,
            ]}
          >
            Singapore Airlines
          </Text>
          <Text
            style={[
              styles.ecenomyClass,
              styles.groupPosition,
              styles.textFlexBox,
              styles.textTypo1,
            ]}
          >
            Ecenomy Class
          </Text>
          <Text style={[styles.a, styles.aPosition]}>A</Text>
          <Text style={[styles.b, styles.aPosition]}>B</Text>
          <Text style={[styles.c, styles.aPosition]}>C</Text>
          <Text style={[styles.d, styles.aPosition]}>D</Text>
        </View>
      </View>
      <View style={[styles.seatInner, styles.seatInnerLayout]}>
        <View style={[styles.frameChild, styles.seatInnerLayout]} />
      </View>
      <View style={[styles.statusBar, styles.barLayout]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.textFlexBox]}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seatChildShadowBox: {
    width: 383,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  rowLayout: {
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 83,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout8: {
    top: 91,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout7: {
    top: 181,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rowChildLayout6: {
    top: 272,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout5: {
    top: 364,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout4: {
    top: 457,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout3: {
    top: 548,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout2: {
    top: 638,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout1: {
    top: 729,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rowChildLayout: {
    top: 821,
    height: 83,
    width: 58,
    borderWidth: 4,
    borderColor: "#85978e",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  textTypo1: {
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    color: Color.black,
  },
  textTypo2: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  textTypo: {
    left: 2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  fixIconLayout: {
    height: 71,
    width: 45,
    overflow: "hidden",
    position: "absolute",
  },
  fixIconLayout1: {
    top: 6,
    height: 71,
    width: 45,
  },
  fixIconPosition5: {
    top: 97,
    overflow: "hidden",
    height: 71,
    width: 45,
    position: "absolute",
  },
  fixIconPosition4: {
    top: 279,
    overflow: "hidden",
    height: 71,
    width: 45,
    position: "absolute",
  },
  fixIconPosition3: {
    top: 371,
    overflow: "hidden",
    height: 71,
    width: 45,
    position: "absolute",
  },
  fixIconPosition2: {
    top: 463,
    overflow: "hidden",
    height: 71,
    width: 45,
    position: "absolute",
  },
  fixIconPosition1: {
    top: 862,
    overflow: "hidden",
    height: 71,
    width: 45,
    position: "absolute",
  },
  fixIconPosition: {
    top: 1136,
    overflow: "hidden",
    height: 71,
    width: 45,
    position: "absolute",
  },
  barLayout: {
    width: 375,
    position: "absolute",
  },
  upLayout: {
    height: 35,
    position: "absolute",
  },
  seat1Typo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  timePosition: {
    top: 8,
    position: "absolute",
  },
  groupPosition: {
    left: "50%",
    position: "absolute",
  },
  aPosition: {
    bottom: 12,
    left: "50%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  seatInnerLayout: {
    height: 481,
    width: 317,
    position: "absolute",
  },
  seatChild: {
    top: 130,
    left: -5,
    height: 683,
    position: "absolute",
  },
  rowSeatChild: {
    height: 83,
    left: 29,
  },
  rowSeatItem: {
    left: 99,
    height: 83,
  },
  rowSeatInner: {
    left: 191,
    height: 83,
  },
  rectangleView: {
    left: 259,
    height: 83,
  },
  rowSeatChild1: {
    left: 29,
  },
  rowSeatChild2: {
    left: 99,
  },
  rowSeatChild3: {
    left: 191,
  },
  rowSeatChild4: {
    left: 259,
  },
  rowSeatChild5: {
    left: 29,
    backgroundColor: Color.white,
  },
  rowSeatChild6: {
    left: 99,
    backgroundColor: Color.white,
  },
  rowSeatChild7: {
    left: 191,
    backgroundColor: Color.white,
  },
  rectanglePressable: {
    backgroundColor: Color.gray_500,
    left: 259,
  },
  rowSeatChild8: {
    left: 29,
  },
  rowSeatChild9: {
    left: 99,
  },
  rowSeatChild10: {
    left: 191,
  },
  rowSeatChild11: {
    left: 259,
  },
  rowSeatChild12: {
    left: 29,
  },
  rowSeatChild13: {
    left: 99,
  },
  rowSeatChild14: {
    left: 191,
  },
  rowSeatChild15: {
    left: 259,
  },
  rowSeatChild16: {
    left: 29,
  },
  rowSeatChild17: {
    left: 99,
  },
  rowSeatChild18: {
    left: 191,
  },
  rowSeatChild19: {
    left: 259,
  },
  rowSeatChild20: {
    left: 29,
  },
  rowSeatChild21: {
    left: 99,
  },
  rowSeatChild22: {
    left: 191,
  },
  rowSeatChild23: {
    left: 259,
  },
  rowSeatChild24: {
    left: 29,
  },
  rowSeatChild25: {
    left: 99,
  },
  rowSeatChild26: {
    left: 191,
  },
  rowSeatChild27: {
    left: 259,
  },
  rowSeatChild28: {
    left: 29,
  },
  rowSeatChild29: {
    left: 99,
  },
  rowSeatChild30: {
    left: 191,
  },
  rowSeatChild31: {
    left: 259,
  },
  rowSeatChild32: {
    left: 29,
  },
  rowSeatChild33: {
    left: 99,
  },
  rowSeatChild34: {
    left: 191,
  },
  rowSeatChild35: {
    left: 259,
  },
  text: {
    top: 33,
    left: 4,
  },
  text1: {
    top: 124,
  },
  text2: {
    top: 214,
  },
  text3: {
    top: 305,
  },
  text4: {
    top: 397,
  },
  text5: {
    top: 492,
  },
  text6: {
    top: 583,
  },
  text7: {
    top: 673,
  },
  text8: {
    top: 764,
  },
  text9: {
    top: 856,
    left: 0,
  },
  fixIcon: {
    overflow: "hidden",
    left: 36,
  },
  fixIcon1: {
    left: 106,
  },
  fixIcon2: {
    left: 36,
  },
  fixIcon3: {
    left: 106,
    overflow: "hidden",
  },
  fixIcon4: {
    top: 188,
    overflow: "hidden",
    left: 36,
  },
  fixIcon5: {
    left: 106,
  },
  fixIcon6: {
    left: 36,
  },
  fixIcon7: {
    left: 198,
    overflow: "hidden",
  },
  fixIcon8: {
    left: 268,
  },
  fixIcon9: {
    left: 268,
    overflow: "hidden",
  },
  fixIcon10: {
    left: 268,
  },
  fixIcon11: {
    left: 198,
  },
  fixIcon12: {
    left: 36,
  },
  fixIcon13: {
    left: 268,
  },
  fixIcon14: {
    left: 198,
  },
  fixIcon15: {
    left: 36,
  },
  fixIcon16: {
    left: 120,
  },
  fixIcon17: {
    left: 50,
  },
  fixIcon18: {
    left: 106,
  },
  fixIcon19: {
    top: 953,
    left: 50,
    overflow: "hidden",
  },
  fixIcon20: {
    top: 1044,
    left: 50,
    overflow: "hidden",
  },
  fixIcon21: {
    left: 198,
  },
  fixIcon22: {
    left: 282,
  },
  fixIcon23: {
    left: 268,
  },
  fixIcon24: {
    left: 120,
  },
  fixIcon25: {
    left: 50,
  },
  fixIcon26: {
    left: 282,
  },
  fixIcon27: {
    left: 212,
  },
  rowSeat: {
    top: 308,
    height: 904,
    width: 317,
    left: 14,
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
    left: 0,
    height: 83,
  },
  groupChild: {
    left: 18,
    backgroundColor: Color.beige_100,
    height: 214,
    top: 0,
    borderRadius: Border.br_2xl,
  },
  fichevronLeftIcon: {
    width: 35,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  seat1: {
    left: 55,
  },
  up: {
    top: 63,
    left: 39,
    width: 97,
  },
  groupItem: {
    marginLeft: -185,
    height: 159,
    bottom: 0,
  },
  unnamed1Icon: {
    marginLeft: -180,
    bottom: 21,
    width: 195,
    height: 146,
  },
  singaporeAirlines: {
    marginLeft: -40,
    bottom: 91,
  },
  ecenomyClass: {
    marginLeft: -39,
    bottom: 70,
    fontSize: FontSize.size_base,
  },
  a: {
    marginLeft: -114,
  },
  b: {
    marginLeft: -44,
  },
  c: {
    marginLeft: 48,
  },
  d: {
    marginLeft: 116,
  },
  rectangleGroup: {
    marginLeft: -198,
    height: 167,
    width: 396,
    bottom: 0,
  },
  rectangleParent: {
    left: -18,
    height: 289,
    width: 396,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    top: 0,
  },
  seatInner: {
    top: 297,
    left: 14,
    height: 481,
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
    position: "absolute",
  },
  time: {
    left: 21,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
    left: 0,
    top: 0,
  },
  seat: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default Seat;
