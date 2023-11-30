import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import forgotPasswordStyles from "../styles/ForgotPasswordStyles";
import CustomButton from "../components/CustomButton";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

  };

  return (
    <View style={forgotPasswordStyles.container}>
      <Image source={require("../img/Logo/horde.png")} style={forgotPasswordStyles.logo} />
      <Text
        style={[
          forgotPasswordStyles.title,
          { fontFamily: "Poppins_900Black" },
        ]}
      >
        RESTORE PASSWORD
      </Text>
      <TextInput
        style={[
          forgotPasswordStyles.input,
          { fontFamily: "Poppins_400Regular" },
        ]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <CustomButton
        title="Send Reset Instructions"
        onPress={handleResetPassword}
        style={{ backgroundColor: "#C41F3B", width: 300 }}
        textStyle={{ color: "black", fontFamily: "Poppins_600SemiBold" }}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={[
            forgotPasswordStyles.goBack,
            { fontFamily: "Poppins_600SemiBold", color: "#C41F3B" },
          ]}
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
