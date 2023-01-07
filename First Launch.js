import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FirstLaunch1 = () => {
  return (
    <View style={[styles.firstLaunch, styles.rectangleLayout]}>
      <View style={[styles.rectanglePosition, styles.rectangleLayout]} />
      <View style={[styles.register, styles.registerLayout]} />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union2.png")}
      />
      <View style={styles.homeIndicator} />
      <Image
        style={styles.pngtreeonlineOnlineOnlineT}
        resizeMode="cover"
        source={require("../assets/pngtreeonline-online-online-teaching-classroom-6183354-1.png")}
      />
      <View style={[styles.statusBar, styles.rectanglePosition]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
      <View style={[styles.register1, styles.registerLayout]} />
      <Image
        style={styles.logoWarnaBaru1}
        resizeMode="cover"
        source={require("../assets/logo-warna-baru-1.png")}
      />
      <View style={[styles.firstLaunchChild, styles.firstLayout]} />
      <View style={[styles.firstLaunchItem, styles.firstLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  registerLayout: {
    height: 40,
    width: 148,
    position: "absolute",
  },
  rectanglePosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  firstLayout: {
    height: 74,
    width: 75,
    borderRadius: Border.br_xs,
    left: 264,
    position: "absolute",
    backgroundColor: Color.white,
  },
  register: {
    top: 354,
    left: 121,
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 12,
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  pngtreeonlineOnlineOnlineT: {
    top: -44,
    left: -43,
    width: 463,
    height: 471,
    display: "none",
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
    color: Color.black,
    textAlign: "center",
    width: 54,
    left: 0,
    position: "absolute",
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
  register1: {
    top: 244,
    left: 77,
  },
  logoWarnaBaru1: {
    top: 319,
    left: 131,
    width: 112,
    height: 111,
    position: "absolute",
  },
  firstLaunchChild: {
    top: 676,
  },
  firstLaunchItem: {
    top: 587,
  },
  firstLaunch: {
    borderRadius: Border.br_2xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default FirstLaunch1;
