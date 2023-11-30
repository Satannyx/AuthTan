import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import registerStyles from "../styles/RegisterStyles";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleRegister = () => {
    if (!firstName || !email || !password || !confirmPassword) {
      Alert.alert(
        "Empty Fields",
        "Please fill in all the required input fields."
      );
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password === confirmPassword) {
      console.log("User registered:", { firstName, email, password });

      // Reset form fields
      setFirstName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setShowPassword(false);
      setShowPassword1(false);
      setPasswordMismatch(false);

      navigation.navigate("Login");
    } else {
      setPasswordMismatch(true);
    }
  };

  return (
    <View style={registerStyles.container}>
      <Text
        style={[
          registerStyles.registerText,
          { fontFamily: "Poppins_900Black" },
        ]}
      >
        CREATE ACCOUNT
      </Text>

      <TextInput
        style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
        placeholder="Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

<View style={registerStyles.passwordContainer}>
  <TextInput
    style={[
      registerStyles.input,
      registerStyles.passwordInput,
      { fontFamily: "Poppins_400Regular" },
    ]}
    placeholder="Password"
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={(text) => setPassword(text)}
  />
  <TouchableOpacity
    style={registerStyles.eyeIconContainer}
    onPress={() => setShowPassword(!showPassword)}
  >
    <Ionicons
      name={showPassword ? "eye-off" : "eye"}
      size={30}
      color="#C41F3B"
    />
  </TouchableOpacity>
</View>
<View style={registerStyles.passwordContainer}>
  <TextInput
    style={[
      registerStyles.input,
      registerStyles.passwordInput,
      { fontFamily: "Poppins_400Regular" },
    ]}
    placeholder="Confirm Password"
    secureTextEntry={!showPassword1}
    value={confirmPassword}
    onChangeText={(text) => setConfirmPassword(text)}
  />
  <TouchableOpacity
    style={registerStyles.eyeIconContainer}
    onPress={() => setShowPassword1(!showPassword1)}
  >
    <Ionicons
      name={showPassword1 ? "eye-off" : "eye"}
      size={30}
      color="#C41F3B"
    />
  </TouchableOpacity>
</View>

      {passwordMismatch && (
        <Text
          style={[
            { color: "#C41F3B", fontSize: 15, fontFamily: "Poppins_400Regular", marginLeft: -115, marginTop: -10, marginBottom: 10 },
          ]}
        >
          Passwords do not match.
        </Text>
      )}

      <CustomButton
        title="Sign Up"
        onPress={handleRegister}
        style={{ backgroundColor: "#C41F3B", width: 300 }}
        textStyle={{ color: "black", fontFamily: "Poppins_600SemiBold" }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            registerStyles.noacc,
            { fontFamily: "Poppins_400Regular", color: "black" },
          ]}
        >
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={[
              registerStyles.noacc,
              { fontFamily: "Poppins_600SemiBold", color: "#C41F3B" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
