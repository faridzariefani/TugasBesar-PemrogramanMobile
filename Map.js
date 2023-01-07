import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.map, styles.mapShadowBox, styles.mapBg]}>
      <View style={[styles.rectangle, styles.mapChildPosition, styles.mapBg]} />
      <View style={styles.register} />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union2.png")}
      />
      <Image
        style={[styles.mapChild, styles.mapChildPosition]}
        resizeMode="cover"
        source={require("../assets/frame-11.png")}
      />
      <View style={styles.homeIndicator} />
      <Image
        style={styles.pngtreeonlineOnlineOnlineT}
        resizeMode="cover"
        source={require("../assets/pngtreeonline-online-online-teaching-classroom-6183354-1.png")}
      />
      <View style={[styles.statusBar, styles.mapChildPosition]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
      <View style={styles.back}>
        <Pressable
          style={[styles.backChild, styles.mapShadowBox]}
          onPress={() => navigation.navigate("HotelInformation")}
        />
        <Image
          style={styles.fichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/fichevronleft.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapShadowBox: {
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  mapBg: {
    backgroundColor: Color.white,
    height: 812,
  },
  mapChildPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangle: {
    height: 812,
  },
  register: {
    top: 354,
    left: 121,
    width: 148,
    height: 40,
    position: "absolute",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  mapChild: {
    height: 812,
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
  backChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.gray_500,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    position: "absolute",
  },
  fichevronLeftIcon: {
    top: 12,
    left: 10,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    height: "7.39%",
    width: "16%",
    top: "8.5%",
    right: "76%",
    bottom: "84.11%",
    left: "8%",
    position: "absolute",
  },
  map: {
    borderRadius: Border.br_2xl,
    shadowColor: "#000",
    shadowRadius: 9,
    elevation: 9,
    flex: 1,
    overflow: "hidden",
    height: 812,
  },
});

export default Map1;
