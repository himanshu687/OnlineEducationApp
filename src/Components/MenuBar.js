import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MenuBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuBarContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Course");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Student");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#F9F9F9",
    borderTopWidth: 0.3,
    borderTopColor: "#eeeeee",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buttonStyle: {},
  imageStyle: {
    width: "100%",
    height: 35,
    aspectRatio: 1,
  },
});

export default MenuBar;
