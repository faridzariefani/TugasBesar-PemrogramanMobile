import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View
        style={[styles.homeChild, styles.barPosition, styles.childShadowBox]}
      />
      <View style={[styles.topMenuWrapper, styles.topLayout]}>
        <View style={[styles.topMenu, styles.topLayout]}>
          <Text
            style={[
              styles.popularActivities,
              styles.home1FlexBox,
              styles.home1Typo,
              styles.promosClr,
              styles.promosTypo,
            ]}
          >
            Popular Activities
          </Text>
          <View style={[styles.activites1Parent, styles.topLayout]}>
            <View style={[styles.activites1, styles.activitesLayout]}>
              <View
                style={[
                  styles.activites1Child,
                  styles.iconLayout4,
                  styles.activitesLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text
                style={[
                  styles.seaworld,
                  styles.seaworldTypo,
                  styles.home1FlexBox,
                  styles.promosClr,
                ]}
              >{`Seaworld `}</Text>
              <Text
                style={[styles.rp100000, styles.time1Clr, styles.seaworldTypo]}
              >
                Rp 100.000
              </Text>
              <Image
                style={[
                  styles.l2224mhb95jvm25551Icon,
                  styles.iconLayout4,
                  styles.activitesLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/0102l2224mhb95jvm2555-1.png")}
              />
            </View>
            <View style={[styles.activites2, styles.activitesLayout]}>
              <View
                style={[
                  styles.activites1Child,
                  styles.iconLayout4,
                  styles.activitesLayout,
                  styles.childShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.l2224mhb95jvm25551Icon,
                  styles.iconLayout4,
                  styles.activitesLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/bounce-street-jakarta-trampoline-park-4-1.png")}
              />
              <Text
                style={[
                  styles.seaworld,
                  styles.seaworldTypo,
                  styles.home1FlexBox,
                  styles.promosClr,
                ]}
              >
                Bounce Street
              </Text>
              <Text
                style={[styles.rp100000, styles.time1Clr, styles.seaworldTypo]}
              >
                Rp 75.000
              </Text>
            </View>
            <View style={[styles.activites3, styles.activitesLayout]}>
              <View
                style={[
                  styles.activites1Child,
                  styles.iconLayout4,
                  styles.activitesLayout,
                  styles.childShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.l2224mhb95jvm25551Icon,
                  styles.iconLayout4,
                  styles.activitesLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/manualexcursionmuseummacan21980x719-1.png")}
              />
              <Text
                style={[
                  styles.seaworld,
                  styles.seaworldTypo,
                  styles.home1FlexBox,
                  styles.promosClr,
                ]}
              >
                Macan Museum
              </Text>
              <Text
                style={[styles.rp100000, styles.time1Clr, styles.seaworldTypo]}
              >
                Rp 75.000
              </Text>
            </View>
            <View style={[styles.activites4, styles.activitesLayout]}>
              <View
                style={[
                  styles.activites1Child,
                  styles.iconLayout4,
                  styles.activitesLayout,
                  styles.childShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.l2224mhb95jvm25551Icon,
                  styles.iconLayout4,
                  styles.activitesLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/2018-09-28-55011-1538134470-1.png")}
              />
              <Text
                style={[
                  styles.seaworld,
                  styles.seaworldTypo,
                  styles.home1FlexBox,
                  styles.promosClr,
                ]}
              >
                Safari
              </Text>
              <Text
                style={[styles.rp100000, styles.time1Clr, styles.seaworldTypo]}
              >
                Rp 160.000
              </Text>
            </View>
            <View style={[styles.activites5, styles.activitesLayout]}>
              <View
                style={[
                  styles.activites1Child,
                  styles.iconLayout4,
                  styles.activitesLayout,
                  styles.childShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.l2224mhb95jvm25551Icon,
                  styles.iconLayout4,
                  styles.activitesLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/2018-09-28-55011-1538134470-1.png")}
              />
              <Text
                style={[
                  styles.seaworld,
                  styles.seaworldTypo,
                  styles.home1FlexBox,
                  styles.promosClr,
                ]}
              >
                Dufan
              </Text>
              <Text
                style={[styles.rp100000, styles.time1Clr, styles.seaworldTypo]}
              >
                Rp 200.000
              </Text>
            </View>
          </View>
          <View style={styles.discount}>
            <Image
              style={[
                styles.onlineShoppingAndDiscount2Icon,
                styles.iconLayout3,
              ]}
              resizeMode="cover"
              source={require("../assets/onlineshoppinganddiscount26727972218274-1.png")}
            />
            <Image
              style={[
                styles.discountLoyaltyCardLoyaltyIcon,
                styles.iconLayout3,
              ]}
              resizeMode="cover"
              source={require("../assets/onlineshoppinganddiscount26727972218274-1.png")}
            />
            <Image
              style={[
                styles.incorporatingVolumeValueAndIcon,
                styles.iconLayout3,
              ]}
              resizeMode="cover"
              source={require("../assets/onlineshoppinganddiscount26727972218274-1.png")}
            />
            <Image
              style={[styles.discou11Icon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/onlineshoppinganddiscount26727972218274-1.png")}
            />
          </View>
          <Text
            style={[
              styles.bestStreamingService,
              styles.home1Typo,
              styles.promosClr,
              styles.promosTypo,
            ]}
          >
            {" "}
            best streaming service is home to thousands of TV series and movies
          </Text>
          <Text
            style={[styles.itsMovieTime, styles.home1FlexBox, styles.home1Typo]}
          >
            It’s Movie Time !
          </Text>
          <Text
            style={[
              styles.promos,
              styles.home1FlexBox,
              styles.home1Typo,
              styles.promosClr,
              styles.promosTypo,
            ]}
          >
            Promos
          </Text>
          <Text style={[styles.flightsPosition, styles.busTypo]}>Flights</Text>
          <Text style={[styles.train, styles.busTypo]}>Train</Text>
          <Text style={[styles.bus, styles.busTypo]}>Bus</Text>
          <Text style={[styles.hotels, styles.busTypo]}>Hotels</Text>
          <Pressable
            style={[styles.wrapper, styles.frameLayout]}
            onPress={() => navigation.navigate("Hotel")}
          >
            <Image
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.container, styles.frameLayout]}
            onPress={() => navigation.navigate("Buses")}
          >
            <Image
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.topMenuChild,
              styles.iconChildLayout,
              styles.topChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-72.png")}
          />
          <Image
            style={[
              styles.topMenuItem,
              styles.iconChildLayout,
              styles.topChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-82.png")}
          />
          <Image
            style={[
              styles.topMenuInner,
              styles.iconChildLayout,
              styles.topChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[
              styles.ellipseIcon,
              styles.iconChildLayout,
              styles.topChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-101.png")}
          />
          <Image
            style={[
              styles.topMenuChild1,
              styles.iconChildLayout,
              styles.topChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("Flights")}
          >
            <Image
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../assets/ellipse-4.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.ellipsePressable, styles.frameLayout]}
            onPress={() => navigation.navigate("Train")}
          >
            <Image
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </Pressable>
          <View style={[styles.uplaneFly, styles.flightsPosition]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Image
            style={styles.ubedIcon}
            resizeMode="cover"
            source={require("../assets/ubed5.png")}
          />
          <Image
            style={[styles.urestaurantIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/urestaurant3.png")}
          />
          <Image
            style={[styles.ucarSideviewIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ucarsideview.png")}
          />
          <Image
            style={[styles.uplusCircleIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/upluscircle.png")}
          />
          <Image
            style={[
              styles.umetroIcon,
              styles.iconPosition,
              styles.iconChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/umetro5.png")}
          />
          <Image
            style={[
              styles.ubusIcon,
              styles.iconPosition,
              styles.iconChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ubus10.png")}
          />
          <Image
            style={[styles.utransactionIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/utransaction7.png")}
          />
          <Image
            style={[styles.profilePicturePosition, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/fimorehorizontal.png")}
          />
          <Image
            style={[styles.oynmhygn2bo2qayvmptnpe1Icon, styles.iconLayout4]}
            resizeMode="cover"
            source={require("../assets/oynmhygn2bo2qayvmptnpe-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.menuBelowIcon, styles.barPosition]}
        resizeMode="cover"
        source={require("../assets/menu-below11.png")}
      />
      <Image
        style={[styles.menuBelowIcon, styles.barPosition]}
        resizeMode="cover"
        source={require("../assets/menu-below11.png")}
      />
      <View style={styles.upper}>
        <Pressable
          style={[styles.profilePicture, styles.profilePicturePosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon5, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/profile-picture.png")}
          />
        </Pressable>
        <Text style={[styles.home1, styles.home1FlexBox, styles.home1Typo]}>
          Home
        </Text>
      </View>
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.statusBar, styles.barPosition]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.iconPosition]}>
          <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
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
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  topLayout: {
    width: 327,
    position: "absolute",
  },
  home1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  home1Typo: {
    fontFamily: FontFamily.comfortaa,
    left: 0,
  },
  promosClr: {
    letterSpacing: -0.2,
    color: Color.gray_600,
  },
  promosTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
  },
  activitesLayout: {
    width: 129,
    top: 0,
  },
  iconLayout4: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  seaworldTypo: {
    left: 10,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_base,
  },
  time1Clr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout3: {
    width: 180,
    height: 111,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  busTypo: {
    top: 69,
    textAlign: "center",
    color: Color.gray_600,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  frameLayout: {
    height: 59,
    width: 59,
    top: 0,
    position: "absolute",
  },
  iconChildLayout: {
    height: 42,
    width: 42,
  },
  topChildPosition: {
    top: 123,
    width: 42,
    position: "absolute",
  },
  flightsPosition: {
    left: 13,
    position: "absolute",
  },
  iconLayout1: {
    height: 30,
    width: 30,
    top: 129,
    overflow: "hidden",
  },
  iconLayout: {
    height: 32,
    width: 32,
    top: 128,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 8,
    position: "absolute",
  },
  profilePicturePosition: {
    left: 261,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  homeChild: {
    top: 2,
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
    borderRadius: Border.br_2xl,
    width: 375,
  },
  popularActivities: {
    top: 213,
    color: Color.gray_600,
  },
  activites1Child: {
    shadowRadius: 4,
    elevation: 4,
    height: 144,
    left: 0,
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    width: 129,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  seaworld: {
    top: 100,
    color: Color.gray_600,
  },
  rp100000: {
    top: 121,
    letterSpacing: 0.3,
    fontWeight: "700",
  },
  l2224mhb95jvm25551Icon: {
    height: 93,
    left: 0,
  },
  activites1: {
    height: 144,
    left: 0,
    position: "absolute",
  },
  activites2: {
    left: 142,
    height: 144,
    position: "absolute",
  },
  activites3: {
    left: 284,
    height: 144,
    position: "absolute",
  },
  activites4: {
    left: 426,
    height: 144,
    position: "absolute",
  },
  activites5: {
    left: 568,
    height: 144,
    position: "absolute",
  },
  activites1Parent: {
    top: 244,
    height: 144,
    left: 0,
  },
  onlineShoppingAndDiscount2Icon: {
    left: 196,
  },
  discountLoyaltyCardLoyaltyIcon: {
    left: 588,
  },
  incorporatingVolumeValueAndIcon: {
    left: 0,
  },
  discou11Icon: {
    left: 392,
  },
  discount: {
    top: 733,
    width: 315,
    height: 111,
    left: 10,
    position: "absolute",
  },
  bestStreamingService: {
    top: 461,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 326,
    color: Color.gray_600,
    position: "absolute",
  },
  itsMovieTime: {
    top: 433,
    fontSize: FontSize.size_2xl,
    letterSpacing: -0.3,
    color: Color.gray_600,
  },
  promos: {
    top: 706,
    color: Color.gray_600,
  },
  train: {
    left: 100,
    position: "absolute",
  },
  bus: {
    left: 187,
    position: "absolute",
  },
  hotels: {
    left: 259,
    position: "absolute",
  },
  wrapper: {
    left: 253,
  },
  container: {
    left: 171,
  },
  topMenuChild: {
    left: 19,
  },
  topMenuItem: {
    left: 78,
  },
  topMenuInner: {
    left: 255,
  },
  ellipseIcon: {
    left: 137,
  },
  topMenuChild1: {
    left: 196,
  },
  frame: {
    left: 7,
  },
  ellipsePressable: {
    left: 89,
  },
  vectorIcon: {
    width: 45,
    height: 26,
  },
  uplaneFly: {
    top: 5,
    width: 47,
    height: 49,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    overflow: "hidden",
  },
  ubedIcon: {
    top: 9,
    left: 262,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  urestaurantIcon: {
    left: 25,
    position: "absolute",
  },
  ucarSideviewIcon: {
    left: 83,
  },
  uplusCircleIcon: {
    left: 201,
  },
  umetroIcon: {
    left: 97,
    overflow: "hidden",
  },
  ubusIcon: {
    left: 179,
    overflow: "hidden",
  },
  utransactionIcon: {
    left: 143,
    position: "absolute",
  },
  oynmhygn2bo2qayvmptnpe1Icon: {
    top: 517,
    left: 8,
    width: 300,
    height: 150,
  },
  topMenu: {
    height: 844,
    top: 0,
    left: 0,
  },
  topMenuWrapper: {
    top: 184,
    left: 29,
    height: 481,
  },
  menuBelowIcon: {
    top: 698,
    height: 114,
  },
  icon5: {
    borderRadius: Border.br_6xl,
  },
  profilePicture: {
    width: 53,
    height: 53,
    top: 0,
  },
  home1: {
    top: 3,
    fontSize: FontSize.size_8xl,
    letterSpacing: -0.5,
    color: "#020202",
  },
  upper: {
    top: 76,
    left: 35,
    width: 310,
    height: 45,
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
    bottom: -1,
    height: 83,
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
    left: 21,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default Home;
