import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isAgree, setIsAgree] = useState(false);

  const handleDataChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if (data.name && data.email && data.mobile && data.message) {
      console.log(data);
      Alert.alert(`Thank You ${data.name}`, "Your information has been sent");
      navigation.navigate("Home");
    } else {
      Alert.alert("", "Please fill all the fields");
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>Level up you knowledge</Text>

        <Text style={styles.description}>
          You can reach us anytime via himanshu@gmail.com
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Name:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Eg. Himanshu Gupta"
            onChangeText={handleDataChange("name")}
            value={data.name}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Email:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="demo@gmail.com"
            onChangeText={handleDataChange("email")}
            value={data.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Mobile:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="+91-9874563210"
            onChangeText={handleDataChange("mobile")}
            value={data.mobile}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>How can I help:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Tell us about yourself"
            multiline={true}
            numberOfLines={5}
            onChangeText={handleDataChange("message")}
            value={data.message}
            autoCapitalize="sentences"
          />
        </View>

        <View style={styles.wrapper}>
          <Checkbox
            value={isAgree}
            onValueChange={() => setIsAgree(!isAgree)}
            color={isAgree ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read and agreed with the T&C
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: isAgree ? "#4630EB" : "grey" },
          ]}
          disabled={!isAgree}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  wrapperText: {
    fontFamily: "JosefinSans_400Regular",
    marginLeft: 14,
  },
});
