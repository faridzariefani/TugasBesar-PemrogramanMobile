import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.settingsLayout]}>
      <View style={styles.otherInformationParent}>
        <View style={[styles.otherInformation, styles.accountSecurityPosition]}>
          <Pressable
            style={[
              styles.otherInformationChild,
              styles.rectangleItemShadowBox,
              styles.rectangleChildBorder,
            ]}
            onPress={() => navigation.navigate("AboutUs")}
          />
          <View
            style={[
              styles.otherInformationItem,
              styles.rectangleItemShadowBox,
              styles.rectangleChildBorder,
            ]}
          />
          <Pressable
            style={[
              styles.otherInformationInner,
              styles.rectangleItemShadowBox,
              styles.rectangleChildBorder,
            ]}
            onPress={() => navigation.navigate("HelpFeedback")}
          />
          <View
            style={[
              styles.rectangleView,
              styles.rectangleItemShadowBox,
              styles.rectangleChildBorder,
            ]}
          />
          <Text style={[styles.text, styles.textTypo]}>1.00.2</Text>
          <Text style={[styles.appVersion, styles.aboutUsTypo]}>
            App Version
          </Text>
          <Text
            style={[styles.helpFeedback, styles.aboutUsTypo]}
          >{`Help & Feedback`}</Text>
          <Text style={[styles.privacyPolicy, styles.aboutUsTypo]}>
            Privacy Policy
          </Text>
          <Text style={[styles.others, styles.time1FlexBox, styles.othersTypo]}>
            Other’s
          </Text>
          <Text style={[styles.aboutUs, styles.aboutUsTypo]}>About Us</Text>
          <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../assets/logo.png")}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.fichevronIconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[
              styles.fichevronRightIcon1,
              styles.iconLayout,
              styles.fichevronIconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[
              styles.fichevronRightIcon2,
              styles.iconLayout,
              styles.fichevronIconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright22.png")}
          />
          <Pressable
            style={[
              styles.rectanglePressable,
              styles.rectangleItemShadowBox,
              styles.rectangleChildBorder,
            ]}
            onPress={() => navigation.navigate("SignIn")}
          />
          <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
          <Image
            style={[styles.fipowerIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/fipower.png")}
          />
        </View>
        <View style={[styles.accountSecurity, styles.accountSecurityPosition]}>
          <Text
            style={[styles.others, styles.time1FlexBox, styles.othersTypo]}
          >{`Account & Security`}</Text>
          <View
            style={[
              styles.accountSecurityChild,
              styles.rectangleItemShadowBox,
              styles.rectangleChildBorder,
            ]}
          />
          <Text style={[styles.accountDetails, styles.logOutTypo]}>
            Account Details
          </Text>
          <View
            style={[styles.accountSecurityItem, styles.rectangleItemShadowBox]}
          />
          <Text style={[styles.security, styles.logOutTypo]}>Security</Text>
          <Image
            style={[styles.accountSecurityInner, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Image
            style={[styles.fiuserIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/fiuser.png")}
          />
          <Image
            style={[styles.filockIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/filock.png")}
          />
        </View>
        <View style={styles.preferences}>
          <View
            style={[styles.preferencesChild, styles.preferencesShadowBox]}
          />
          <Text style={[styles.indonesia, styles.textTypo]}>Indonesia</Text>
          <Text style={[styles.country, styles.countryTypo]}>Country</Text>
          <View style={[styles.preferencesItem, styles.preferencesShadowBox]} />
          <Text style={[styles.rupiah, styles.textTypo]}>Rupiah</Text>
          <Text style={[styles.currency, styles.countryTypo]}>Currency</Text>
          <View
            style={[styles.preferencesInner, styles.preferencesShadowBox]}
          />
          <Text style={[styles.english, styles.textTypo]}>English</Text>
          <Text style={[styles.languange, styles.countryTypo]}>Languange</Text>
          <Text style={[styles.others, styles.time1FlexBox, styles.othersTypo]}>
            Preferences
          </Text>
          <Image
            style={[styles.fichevronRightIcon3, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[styles.fichevronRightIcon4, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[styles.fichevronRightIcon5, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.menuBelowIcon, styles.settingsLayout]}
        resizeMode="cover"
        source={require("../assets/menu-below9.png")}
      />
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.up, styles.upLayout]}>
        <View style={[styles.upChild, styles.upLayout]} />
        <Text
          style={[styles.settings1, styles.time1FlexBox, styles.othersTypo]}
        >
          Settings
        </Text>
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
  settingsLayout: {
    overflow: "hidden",
    width: "100%",
  },
  accountSecurityPosition: {
    left: 3,
    position: "absolute",
  },
  rectangleItemShadowBox: {
    height: 52,
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectangleChildBorder: {
    left: 1,
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_xs,
  },
  textTypo: {
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  aboutUsTypo: {
    left: 22,
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  othersTypo: {
    fontFamily: FontFamily.comfortaa,
    textAlign: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  fichevronIconPosition1: {
    left: 252,
    width: 24,
  },
  logOutTypo: {
    left: 65,
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 36,
    width: 36,
    left: 17,
    position: "absolute",
  },
  iconPosition: {
    left: 23,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  preferencesShadowBox: {
    left: 4,
    height: 52,
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  countryTypo: {
    left: 25,
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  fichevronIconPosition: {
    left: 255,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  upLayout: {
    height: 155,
    width: 375,
    position: "absolute",
  },
  otherInformationChild: {
    top: 200,
  },
  otherInformationItem: {
    top: 33,
  },
  otherInformationInner: {
    top: 89,
  },
  rectangleView: {
    top: 145,
  },
  text: {
    left: 217,
    top: 48,
  },
  appVersion: {
    top: 48,
  },
  helpFeedback: {
    top: 104,
  },
  privacyPolicy: {
    top: 160,
  },
  others: {
    fontSize: FontSize.size_3xl,
    letterSpacing: -0.3,
    left: 0,
    top: 0,
  },
  aboutUs: {
    top: 215,
  },
  logoIcon: {
    left: 96,
    width: 81,
    height: 191,
    top: 47,
    position: "absolute",
  },
  fichevronRightIcon: {
    top: 103,
  },
  fichevronRightIcon1: {
    top: 159,
  },
  fichevronRightIcon2: {
    top: 214,
  },
  rectanglePressable: {
    top: 277,
  },
  logOut: {
    top: 292,
  },
  fipowerIcon: {
    top: 684,
    left: 26,
  },
  otherInformation: {
    top: 393,
    width: 429,
    height: 329,
  },
  accountSecurityChild: {
    top: 36,
  },
  accountDetails: {
    top: 52,
  },
  accountSecurityItem: {
    top: 91,
    left: 0,
  },
  security: {
    top: 107,
  },
  accountSecurityInner: {
    top: 44,
  },
  ellipseIcon: {
    top: 99,
  },
  fiuserIcon: {
    top: 50,
  },
  filockIcon: {
    top: 104,
  },
  accountSecurity: {
    width: 283,
    height: 143,
    top: 0,
  },
  preferencesChild: {
    top: 33,
  },
  indonesia: {
    left: 179,
    top: 48,
  },
  country: {
    top: 48,
  },
  preferencesItem: {
    top: 89,
  },
  rupiah: {
    left: 200,
    top: 104,
  },
  currency: {
    top: 104,
  },
  preferencesInner: {
    top: 145,
  },
  english: {
    left: 197,
    top: 160,
  },
  languange: {
    top: 160,
  },
  fichevronRightIcon3: {
    top: 47,
  },
  fichevronRightIcon4: {
    top: 103,
  },
  fichevronRightIcon5: {
    top: 159,
  },
  preferences: {
    top: 170,
    width: 412,
    height: 197,
    left: 0,
    position: "absolute",
  },
  otherInformationParent: {
    top: 187,
    left: 41,
    width: 432,
    height: 478,
    position: "absolute",
  },
  menuBelowIcon: {
    height: "14.04%",
    top: "85.96%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
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
    height: 83,
  },
  upChild: {
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 155,
    borderRadius: Border.br_2xl,
  },
  settings1: {
    top: 82,
    left: 48,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
  },
  up: {
    top: -1,
    left: 2,
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
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  settings: {
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
