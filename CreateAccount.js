import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Margin } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.createAccount, styles.rectangleLayout]}>
      <View
        style={[
          styles.rectangle,
          styles.rectanglePosition,
          styles.rectangleLayout,
        ]}
      />
      <View style={[styles.createAccountChild, styles.createShadowBox]} />
      <View
        style={[
          styles.register,
          styles.registerLayout,
          styles.registerPosition1,
        ]}
      >
        <Text
          style={[
            styles.password,
            styles.passwordTypo,
            styles.passwordTypo1,
            styles.emailTypo,
            styles.passwordPosition,
          ]}
        >
          Password
        </Text>
      </View>
      <View style={[styles.createAccountItem, styles.createShadowBox]} />
      <View
        style={[
          styles.register1,
          styles.registerLayout,
          styles.registerPosition1,
        ]}
      >
        <Text
          style={[
            styles.password,
            styles.passwordTypo,
            styles.passwordTypo1,
            styles.emailTypo,
            styles.passwordPosition,
          ]}
        >
          Confirm Password
        </Text>
      </View>
      <View style={[styles.register2Position, styles.rectangleViewShadowBox]} />
      <View style={[styles.registerPosition, styles.register2Position]}>
        <Text
          style={[
            styles.email,
            styles.emailPosition,
            styles.passwordTypo,
            styles.passwordTypo1,
            styles.emailTypo,
          ]}
        >
          Email
        </Text>
      </View>
      <View style={[styles.register3Position, styles.rectangleViewShadowBox]} />
      <View style={[styles.register3Position, styles.registerPosition]}>
        <Text
          style={[
            styles.email,
            styles.emailPosition,
            styles.passwordTypo,
            styles.passwordTypo1,
            styles.emailTypo,
          ]}
        >
          Name
        </Text>
      </View>
      <View style={[styles.register4, styles.registerLayout]} />
      <Text
        style={[styles.createAccount1, styles.time1Clr, styles.passwordTypo]}
      >
        <Text style={styles.create}>{`Create `}</Text>
        <Text style={styles.account}>Account</Text>
      </Text>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.groupChild, styles.iconLayout, styles.emailPosition]}
          onPress={() => navigation.navigate("Home")}
        />
        <Image
          style={[styles.fichevronRightIcon, styles.passwordPosition]}
          resizeMode="cover"
          source={require("../assets/fichevronright.png")}
        />
      </View>
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union.png")}
      />
      <View style={[styles.register5, styles.registerLayout]} />
      <Text
        style={[
          styles.forgotYourPassword,
          styles.passwordTypo,
          styles.passwordTypo1,
        ]}
      >
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
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
        </View>
      </View>
      <View style={[styles.register6, styles.registerLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.createAccountChild1, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Pressable
        style={[styles.arrowChevronBigLeft, styles.timePosition]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow--chevron-big-left.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  rectanglePosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  createShadowBox: {
    height: 40,
    width: 293,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_sm,
    left: 38,
    position: "absolute",
    backgroundColor: Color.white,
  },
  registerLayout: {
    width: 148,
    height: 40,
    position: "absolute",
  },
  registerPosition1: {
    left: 66,
    width: 148,
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
  },
  passwordTypo1: {
    color: Color.gray_1100,
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
  },
  emailTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    color: Color.gray_1100,
  },
  passwordPosition: {
    top: "20%",
    position: "absolute",
  },
  rectangleViewShadowBox: {
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
  register2Position: {
    top: 401,
    height: 40,
    position: "absolute",
  },
  emailPosition: {
    left: "0%",
    position: "absolute",
  },
  registerPosition: {
    left: 62,
    width: 148,
  },
  time1Clr: {
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  ellipseIconLayout: {
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
  createAccountChild: {
    top: 461,
  },
  password: {
    left: "-3.38%",
  },
  register: {
    top: 465,
  },
  createAccountItem: {
    top: 522,
  },
  register1: {
    top: 526,
  },
  email: {
    top: "30%",
  },
  register3Position: {
    top: 343,
    height: 40,
    position: "absolute",
  },
  register4: {
    top: 354,
    left: 121,
  },
  create: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  account: {
    margin: Margin.m_sm,
  },
  createAccount1: {
    top: "27.09%",
    left: "10.13%",
    fontSize: FontSize.size_8xl,
    letterSpacing: -0.5,
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
    color: Color.black,
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
  fichevronRightIcon: {
    height: "58.33%",
    width: "58.33%",
    right: "18.33%",
    bottom: "21.67%",
    left: "23.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    height: "7.39%",
    width: "16%",
    top: "83.25%",
    right: "12.53%",
    bottom: "9.36%",
    left: "71.47%",
    position: "absolute",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  register5: {
    top: 727,
    left: 82,
  },
  forgotYourPassword: {
    top: "72.29%",
    left: "56%",
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.1,
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
    textAlign: "center",
    width: 54,
    left: 0,
  },
  time: {
    top: 8,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
  },
  register6: {
    top: 244,
    left: 77,
  },
  ellipseIcon: {
    left: 119,
  },
  createAccountChild1: {
    left: 0,
  },
  icon: {
    overflow: "hidden",
  },
  arrowChevronBigLeft: {
    top: 58,
    width: 24,
    height: 24,
  },
  createAccount: {
    borderRadius: Border.br_2xl,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
  },
});

export default CreateAccount;
