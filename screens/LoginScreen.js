import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import loginStyles from "../styles/LoginStyles";
import CustomButton from "../components/CustomButton";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      navigation.navigate("HomePage");
    }
  };

  return (
    <View style={loginStyles.container}>
      <Image source={require('../img/Logo/horde.png')} style={loginStyles.logo} />
      <View style={loginStyles.formContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Text
            style={[
              loginStyles.goBack,
              { fontFamily: "Poppins_600SemiBold", color: "#C41F3B", marginBottom: 20 },
            ]}
          >
            Go Back
          </Text>
        </TouchableOpacity>
        <Text style={[loginStyles.loginText, { fontFamily: "Poppins_600SemiBold" }]}>
          Welcome
        </Text>

        <TextInput
          style={[loginStyles.input, { fontFamily: "Poppins_400Regular" }]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <View style={loginStyles.passwordContainer}>
          <TextInput
            style={[
              loginStyles.input,
              loginStyles.passwordInput,
              { fontFamily: "Poppins_400Regular" },
            ]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
           <TouchableOpacity
            style={loginStyles.eyeIconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={30}
              color="#C41F3B"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text
            style={[
              loginStyles.forgotPassword,
              { fontFamily: "Poppins_400Regular", color: "#C41F3B", marginLeft: 160, marginTop: -10, marginBottom: 20 },
            ]}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <CustomButton
          title="Login"
          onPress={handleLogin}
          style={{ backgroundColor: "#C41F3B", width: 300 }}
          textStyle={{ color: "black", fontFamily: "Poppins_600SemiBold" }}
        />
        <View style={loginStyles.noAccountContainer}>
          <Text
            style={[
              loginStyles.noacc,
              { fontFamily: "Poppins_400Regular", color: "black" },
            ]}
          >
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={[
                loginStyles.noacc,
                { fontFamily: "Poppins_600SemiBold", color: "#C41F3B" },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
