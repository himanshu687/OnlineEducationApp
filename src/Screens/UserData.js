import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const respose = await axios.get(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      // console.log(respose);
      setStudentData(respose?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} color="#0000ff" />
      </View>
    );
  }

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio-Data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}>Name: {item.name}</Text>
            <Text style={styles.myName}>Email: {item.email}</Text>
            <Text style={styles.myName}>Mobile: {item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>List of Students</Text>

      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={studentData}
          renderItem={showUserData}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    padding: 10,
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
    fontFamily: "JosefinSans_400Regular",
  },
  bioData: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "JosefinSans_500Medium",
    marginTop: 10,
    flex: 0.1,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 250,
    borderRadius: 5,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 6,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
  },
});

export default UserData;
