import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const HelpFeedback = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.helpFeedback}>
      <Image
        style={[styles.ubusIcon, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/ubus11.png")}
      />
      <View style={styles.text2}>
        <View style={[styles.view, styles.viewLayout1, styles.viewPosition1]}>
          <View
            style={[
              styles.child,
              styles.childShadowBox,
              styles.childLayout,
              styles.viewLayout1,
            ]}
          />
          <Image
            style={[
              styles.figlobeIcon,
              styles.figlobeIconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/figlobe.png")}
          />
          <Image
            style={[styles.fichevronRightIcon, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.generalInformation,
              styles.usersTypo,
              styles.usersTypo1,
              styles.usersPosition,
            ]}
          >
            General Information
          </Text>
        </View>
        <View style={[styles.view1, styles.viewPosition]}>
          <View
            style={[
              styles.child,
              styles.childShadowBox,
              styles.childLayout,
              styles.viewLayout1,
            ]}
          />
          <Image
            style={[styles.fichevronRightIcon, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[
              styles.fiuserIcon,
              styles.fiuserIconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/fiuser.png")}
          />
          <Text
            style={[
              styles.users,
              styles.usersTypo,
              styles.usersTypo1,
              styles.usersPosition,
            ]}
          >
            Users
          </Text>
        </View>
        <View style={[styles.view2, styles.viewLayout1]}>
          <View
            style={[
              styles.child,
              styles.childShadowBox,
              styles.childLayout,
              styles.viewLayout1,
            ]}
          />
          <Image
            style={[styles.fichevronRightIcon, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[
              styles.figlobeIcon,
              styles.figlobeIconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/uplanefly24.png")}
          />
          <Text
            style={[
              styles.generalInformation,
              styles.usersTypo,
              styles.usersTypo1,
              styles.usersPosition,
            ]}
          >
            Flights
          </Text>
        </View>
        <View style={[styles.view3, styles.viewPosition]}>
          <View
            style={[
              styles.child,
              styles.childShadowBox,
              styles.childLayout,
              styles.viewLayout1,
            ]}
          />
          <Image
            style={[styles.fichevronRightIcon, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.users,
              styles.usersTypo,
              styles.usersTypo1,
              styles.usersPosition,
            ]}
          >
            Hotels
          </Text>
          <Image
            style={[
              styles.fiuserIcon,
              styles.fiuserIconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ubed6.png")}
          />
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View
            style={[
              styles.child,
              styles.childShadowBox,
              styles.childLayout,
              styles.viewLayout1,
            ]}
          />
          <Image
            style={[styles.fichevronRightIcon, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Image
            style={[
              styles.figlobeIcon,
              styles.figlobeIconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/umetro6.png")}
          />
          <Text
            style={[
              styles.generalInformation,
              styles.usersTypo,
              styles.usersTypo1,
              styles.usersPosition,
            ]}
          >
            Train
          </Text>
        </View>
        <View style={[styles.view5, styles.viewPosition]}>
          <View
            style={[
              styles.child,
              styles.childShadowBox,
              styles.childLayout,
              styles.viewLayout1,
            ]}
          />
          <Image
            style={[styles.fichevronRightIcon, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.users,
              styles.usersTypo,
              styles.usersTypo1,
              styles.usersPosition,
            ]}
          >
            Buses
          </Text>
        </View>
        <Text
          style={[styles.topicsByProduct, styles.usersTypo, styles.usersTypo1]}
        >
          Topics by product
        </Text>
      </View>
      <View
        style={[
          styles.helpFeedbackChild,
          styles.barPosition,
          styles.childShadowBox,
        ]}
      />
      <View style={styles.text}>
        <Text
          style={[
            styles.cantFindAnContainer,
            styles.usersTypo,
            styles.usersTypo1,
          ]}
        >
          <Text style={styles.cantFindAn}>Can’t find an answer?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.contactUs}>Contact Us</Text>
        </Text>
        <View style={[styles.view6, styles.viewLayout, styles.viewPosition1]}>
          <View
            style={[styles.child3, styles.viewLayout, styles.childLayout]}
          />
          <Image
            style={[styles.fichevronRightIcon6, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.fiuserIconPosition,
              styles.usersTypo,
              styles.usersTypo1,
            ]}
          >
            Payment Confirmation
          </Text>
        </View>
        <View style={[styles.view7, styles.viewLayout]}>
          <View
            style={[styles.child3, styles.viewLayout, styles.childLayout]}
          />
          <Image
            style={[styles.fichevronRightIcon6, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.fiuserIconPosition,
              styles.usersTypo,
              styles.usersTypo1,
            ]}
          >
            Unsuccesfull Transaction
          </Text>
        </View>
        <View style={[styles.view8, styles.viewLayout]}>
          <View
            style={[styles.child3, styles.viewLayout, styles.childLayout]}
          />
          <Image
            style={[styles.fichevronRightIcon6, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.fiuserIconPosition,
              styles.usersTypo,
              styles.usersTypo1,
            ]}
          >
            Paid the Wrong Amount
          </Text>
        </View>
        <View style={[styles.view9, styles.viewLayout]}>
          <View
            style={[styles.child3, styles.viewLayout, styles.childLayout]}
          />
          <Image
            style={[styles.fichevronRightIcon6, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.fiuserIconPosition,
              styles.usersTypo,
              styles.usersTypo1,
            ]}
          >
            Cancel a Booking
          </Text>
        </View>
        <View style={[styles.view10, styles.viewLayout]}>
          <View
            style={[styles.child3, styles.viewLayout, styles.childLayout]}
          />
          <Image
            style={[styles.fichevronRightIcon6, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.changeTheDate,
              styles.usersTypo,
              styles.usersTypo1,
              styles.figlobeIconPosition,
            ]}
          >
            Change the date
          </Text>
        </View>
        <View style={[styles.view11, styles.viewLayout]}>
          <View
            style={[styles.child3, styles.viewLayout, styles.childLayout]}
          />
          <Image
            style={[styles.fichevronRightIcon6, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright2.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.fiuserIconPosition,
              styles.usersTypo,
              styles.usersTypo1,
            ]}
          >
            Others...
          </Text>
        </View>
        <Text
          style={[styles.topicsByProduct, styles.usersTypo, styles.usersTypo1]}
        >
          Common problems
        </Text>
      </View>
      <Image
        style={[styles.fiuserIcon1, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/fiuser26.png")}
      />
      <Image
        style={[styles.menuBelowIcon, styles.menuBelowIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-below8.png")}
      />
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.upper, styles.upperLayout]}>
        <Pressable
          style={[styles.arrowChevronBigLeft, styles.iconLayout]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow--chevron-big-left.png")}
          />
        </Pressable>
        <View
          style={[styles.upperChild, styles.upperLayout, styles.childLayout]}
        />
        <Text style={[styles.searchProblems, styles.usersTypo]}>
          Search problems
        </Text>
        <Image
          style={[styles.iconlylightsearch, styles.menuBelowIconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.barPosition]}>
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
  iconLayout: {
    height: 24,
    width: 24,
  },
  iconPosition: {
    left: 60,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout1: {
    height: 39,
    width: 283,
    position: "absolute",
  },
  viewPosition1: {
    top: 32,
    left: 10,
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  childLayout: {
    borderRadius: Border.br_xs,
    top: 0,
  },
  figlobeIconPosition: {
    left: 14,
    top: 8,
    position: "absolute",
  },
  fichevronIconPosition: {
    left: 254,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  usersTypo: {
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    textAlign: "center",
  },
  usersTypo1: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
  },
  usersPosition: {
    top: 12,
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  viewPosition: {
    left: 9,
    height: 39,
    width: 283,
    position: "absolute",
  },
  fiuserIconPosition: {
    left: 15,
    top: 8,
    position: "absolute",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  viewLayout: {
    height: 32,
    width: 283,
    position: "absolute",
  },
  menuBelowIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  upperLayout: {
    height: 42,
    position: "absolute",
  },
  ubusIcon: {
    top: 688,
  },
  child: {
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    left: 0,
    backgroundColor: Color.white,
  },
  figlobeIcon: {
    overflow: "hidden",
  },
  fichevronRightIcon: {
    top: 8,
  },
  generalInformation: {
    left: 54,
    textAlign: "center",
    color: Color.black,
  },
  view: {
    left: 10,
  },
  fiuserIcon: {
    overflow: "hidden",
  },
  users: {
    left: 55,
    textAlign: "center",
    color: Color.black,
  },
  view1: {
    top: 74,
  },
  view2: {
    top: 117,
    left: 10,
  },
  view3: {
    top: 159,
  },
  view4: {
    top: 201,
    left: 10,
  },
  view5: {
    top: 243,
  },
  topicsByProduct: {
    textAlign: "center",
    color: Color.black,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    top: 437,
    left: 36,
    width: 293,
    height: 282,
    position: "absolute",
  },
  helpFeedbackChild: {
    top: -292,
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    height: 447,
    borderRadius: Border.br_2xl,
  },
  cantFindAn: {
    color: Color.black,
  },
  text1: {
    color: Color.turquoise,
  },
  contactUs: {
    color: Color.green,
  },
  cantFindAnContainer: {
    top: "97.3%",
    left: "11.6%",
    textAlign: "center",
    position: "absolute",
  },
  child3: {
    backgroundColor: Color.gray_200,
    left: 0,
  },
  fichevronRightIcon6: {
    top: 4,
  },
  paymentConfirmation: {
    textAlign: "center",
    color: Color.black,
  },
  view6: {
    left: 10,
  },
  view7: {
    top: 68,
    left: 10,
  },
  view8: {
    top: 104,
    left: 10,
  },
  view9: {
    top: 140,
    left: 10,
  },
  changeTheDate: {
    textAlign: "center",
    color: Color.black,
  },
  view10: {
    top: 176,
    left: 10,
  },
  view11: {
    top: 212,
    left: 10,
  },
  text: {
    height: "72.91%",
    width: "78.13%",
    top: "21.43%",
    right: "12.27%",
    bottom: "5.67%",
    left: "9.6%",
    position: "absolute",
  },
  fiuserIcon1: {
    top: 519,
  },
  menuBelowIcon: {
    height: "14.04%",
    top: "85.47%",
    right: "0%",
    bottom: "0.49%",
    left: "0%",
    width: "100%",
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
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowChevronBigLeft: {
    top: 9,
    left: 0,
    position: "absolute",
  },
  upperChild: {
    left: 39,
    width: 277,
    backgroundColor: Color.white,
  },
  searchProblems: {
    top: 16,
    left: 87,
    fontSize: FontSize.size_sm,
    opacity: 0.3,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  iconlylightsearch: {
    height: "47.62%",
    width: "6.33%",
    top: "26.19%",
    right: "77.53%",
    bottom: "26.19%",
    left: "16.14%",
  },
  upper: {
    top: 76,
    left: 30,
    width: 316,
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
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  time: {
    left: 21,
    width: 56,
    height: 23,
    top: 8,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  helpFeedback: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default HelpFeedback;
