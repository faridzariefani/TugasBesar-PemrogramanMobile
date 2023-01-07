import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, styles.iconLayout]}>
      <View style={[styles.profileChild, styles.barLayout]} />
      <View style={[styles.insurance, styles.historyPosition]}>
        <View
          style={[
            styles.insuranceChild,
            styles.rewardsItemShadowBox,
            styles.rewardsChildBorder,
          ]}
        />
        <Text style={[styles.healthInsurance, styles.insuranceTypo]}>
          Health Insurance
        </Text>
        <View style={[styles.insuranceItem, styles.rewardsItemShadowBox]} />
        <Image
          style={[styles.insuranceInner, styles.rewardsInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.rewardsInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-10.png")}
        />
        <Image
          style={styles.ulocationArrowIcon}
          resizeMode="cover"
          source={require("../assets/ulocationarrow.png")}
        />
        <Text style={[styles.travelInsurance, styles.insuranceTypo]}>
          Travel Insurance
        </Text>
        <Text
          style={[
            styles.insurance1,
            styles.time1FlexBox,
            styles.topMenuPosition,
            styles.time1Clr,
          ]}
        >
          Insurance
        </Text>
        <Image
          style={[styles.umedicalSquareIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/umedicalsquare.png")}
        />
      </View>
      <Image
        style={[styles.menuBelowIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-below10.png")}
      />
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.topMenuWrapper, styles.topLayout]}>
        <View style={[styles.topLayout, styles.topMenuPosition]}>
          <Text style={[styles.editProfile, styles.time1FlexBox]}>
            Edit profile
          </Text>
          <Image
            style={styles.profilePictureIcon}
            resizeMode="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Text
            style={[styles.alfaridzi, styles.time1FlexBox, styles.time1Clr]}
          >
            Alfaridzi
          </Text>
          <Pressable
            style={[styles.fichevronLeft, styles.topMenuPosition]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/fichevronleft1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.history, styles.historyPosition]}>
        <Text
          style={[
            styles.insurance1,
            styles.time1FlexBox,
            styles.topMenuPosition,
            styles.time1Clr,
          ]}
        >
          History
        </Text>
        <Pressable
          style={[
            styles.historyChild,
            styles.rewardsItemShadowBox,
            styles.rewardsChildBorder,
          ]}
          onPress={() => navigation.navigate("History")}
        />
        <Text style={[styles.viewYourPurchase, styles.insuranceTypo]}>
          View your purchase history
        </Text>
        <Image
          style={[styles.historyItem, styles.itemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={[styles.ureceiptIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/ureceipt.png")}
        />
      </View>
      <View style={[styles.payments, styles.historyPosition]}>
        <View
          style={[
            styles.insuranceChild,
            styles.rewardsItemShadowBox,
            styles.rewardsChildBorder,
          ]}
        />
        <Text style={[styles.healthInsurance, styles.insuranceTypo]}>
          Payment Options
        </Text>
        <Text
          style={[
            styles.insurance1,
            styles.time1FlexBox,
            styles.topMenuPosition,
            styles.time1Clr,
          ]}
        >
          Payment
        </Text>
        <Image
          style={[styles.paymentsItem, styles.itemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.utransactionIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/utransaction6.png")}
        />
      </View>
      <View style={[styles.rewards, styles.historyPosition]}>
        <View
          style={[
            styles.rewardsChild,
            styles.rewardsItemShadowBox,
            styles.rewardsChildBorder,
          ]}
        />
        <Text style={[styles.points, styles.pointsTypo]}>12.500 Points</Text>
        <View
          style={[
            styles.rewardsItem,
            styles.rewardsItemShadowBox,
            styles.rewardsChildBorder,
          ]}
        />
        <Text style={[styles.discounts, styles.pointsTypo]}>Discounts</Text>
        <Image
          style={[styles.rewardsInner, styles.rewardsInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-71.png")}
        />
        <Image
          style={[styles.rewardsChild1, styles.rewardsInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-81.png")}
        />
        <Text
          style={[
            styles.insurance1,
            styles.time1FlexBox,
            styles.topMenuPosition,
            styles.time1Clr,
          ]}
        >
          My Rewards
        </Text>
        <Image
          style={[styles.upricetagAltIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/upricetagalt3.png")}
        />
        <Image
          style={styles.figiftIcon}
          resizeMode="cover"
          source={require("../assets/figift.png")}
        />
      </View>
      <View
        style={[styles.statusBar, styles.topMenuPosition, styles.barLayout]}
      >
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1FlexBox, styles.time1Clr]}>
            9:27
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  barLayout: {
    width: 375,
    position: "absolute",
  },
  historyPosition: {
    width: 287,
    left: 40,
    position: "absolute",
  },
  rewardsItemShadowBox: {
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
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  rewardsChildBorder: {
    left: 5,
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_xs,
  },
  insuranceTypo: {
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 70,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rewardsInnerLayout: {
    height: 36,
    width: 36,
    left: 21,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  topMenuPosition: {
    top: 0,
    left: 0,
  },
  time1Clr: {
    color: Color.black,
    textAlign: "center",
  },
  iconPosition1: {
    left: 27,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  topLayout: {
    height: 50,
    width: 216,
    position: "absolute",
  },
  itemPosition: {
    left: 17,
    height: 36,
    width: 36,
    position: "absolute",
  },
  iconPosition: {
    left: 23,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  pointsTypo: {
    left: 74,
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
  profileChild: {
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    height: 155,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
    top: 1,
    borderRadius: Border.br_2xl,
  },
  insuranceChild: {
    top: 34,
    left: 5,
  },
  healthInsurance: {
    top: 50,
  },
  insuranceItem: {
    top: 90,
    left: 4,
  },
  insuranceInner: {
    top: 42,
  },
  ellipseIcon: {
    top: 98,
  },
  ulocationArrowIcon: {
    left: 26,
    height: 24,
    width: 24,
    top: 105,
    position: "absolute",
    overflow: "hidden",
  },
  travelInsurance: {
    top: 106,
  },
  insurance1: {
    fontSize: FontSize.size_4xl,
    letterSpacing: -0.3,
    fontFamily: FontFamily.comfortaa,
  },
  umedicalSquareIcon: {
    top: 48,
  },
  insurance: {
    top: 569,
    height: 142,
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
    overflow: "hidden",
  },
  shape: {
    height: "6.02%",
    width: "36%",
    top: "83.13%",
    right: "32%",
    bottom: "10.84%",
    left: "32%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.black,
    position: "absolute",
  },
  tabBar: {
    bottom: 0,
    height: 83,
    left: 0,
  },
  editProfile: {
    left: 127,
    color: Color.gray_600,
    fontFamily: FontFamily.comfortaa,
    textAlign: "center",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    top: 34,
  },
  profilePictureIcon: {
    left: 59,
    borderRadius: Border.br_6xl,
    width: 53,
    height: 53,
    top: 1,
    position: "absolute",
  },
  alfaridzi: {
    top: 4,
    left: 115,
    fontSize: FontSize.size_6xl,
    letterSpacing: -0.4,
    fontFamily: FontFamily.comfortaa,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  fichevronLeft: {
    width: 43,
    height: 43,
    position: "absolute",
  },
  topMenuWrapper: {
    top: 75,
    left: 21,
  },
  historyChild: {
    top: 36,
  },
  viewYourPurchase: {
    top: 52,
  },
  historyItem: {
    top: 44,
  },
  ureceiptIcon: {
    top: 50,
  },
  history: {
    top: 167,
    height: 88,
  },
  paymentsItem: {
    top: 42,
  },
  utransactionIcon: {
    top: 48,
  },
  payments: {
    top: 283,
    height: 86,
  },
  rewardsChild: {
    top: 33,
  },
  points: {
    top: 49,
  },
  rewardsItem: {
    top: 89,
  },
  discounts: {
    top: 105,
    left: 74,
  },
  rewardsInner: {
    top: 41,
  },
  rewardsChild1: {
    top: 97,
  },
  upricetagAltIcon: {
    top: 103,
  },
  figiftIcon: {
    left: 28,
    width: 22,
    height: 22,
    top: 48,
    position: "absolute",
    overflow: "hidden",
  },
  rewards: {
    top: 400,
    height: 141,
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
    width: 56,
    height: 23,
    left: 21,
    position: "absolute",
  },
  statusBar: {
    height: 44,
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    width: "100%",
  },
});

export default Profile;
