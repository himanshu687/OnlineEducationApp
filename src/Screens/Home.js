import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MenuBar from "../Components/MenuBar";

const Home = (props) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem ex harum amet, ut qui! Cumque deserunt eaque animi praesentium officia, aliquid repudiandae, doloribus porro voluptatem aut, quam sapiente veritatis.";

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require("../../assets/logo.jpeg")}
          />

          <Text style={styles.mainHeader}>Welcome To</Text>
          <Text style={[styles.mainHeader, { fontSize: 28, color: "#4c5dab" }]}>
            {props.name}
          </Text>
          <Text style={styles.paraStyle}>{description}</Text>
        </View>
      </View>
      <MenuBar />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    // display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainHeader: {
    fontSize: 26,
    fontFamily: "Nunito_700Bold",
    color: "#344055",
    textTransform: "uppercase",
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    // display: "flex",
    // alignItems: "stretch",
    marginTop: 10,
    // borderRadius: 20,
  },
  paraStyle: {
    textAlign: "justify",
    fontSize: 16,
    fontFamily: "JosefinSans_400Regular",
    color: "#7d7d7d",
    marginTop: 26,
    paddingBottom: 10,
    lineHeight: 24,
  },
});

export default Home;
