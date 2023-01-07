import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signIn, styles.signInLayout]}>
      <View
        style={[
          styles.rectangle,
          styles.rectanglePosition,
          styles.signInLayout,
        ]}
      />
      <View
        style={[
          styles.signInChild,
          styles.registerLayout,
          styles.signShadowBox,
        ]}
      />
      <View style={[styles.register, styles.registerLayout]}>
        <Text
          style={[
            styles.password,
            styles.passwordTypo,
            styles.emailTypo,
            styles.passwordPosition,
          ]}
        >
          Password
        </Text>
      </View>
      <View style={[styles.register1Position, styles.signShadowBox]} />
      <View style={[styles.register1, styles.register1Position]}>
        <Text
          style={[
            styles.email,
            styles.emailPosition,
            styles.passwordTypo,
            styles.emailTypo,
          ]}
        >
          Email
        </Text>
      </View>
      <Text style={[styles.signIn1, styles.time1Clr, styles.passwordTypo]}>
        Sign In
      </Text>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.groupChild, styles.iconLayout, styles.emailPosition]}
          onPress={() => navigation.navigate("Home")}
        />
        <TouchableOpacity
          style={[styles.fichevronRight, styles.passwordPosition]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union.png")}
      />
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.register2}>Register</Text>
      </Pressable>
      <View style={[styles.register3, styles.registerLayout]} />
      <Text style={[styles.forgotYourPassword, styles.passwordTypo]}>
        Forgot your Password ?
      </Text>
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
          <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
        </View>
      </View>
      <View style={[styles.register4, styles.registerLayout]} />
      <Image
        style={[styles.signInInner, styles.signInInnerLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-191.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.signInInnerLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-201.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  rectanglePosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  registerLayout: {
    height: 40,
    position: "absolute",
  },
  signShadowBox: {
    width: 293,
    elevation: 0,
    shadowRadius: 0,
    borderRadius: Border.br_sm,
    left: 38,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
  },
  emailTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.gray_1100,
  },
  passwordPosition: {
    top: "20%",
    position: "absolute",
  },
  register1Position: {
    top: 474,
    height: 40,
    position: "absolute",
  },
  emailPosition: {
    left: "0%",
    position: "absolute",
  },
  time1Clr: {
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  signInInnerLayout: {
    height: 310,
    width: 438,
    top: 0,
    position: "absolute",
  },
  rectangle: {
    height: 812,
    backgroundColor: Color.white,
    width: 375,
    top: 0,
  },
  signInChild: {
    top: 534,
  },
  password: {
    left: "-3.38%",
    color: Color.gray_1100,
  },
  register: {
    top: 538,
    left: 66,
    width: 148,
  },
  email: {
    top: "30%",
    color: Color.gray_1100,
  },
  register1: {
    left: 62,
    width: 148,
  },
  signIn1: {
    top: "47.78%",
    left: "10.13%",
    fontSize: FontSize.size_8xl,
    letterSpacing: -0.5,
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.gray_500,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: "100%",
    left: "0%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fichevronRight: {
    left: "23.33%",
    right: "18.33%",
    bottom: "21.67%",
    width: "58.33%",
    height: "58.33%",
  },
  rectangleParent: {
    height: "7.39%",
    width: "16%",
    top: "85.59%",
    right: "11.73%",
    bottom: "7.02%",
    left: "72.27%",
    position: "absolute",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  register2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 83,
    height: 36,
    textAlign: "center",
    color: Color.gray_1100,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_base,
  },
  signUp: {
    left: 33,
    top: 732,
    position: "absolute",
  },
  register3: {
    top: 727,
    left: 82,
    width: 148,
  },
  forgotYourPassword: {
    top: "72.29%",
    left: "56%",
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.1,
    color: Color.gray_1100,
    position: "absolute",
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
    width: 54,
    textAlign: "center",
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
  register4: {
    top: 244,
    left: 77,
    width: 148,
  },
  signInInner: {
    left: 119,
  },
  ellipseIcon: {
    left: 0,
  },
  signIn: {
    borderRadius: Border.br_2xl,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
  },
});

export default SignIn;
