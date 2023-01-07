import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Hotel = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.hotel, styles.iconLayout3, styles.hotelLayout]}>
      <View style={styles.mayParent}>
        <View style={styles.may}>
          <Text
            style={[styles.may2021, styles.time1FlexBox, styles.oneWayTypo]}
          >
            May 2021
          </Text>
          <View style={[styles.view, styles.viewLayout1]}>
            <View style={[styles.child, styles.childBorder]} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={[styles.inner, styles.childBorder]} />
            <Image
              style={[
                styles.ubusIcon,
                styles.iconLayout2,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/ubus.png")}
            />
            <Text
              style={[
                styles.bookingId7764437234Container,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              <Text style={styles.bookingId7764437234Container1}>
                <Text style={styles.bookingId}>{`Booking ID  `}</Text>
                <Text style={styles.text}>7764437234</Text>
              </Text>
            </Text>
            <Text style={[styles.rp99000, styles.rp99000Typo]}>Rp 99.000</Text>
            <Image
              style={[styles.arrowIcon, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text
              style={[styles.bandung, styles.bandungPosition]}
            >{`Bandung `}</Text>
            <Text style={[styles.jakarta, styles.jakartaFlexBox]}>Jakarta</Text>
            <Image
              style={[styles.fiuserIcon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
          <View style={[styles.view1, styles.viewLayout1]}>
            <View style={[styles.child, styles.childBorder]} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={[styles.inner, styles.childBorder]} />
            <Image
              style={[
                styles.ubusIcon,
                styles.iconLayout2,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/ubus.png")}
            />
            <Text
              style={[
                styles.bookingId7764437234Container,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              <Text style={styles.bookingId7764437234Container1}>
                <Text style={styles.bookingId}>{`Booking ID  `}</Text>
                <Text style={styles.text}>7700486555</Text>
              </Text>
            </Text>
            <Text style={[styles.rp99000, styles.rp99000Typo]}>Rp 100.000</Text>
            <Image
              style={[styles.child3, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.bandung, styles.bandungPosition]}>
              Jakarta
            </Text>
            <Text style={[styles.bandung1, styles.jakartaFlexBox]}>
              Bandung
            </Text>
            <Image
              style={[styles.fiuserIcon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
        </View>
        <View style={styles.april}>
          <Text
            style={[styles.may2021, styles.time1FlexBox, styles.oneWayTypo]}
          >
            April 2021
          </Text>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.child, styles.childBorder]} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={[styles.inner, styles.childBorder]} />
            <Image
              style={[
                styles.uplaneFlyIcon,
                styles.iconLayout2,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/uplanefly.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 5423564399
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 400.000
            </Text>
            <Image
              style={[styles.child7, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.bandung, styles.bandungPosition]}>
              Jogyakarta
            </Text>
            <Text
              style={[
                styles.jakarta2,
                styles.jakarta2Layout,
                styles.jakartaFlexBox,
              ]}
            >
              Jakarta
            </Text>
            <Image
              style={[styles.fiuserIcon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.child, styles.childBorder]} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={[styles.inner, styles.childBorder]} />
            <Image
              style={[
                styles.uplaneFlyIcon,
                styles.iconLayout2,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/uplanefly.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 5664753894
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 380.000
            </Text>
            <Image
              style={[styles.child11, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.jakarta3, styles.bandungPosition]}>
              Jakarta
            </Text>
            <Text style={[styles.jogyakarta1, styles.jakarta4Typo]}>
              Jogyakarta
            </Text>
            <Image
              style={[styles.fiuserIcon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
          <View style={[styles.view4, styles.viewPosition]}>
            <View style={[styles.child, styles.childBorder]} />
            <View style={[styles.child13, styles.itemShadowBox]} />
            <View style={[styles.inner, styles.childBorder]} />
            <Image
              style={[styles.ubedIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ubed.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 7000154324
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 580.000
            </Text>
            <Text style={[styles.holidayInn, styles.bandungPosition]}>
              Holiday Inn
            </Text>
          </View>
          <View style={[styles.view5, styles.viewPosition]}>
            <View style={[styles.child, styles.childBorder]} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={[styles.inner, styles.childBorder]} />
            <Image
              style={[styles.umetroIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/umetro.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 7112256347
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 380.000
            </Text>
            <Image
              style={[styles.child18, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.jakarta3, styles.bandungPosition]}>
              Bandung
            </Text>
            <Text style={[styles.jakarta4, styles.jakarta4Typo]}>Jakarta</Text>
            <Image
              style={[styles.fiuserIcon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
        </View>
        <View style={[styles.view6, styles.childLayout]}>
          <View
            style={[styles.child19, styles.childLayout, styles.childShadowBox]}
          />
          <Text style={[styles.bandungIndonesia, styles.room2AdultFlexBox]}>
            <Text style={styles.bookingId7764437234Container1}>
              <Text style={styles.bandung3}>{`Bandung, `}</Text>
              <Text style={styles.indonesia}>Indonesia</Text>
            </Text>
          </Text>
          <Image
            style={[styles.ulocationPointIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ulocationpoint.png")}
          />
        </View>
        <View style={styles.view7}>
          <View style={[styles.child20, styles.childShadowBox]} />
          <View
            style={[
              styles.child21,
              styles.child21Layout,
              styles.childShadowBox,
            ]}
          />
          <Text style={[styles.checkIn, styles.guestFlexBox]}>Check-in</Text>
          <Text style={[styles.checkOutFri, styles.hotelsPosition]}>
            Check-out : Fri, 11 Juni 2021
          </Text>
          <Text style={[styles.tue1June, styles.nightsTypo]}>
            Tue, 1 June 2021
          </Text>
          <Text style={[styles.nights, styles.nightsTypo]}>1 night(s)</Text>
          <Image
            style={[styles.uscheduleIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/uschedule.png")}
          />
        </View>
        <View style={styles.view8}>
          <Image
            style={[styles.ellipseIcon, styles.child21Layout]}
            resizeMode="cover"
            source={require("../assets/ellipse-18.png")}
          />
          <Image
            style={[
              styles.uusersAltIcon,
              styles.iconLayout,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/uusersalt.png")}
          />
          <Text style={[styles.guest, styles.guestFlexBox]}>Guest</Text>
          <View style={[styles.child22, styles.childShadowBox]} />
          <Text
            style={[styles.room2Adult, styles.room2AdultFlexBox]}
          >{`1 Room, 2 Adult, 1 Children `}</Text>
        </View>
      </View>
      <Image
        style={[styles.menuBelowIcon, styles.barPosition]}
        resizeMode="cover"
        source={require("../assets/menu-below3.png")}
      />
      <Image
        style={[
          styles.menuBelowIcon1,
          styles.menuBelowIcon1Layout,
          styles.tabBarChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/menu-below4.png")}
      />
      <Image
        style={[
          styles.menuBelowIcon1,
          styles.menuBelowIcon1Layout,
          styles.tabBarChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/menu-below4.png")}
      />
      <View style={[styles.tabBar, styles.barPosition]}>
        <View
          style={[
            styles.tabBarChild,
            styles.tabBarChildPosition,
            styles.hotelLayout,
          ]}
        />
        <View style={styles.shape} />
      </View>
      <View style={[styles.upLayout, styles.barPosition]}>
        <View style={[styles.upChild, styles.upItemShadowBox]} />
        <View
          style={[styles.upItem, styles.upItemShadowBox, styles.upLayout]}
        />
        <View style={styles.upInner} />
        <Text
          style={[styles.roundTrip, styles.time1FlexBox, styles.oneWayTypo]}
        >
          Round Trip
        </Text>
        <Text style={[styles.oneWay, styles.time1FlexBox, styles.oneWayTypo]}>
          One way
        </Text>
        <Text style={[styles.hotels, styles.hotelsPosition]}>Hotels</Text>
      </View>
      <Pressable
        style={[styles.fichevronLeft, styles.timePosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/fichevronleft1.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlylightOutlinefilter, styles.menuBelowIcon1Layout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinefilter.png")}
      />
      <Pressable
        style={[styles.hotelChild, styles.childLayout]}
        onPress={() => navigation.navigate("PickAHotel")}
      />
      <Text style={[styles.search, styles.guestFlexBox]}>Search</Text>
      <View style={[styles.statusBar, styles.barPosition]}>
        <Image
          style={[styles.connectionsIcon, styles.jakarta2Layout]}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    overflow: "hidden",
    width: "100%",
  },
  hotelLayout: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.white,
  },
  time1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  oneWayTypo: {
    fontFamily: FontFamily.comfortaa,
    textAlign: "center",
  },
  viewLayout1: {
    height: 91,
    width: 400,
    left: 4,
    position: "absolute",
  },
  childBorder: {
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  itemShadowBox: {
    height: 64,
    width: 110,
    left: 171,
    top: 27,
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
  },
  iconLayout2: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    left: 12,
    height: 20,
  },
  jakartaFlexBox: {
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
  },
  bookingPosition: {
    color: Color.gray_600,
    left: 15,
    top: 5,
    height: 21,
    width: 212,
    position: "absolute",
  },
  rp99000Typo: {
    letterSpacing: 1.9,
    top: 65,
    color: Color.white,
    fontSize: FontSize.size_sm,
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  childLayout1: {
    height: 0,
    top: 43,
    width: 20,
    position: "absolute",
  },
  bandungPosition: {
    left: 45,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    top: 33,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  viewLayout: {
    width: 398,
    height: 91,
    left: 4,
    position: "absolute",
  },
  jakarta2Layout: {
    width: 68,
    position: "absolute",
  },
  jakarta4Typo: {
    width: 84,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    top: 33,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  viewPosition: {
    left: 2,
    width: 398,
    height: 91,
    position: "absolute",
  },
  childLayout: {
    height: 46,
    position: "absolute",
  },
  childShadowBox: {
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
  },
  room2AdultFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  iconPosition: {
    left: 22,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  child21Layout: {
    height: 30,
    position: "absolute",
  },
  guestFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  hotelsPosition: {
    top: 82,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  nightsTypo: {
    width: 203,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  menuBelowIcon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tabBarChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    display: "none",
    width: "100%",
  },
  upItemShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_2xl,
  },
  upLayout: {
    height: 155,
    top: 0,
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  may2021: {
    fontSize: FontSize.size_4xl,
    color: Color.black,
    letterSpacing: -0.3,
    top: 0,
    left: 0,
  },
  child: {
    height: 59,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 282,
    top: 0,
    backgroundColor: Color.white,
  },
  item: {
    backgroundColor: Color.turquoise,
  },
  inner: {
    backgroundColor: Color.gray_400,
    height: 32,
    top: 27,
  },
  ubusIcon: {
    top: 33,
  },
  bookingId: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_2xs,
  },
  bookingId7764437234Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bookingId7764437234Container: {
    width: 212,
    letterSpacing: "-1.5%",
  },
  rp99000: {
    left: 188,
    color: Color.white,
  },
  arrowIcon: {
    left: 110,
  },
  bandung: {
    letterSpacing: -0.2,
    width: 212,
  },
  jakarta: {
    left: 138,
    width: 48,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    top: 33,
    color: Color.black,
    position: "absolute",
  },
  fiuserIcon: {
    left: 18,
    top: 10,
    display: "none",
  },
  view: {
    top: 36,
  },
  child3: {
    left: 102,
  },
  bandung1: {
    width: 64,
    left: 134,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    top: 33,
    color: Color.black,
    position: "absolute",
  },
  view1: {
    top: 132,
  },
  may: {
    top: 143,
    width: 404,
    height: 223,
    display: "none",
    left: 0,
    position: "absolute",
  },
  uplaneFlyIcon: {
    top: 34,
  },
  bookingId5423564399: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    width: 212,
  },
  rp400000: {
    left: 186,
    color: Color.white,
  },
  child7: {
    left: 123,
  },
  jakarta2: {
    left: 154,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    top: 33,
    color: Color.black,
  },
  view2: {
    top: 36,
  },
  child11: {
    left: 103,
  },
  jakarta3: {
    width: 85,
    letterSpacing: -0.2,
  },
  jogyakarta1: {
    left: 134,
  },
  view3: {
    top: 133,
  },
  child13: {
    backgroundColor: Color.brown,
  },
  ubedIcon: {
    top: 31,
    left: 14,
    height: 24,
    width: 20,
  },
  holidayInn: {
    width: 71,
    letterSpacing: -0.2,
  },
  view4: {
    top: 230,
  },
  umetroIcon: {
    left: 14,
    top: 33,
  },
  child18: {
    left: 112,
  },
  jakarta4: {
    left: 143,
  },
  view5: {
    top: 327,
  },
  april: {
    top: 252,
    width: 402,
    height: 418,
    display: "none",
    left: 0,
    position: "absolute",
  },
  child19: {
    width: 315,
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  bandung3: {
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  indonesia: {
    fontSize: FontSize.size_xs,
    color: Color.gray_1100,
  },
  bandungIndonesia: {
    top: 14,
    left: 63,
    width: 131,
    letterSpacing: "-1.5%",
  },
  ulocationPointIcon: {
    top: 10,
  },
  view6: {
    top: 19,
    width: 315,
    left: -12,
  },
  child20: {
    height: 73,
    width: 315,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  child21: {
    top: 20,
    left: 196,
    width: 107,
    backgroundColor: Color.gray_500,
  },
  checkIn: {
    top: 16,
    left: 59,
    width: 78,
    color: Color.gray_1100,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
  },
  checkOutFri: {
    letterSpacing: -0.1,
    color: Color.gray_1100,
    fontSize: FontSize.size_2xs,
    left: 171,
    top: 82,
  },
  tue1June: {
    top: 37,
    left: 67,
    color: Color.black,
  },
  nights: {
    left: 221,
    color: Color.white,
    top: 27,
  },
  uscheduleIcon: {
    top: 12,
  },
  view7: {
    top: 80,
    width: 424,
    height: 93,
    left: -12,
    position: "absolute",
  },
  ellipseIcon: {
    width: 30,
    left: 14,
    top: 0,
  },
  uusersAltIcon: {
    top: 3,
    left: 17,
  },
  guest: {
    top: 7,
    left: 35,
    width: 90,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    color: Color.black,
  },
  child22: {
    top: 42,
    height: 43,
    width: 315,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  room2Adult: {
    top: 55,
    left: 24,
    width: 182,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    color: Color.black,
  },
  view8: {
    top: 186,
    height: 85,
    width: 315,
    left: -12,
    position: "absolute",
  },
  mayParent: {
    left: 41,
    width: 432,
    height: 541,
    top: 171,
    position: "absolute",
  },
  menuBelowIcon: {
    top: 698,
    height: 114,
  },
  menuBelowIcon1: {
    height: "14.04%",
    top: "85.96%",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    position: "absolute",
    backgroundColor: Color.white,
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
    height: 164,
    top: 36,
    display: "none",
    backgroundColor: Color.white,
  },
  upItem: {
    backgroundColor: Color.beige_100,
  },
  upInner: {
    top: 167,
    left: 75,
    width: 106,
    height: 25,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_xs,
    display: "none",
    position: "absolute",
  },
  roundTrip: {
    left: 202,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    color: Color.black,
    display: "none",
    top: 171,
  },
  oneWay: {
    left: 95,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    color: Color.white,
    display: "none",
    top: 171,
  },
  hotels: {
    left: 71,
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.4,
    color: Color.black,
  },
  icon: {
    height: "100%",
  },
  fichevronLeft: {
    top: 75,
    width: 43,
    height: 43,
  },
  iconlylightOutlinefilter: {
    height: "2.96%",
    width: "6.4%",
    top: "19.95%",
    right: "23.47%",
    bottom: "77.09%",
    left: "70.13%",
  },
  hotelChild: {
    top: 480,
    left: 52,
    borderRadius: Border.br_lg,
    width: 268,
    backgroundColor: Color.gray_500,
  },
  search: {
    top: 493,
    fontSize: FontSize.size_3xl,
    width: 65,
    left: 154,
    color: Color.white,
    letterSpacing: -0.3,
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    height: 16,
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.black,
    left: 0,
  },
  time: {
    top: 8,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  hotel: {
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
  },
});

export default Hotel;
