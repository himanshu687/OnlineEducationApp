import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Himanshu</Text>
        <Text style={styles.paraStyle}>
          I'm becoming a full stack developer 😀
        </Text>

        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }}
          />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About Me</Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            libero temporibus nulla voluptatem veritatis nihil debitis.
            Dignissimos eligendi qui quidem.
          </Text>
        </View>

        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/himanshu.__.gupta_/");
            }}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/in/himanshu-gupta-3201b7192/"
              );
            }}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-linkedin-in-logo-used-for-professional-networking-logo-color-tal-revivo.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Linking.openURL("https://wa.me/7015336538");
            }}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/220/220236.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    alignItems: "center",
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
    lineHeight: 30,
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
    textAlign: "justify",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
    width: "100%",
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    lineHeight: 30,
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 22,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: 20,
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
