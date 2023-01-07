import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PickAHotel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pickAHotel}>
      <View style={[styles.bannerParent, styles.bannerLayout1]}>
        <Pressable
          style={[styles.banner, styles.bannerLayout1]}
          onPress={() => navigation.navigate("HotelInformation")}
        >
          <View
            style={[
              styles.bannerChild,
              styles.bannerChildShadowBox,
              styles.bannerLayout1,
            ]}
          />
          <Text
            style={[
              styles.intercontinental,
              styles.time1FlexBox,
              styles.elRoyaleTypo,
            ]}
          >{`InterContinental `}</Text>
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.groupChildLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/intercontinentalbandung-11.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>5</Text>
          <View style={[styles.bannerItem, styles.bannerShadowBox]} />
          <Text
            style={[
              styles.rp2060000,
              styles.rp658000Typo,
              styles.rp2060000Position,
            ]}
          >
            Rp.2.060.000
          </Text>
          <View style={[styles.bannerInner, styles.bannerLayout]} />
        </Pressable>
        <View style={[styles.banner1, styles.bannerLayout1]}>
          <View
            style={[
              styles.bannerChild,
              styles.bannerChildShadowBox,
              styles.bannerLayout1,
            ]}
          />
          <Text
            style={[
              styles.intercontinental,
              styles.time1FlexBox,
              styles.elRoyaleTypo,
            ]}
          >
            Sheraton
          </Text>
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.groupChildLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/leonardo125230320bdosiadultpool6770horclsc-o105130-1.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>4.88</Text>
          <View style={[styles.bannerItem, styles.bannerShadowBox]} />
          <Text style={[styles.rp1180000, styles.rp658000Typo]}>
            Rp.1.180.000
          </Text>
          <View style={[styles.bannerInner, styles.bannerLayout]} />
        </View>
        <View style={[styles.banner2, styles.bannerLayout1]}>
          <View
            style={[
              styles.bannerChild,
              styles.bannerChildShadowBox,
              styles.bannerLayout1,
            ]}
          />
          <Text
            style={[
              styles.intercontinental,
              styles.time1FlexBox,
              styles.elRoyaleTypo,
            ]}
          >
            Janevalla
          </Text>
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.groupChildLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/136852023-1.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>4.88</Text>
          <View style={[styles.bannerChild3, styles.bannerShadowBox]} />
          <Text style={[styles.rp960000, styles.rp960000Typo]}>Rp.960.000</Text>
          <View style={[styles.bannerInner, styles.bannerLayout]} />
        </View>
        <View style={[styles.banner3, styles.bannerLayout1]}>
          <View
            style={[
              styles.bannerChild,
              styles.bannerChildShadowBox,
              styles.bannerLayout1,
            ]}
          />
          <Text
            style={[
              styles.intercontinental,
              styles.time1FlexBox,
              styles.elRoyaleTypo,
            ]}
          >
            Sensa Hotel
          </Text>
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.groupChildLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/33747881-1.png")}
          />
          <Text style={[styles.text3, styles.textTypo1]}>4.4</Text>
          <View style={[styles.bannerItem, styles.bannerShadowBox]} />
          <Text style={[styles.rp688000, styles.rp960000Typo]}>Rp.688.000</Text>
          <View style={[styles.bannerInner, styles.bannerLayout]} />
        </View>
        <View style={[styles.banner4, styles.bannerLayout1]}>
          <View
            style={[
              styles.bannerChild,
              styles.bannerChildShadowBox,
              styles.bannerLayout1,
            ]}
          />
          <Text
            style={[
              styles.intercontinental,
              styles.time1FlexBox,
              styles.elRoyaleTypo,
            ]}
          >
            Clover Garden
          </Text>
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.groupChildLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/33747881-1.png")}
          />
          <Text style={[styles.text3, styles.textTypo1]}>4.4</Text>
          <View style={[styles.bannerItem, styles.bannerShadowBox]} />
          <Text style={[styles.rp658000, styles.rp658000Typo]}>Rp.658.000</Text>
          <View style={[styles.bannerInner, styles.bannerLayout]} />
        </View>
        <View style={[styles.banner5, styles.bannerLayout1]}>
          <View
            style={[
              styles.bannerChild,
              styles.bannerChildShadowBox,
              styles.bannerLayout1,
            ]}
          />
          <Text
            style={[
              styles.intercontinental,
              styles.time1FlexBox,
              styles.elRoyaleTypo,
            ]}
          >
            Hilton
          </Text>
          <Image
            style={[
              styles.intercontinentalBandung1Icon,
              styles.groupChildLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/20042050cc8319bdfc1471fca7e027cf0d877752-1.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>4.9</Text>
          <View style={[styles.bannerItem, styles.bannerShadowBox]} />
          <Text
            style={[
              styles.rp1475000,
              styles.rp658000Typo,
              styles.rp2060000Position,
            ]}
          >
            Rp.1.475.000
          </Text>
          <View style={[styles.bannerInner, styles.bannerLayout]} />
        </View>
      </View>
      <View style={[styles.pickAHotelInner, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupChildLayout1,
          ]}
        />
      </View>
      <Text style={[styles.bestOffer, styles.bestOfferTypo]}>Best Offer</Text>
      <Text style={[styles.recommendations, styles.bestOfferTypo]}>
        Recommendations
      </Text>
      <View style={[styles.pickAHotelChild, styles.frameWrapperLayout]}>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.banner6, styles.bannerPosition]}>
              <View
                style={[
                  styles.bannerChild14,
                  styles.bannerPosition,
                  styles.bannerChildShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.dc99cc4f21,
                  styles.bannerPosition,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/dc99cc4f-2-1.png")}
              />
              <Text
                style={[
                  styles.elRoyale,
                  styles.time1FlexBox,
                  styles.elRoyaleTypo,
                ]}
              >
                eL Royale
              </Text>
              <Text style={[styles.text6, styles.textTypo]}>4.1</Text>
              <Text style={[styles.rp578000, styles.textTypo]}>Rp.578.000</Text>
              <View style={[styles.bannerChild15, styles.bannerLayout]} />
            </View>
            <View style={[styles.banner7, styles.bannerPosition]}>
              <View
                style={[
                  styles.bannerChild14,
                  styles.bannerPosition,
                  styles.bannerChildShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.dc99cc4f21,
                  styles.bannerPosition,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/astonpasteur-1.png")}
              />
              <Text
                style={[
                  styles.elRoyale,
                  styles.time1FlexBox,
                  styles.elRoyaleTypo,
                ]}
              >{`Aston `}</Text>
              <Text style={[styles.text6, styles.textTypo]}>4.25</Text>
              <Text style={[styles.rp550000, styles.textTypo]}>Rp.550.000</Text>
              <View style={[styles.bannerChild15, styles.bannerLayout]} />
            </View>
            <View style={[styles.banner8, styles.bannerPosition]}>
              <View
                style={[
                  styles.bannerChild14,
                  styles.bannerPosition,
                  styles.bannerChildShadowBox,
                ]}
              />
              <Image
                style={[
                  styles.dc99cc4f21,
                  styles.bannerPosition,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/hibandung-facade-1.png")}
              />
              <Text
                style={[
                  styles.elRoyale,
                  styles.time1FlexBox,
                  styles.elRoyaleTypo,
                ]}
              >
                Holiday Inn
              </Text>
              <Text style={[styles.text6, styles.textTypo]}>4.3</Text>
              <Text style={[styles.rp610000, styles.textTypo]}>Rp.610.000</Text>
              <View style={[styles.bannerChild15, styles.bannerLayout]} />
            </View>
            <View style={[styles.banner9, styles.bannerPosition]}>
              <View
                style={[
                  styles.bannerChild14,
                  styles.bannerPosition,
                  styles.bannerChildShadowBox,
                ]}
              />
              <Text
                style={[
                  styles.elRoyale,
                  styles.time1FlexBox,
                  styles.elRoyaleTypo,
                ]}
              >
                The Trans
              </Text>
              <Image
                style={[
                  styles.dc99cc4f21,
                  styles.bannerPosition,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/hibandung-facade-1.png")}
              />
              <Text style={[styles.text9, styles.textTypo]}>4.8</Text>
              <Text style={[styles.rp550000, styles.textTypo]}>
                Rp.1.110.000
              </Text>
              <View style={[styles.bannerChild15, styles.bannerLayout]} />
            </View>
            <View style={[styles.banner10, styles.bannerPosition]}>
              <View
                style={[
                  styles.bannerChild14,
                  styles.bannerPosition,
                  styles.bannerChildShadowBox,
                ]}
              />
              <Text
                style={[
                  styles.elRoyale,
                  styles.time1FlexBox,
                  styles.elRoyaleTypo,
                ]}
              >
                Ibis
              </Text>
              <Image
                style={[
                  styles.dc99cc4f21,
                  styles.bannerPosition,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/hibandung-facade-1.png")}
              />
              <Text style={[styles.text9, styles.textTypo]}>3.75</Text>
              <Text style={[styles.rp578000, styles.textTypo]}>Rp.450.000</Text>
              <View style={[styles.bannerChild15, styles.bannerLayout]} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={styles.shape} />
      </View>
      <View style={styles.groupItemPosition}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Image
          style={[styles.fichevronLeftIcon, styles.timePosition]}
          resizeMode="cover"
          source={require("../assets/fichevronleft1.png")}
        />
        <Text style={styles.bandung}>Bandung</Text>
        <View style={[styles.statusBar, styles.barPosition]}>
          <Image
            style={styles.connectionsIcon}
            resizeMode="cover"
            source={require("../assets/connections.png")}
          />
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerLayout1: {
    width: 306,
    position: "absolute",
  },
  bannerChildShadowBox: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    left: 0,
    backgroundColor: Color.white,
  },
  time1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  elRoyaleTypo: {
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  groupChildLayout1: {
    borderRadius: Border.br_xs,
    left: 0,
  },
  textTypo1: {
    top: 31,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  bannerShadowBox: {
    height: 33,
    width: 102,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_xl,
    left: 196,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  rp658000Typo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rp2060000Position: {
    left: 207,
    color: Color.white,
  },
  bannerLayout: {
    width: 23,
    backgroundColor: Color.gold,
    borderRadius: Border.br_7xs,
    height: 23,
    position: "absolute",
  },
  rp960000Typo: {
    left: 212,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChildLayout: {
    height: 322,
    width: 373,
    position: "absolute",
  },
  bestOfferTypo: {
    opacity: 0.35,
    fontSize: FontSize.size_xl,
    left: 47,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  frameWrapperLayout: {
    width: 338,
    height: 160,
    position: "absolute",
  },
  bannerPosition: {
    width: 166,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 133,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupItemPosition: {
    height: 155,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  bannerChild: {
    height: 100,
    top: 0,
  },
  intercontinental: {
    top: 11,
    left: 148,
  },
  intercontinentalBandung1Icon: {
    width: 137,
    height: 100,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 169,
  },
  bannerItem: {
    top: 59,
  },
  rp2060000: {
    top: 68,
  },
  bannerInner: {
    top: 27,
    left: 145,
    height: 23,
  },
  banner: {
    height: 100,
    left: 0,
    top: 0,
  },
  rp1180000: {
    left: 209,
    top: 67,
  },
  banner1: {
    top: 237,
    height: 100,
    left: 0,
  },
  bannerChild3: {
    top: 60,
  },
  rp960000: {
    top: 69,
  },
  banner2: {
    top: 355,
    height: 100,
    left: 0,
  },
  text3: {
    left: 173,
  },
  rp688000: {
    top: 67,
  },
  banner3: {
    top: 474,
    height: 100,
    left: 0,
  },
  rp658000: {
    left: 211,
    top: 68,
  },
  banner4: {
    top: 594,
    height: 100,
    left: 0,
  },
  rp1475000: {
    top: 67,
  },
  banner5: {
    top: 119,
    height: 100,
    left: 0,
  },
  bannerParent: {
    top: 452,
    height: 317,
    left: 37,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.white,
  },
  pickAHotelInner: {
    top: 118,
    left: 2,
  },
  bestOffer: {
    top: 182,
  },
  recommendations: {
    top: 411,
  },
  bannerChild14: {
    height: 160,
  },
  dc99cc4f21: {
    height: 100,
  },
  elRoyale: {
    top: 109,
    left: 13,
  },
  text6: {
    left: 34,
  },
  rp578000: {
    left: 83,
  },
  bannerChild15: {
    top: 129,
    left: 8,
    height: 23,
  },
  banner6: {
    height: 160,
    left: 0,
  },
  rp550000: {
    left: 82,
  },
  banner7: {
    left: 181,
    height: 160,
  },
  rp610000: {
    left: 85,
  },
  banner8: {
    left: 361,
    height: 160,
  },
  text9: {
    left: 36,
  },
  banner9: {
    left: 541,
    height: 160,
  },
  banner10: {
    left: 722,
    height: 160,
  },
  frameWrapper: {
    height: 160,
    left: 0,
    top: 0,
  },
  pickAHotelChild: {
    top: 216,
    height: 160,
    left: 37,
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
  groupItem: {
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 155,
    borderRadius: Border.br_2xl,
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  bandung: {
    top: 87,
    left: 73,
    fontSize: FontSize.size_3xl,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
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
  pickAHotel: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default PickAHotel;
