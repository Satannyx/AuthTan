import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#889D9D',
  },
  formContainer: {
    alignItems: "center",
    padding: 15,
  },
  noAccountContainer: {
    flexDirection: "row",
  },
  loginText: {
    fontSize: 60,
    margin: 0,
    letterSpacing: 0,
    textAlign: "left",
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10, 
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    width: 300,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
    top: 5, 
  },
  forgotPassword: {
    fontSize: 15,
    marginBottom: 10,
  },
  noacc: {
    fontSize: 16,
    margin: 0,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 180,
  }
});

export default loginStyles;
