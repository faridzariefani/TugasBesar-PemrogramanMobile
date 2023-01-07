import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Bookmarks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookmarks}>
      <View style={styles.tabBar}>
        <View style={styles.shape} />
      </View>
      <View style={styles.bookmarksChild} />
      <View style={styles.bookmarksChild} />
      <Text style={[styles.bookmarks1, styles.time1FlexBox]}>Bookmarks</Text>
      <Pressable
        style={[styles.books, styles.booksLayout, styles.booksLayout1]}
        onPress={() => navigation.navigate("HotelInformation")}
      >
        <View style={[styles.childShadowBox, styles.booksLayout]} />
        <Text
          style={[
            styles.dagoBandung,
            styles.filtersTypo,
            styles.dagoBandungTypo,
          ]}
        >
          Dago, Bandung
        </Text>
        <Image
          style={[styles.ulocationPointIcon, styles.ulocationIconLayout]}
          resizeMode="cover"
          source={require("../assets/ulocationpoint2.png")}
        />
        <Image
          style={[styles.booksItem, styles.booksChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Image
          style={[styles.booksInner, styles.booksChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Image
          style={[styles.starIcon, styles.starIconLayout]}
          resizeMode="cover"
          source={require("../assets/star-8.png")}
        />
        <Image
          style={[styles.booksChild1, styles.booksChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Image
          style={[styles.booksChild2, styles.booksChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Image
          style={[
            styles.filledBookmarkIcon,
            styles.filledIconLayout,
            styles.filledIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/filled-bookmark1.png")}
        />
        <Text
          style={[styles.intercontinental, styles.bounceStreetTypo]}
        >{`Intercontinental `}</Text>
        <Image
          style={[styles.iconLayout, styles.booksLayout]}
          resizeMode="cover"
          source={require("../assets/interconslidehome01-11.png")}
        />
      </Pressable>
      <View style={[styles.books2, styles.books2Layout1, styles.booksLayout1]}>
        <View style={[styles.books2Layout1, styles.childShadowBox]} />
        <Image
          style={[
            styles.filledBookmarkIcon1,
            styles.filledIconLayout,
            styles.filledIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/filled-bookmark1.png")}
        />
        <Image
          style={[styles.books2Item, styles.books2Layout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Image
          style={[styles.books2Inner, styles.books2Layout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Image
          style={[styles.books2Child1, styles.starIconLayout]}
          resizeMode="cover"
          source={require("../assets/star-8.png")}
        />
        <Image
          style={[styles.books2Child2, styles.books2Layout]}
          resizeMode="cover"
          source={require("../assets/star-6.png")}
        />
        <Text
          style={[
            styles.jakartaUtara,
            styles.filtersTypo,
            styles.dagoBandungTypo,
          ]}
        >
          Jakarta Utara
        </Text>
        <Image
          style={[styles.ulocationPointIcon1, styles.ulocationIconLayout]}
          resizeMode="cover"
          source={require("../assets/ulocationpoint2.png")}
        />
        <Image
          style={[styles.books2Layout1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/bounce-street-jakarta-trampoline-park-4-1.png")}
        />
        <Text
          style={[
            styles.bounceStreet,
            styles.bounceStreetPosition,
            styles.bounceStreetTypo,
          ]}
        >
          Bounce Street
        </Text>
      </View>
      <Image
        style={[styles.iconlylightOutlinefilter, styles.filledIconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinefilter.png")}
      />
      <Text style={[styles.filters, styles.filtersTypo]}>Filters</Text>
      <Image
        style={styles.menuBelowIcon}
        resizeMode="cover"
        source={require("../assets/menu-below1.png")}
      />
      <View style={styles.statusBar}>
        <Image
          style={[styles.connectionsIcon, styles.bounceStreetPosition]}
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
  time1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  booksLayout: {
    height: 123,
    position: "absolute",
  },
  booksLayout1: {
    width: 338,
    left: 17,
  },
  filtersTypo: {
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  dagoBandungTypo: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
  },
  ulocationIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  booksChildLayout: {
    height: 21,
    width: 21,
    borderRadius: Border.br_6xs,
    top: 36,
    position: "absolute",
  },
  starIconLayout: {
    width: 20,
    height: 21,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  filledIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  filledIconLayout1: {
    left: "87.57%",
    right: "5.03%",
    width: "7.4%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  bounceStreetTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_2xl,
    left: 124,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  books2Layout1: {
    height: 122,
    position: "absolute",
  },
  childShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_xs,
    top: 0,
    width: 338,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    backgroundColor: Color.white,
  },
  books2Layout: {
    top: 39,
    height: 21,
    width: 21,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  iconLayout: {
    width: 110,
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
  },
  bounceStreetPosition: {
    top: 15,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  bookmarksChild: {
    top: -292,
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    height: 447,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_2xl,
  },
  bookmarks1: {
    top: 82,
    left: 48,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontFamily: FontFamily.comfortaa,
    color: Color.black,
  },
  dagoBandung: {
    left: 141,
    top: 62,
  },
  ulocationPointIcon: {
    top: 59,
    left: 122,
  },
  booksItem: {
    left: 124,
  },
  booksInner: {
    left: 143,
  },
  starIcon: {
    top: 37,
    left: 162,
  },
  booksChild1: {
    left: 182,
  },
  booksChild2: {
    left: 201,
  },
  filledBookmarkIcon: {
    height: "20.33%",
    top: "3.25%",
    bottom: "76.42%",
  },
  intercontinental: {
    top: 9,
    position: "absolute",
  },
  books: {
    top: 224,
  },
  filledBookmarkIcon1: {
    height: "20.49%",
    top: "3.28%",
    bottom: "76.23%",
  },
  books2Item: {
    left: 128,
  },
  books2Inner: {
    left: 147,
  },
  books2Child1: {
    top: 40,
    left: 166,
  },
  books2Child2: {
    left: 186,
  },
  jakartaUtara: {
    top: 65,
    left: 145,
  },
  ulocationPointIcon1: {
    left: 124,
    top: 62,
  },
  bounceStreet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 133,
    height: 14,
  },
  books2: {
    top: 367,
  },
  iconlylightOutlinefilter: {
    height: "2.96%",
    width: "6.4%",
    top: "20.69%",
    right: "20.27%",
    bottom: "76.35%",
    left: "73.33%",
  },
  filters: {
    top: 172,
    left: 305,
    fontSize: FontSize.size_base,
  },
  menuBelowIcon: {
    top: 698,
    left: 18,
    width: 339,
    height: 68,
    position: "absolute",
  },
  connectionsIcon: {
    right: 14,
    width: 68,
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
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  bookmarks: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default Bookmarks;
