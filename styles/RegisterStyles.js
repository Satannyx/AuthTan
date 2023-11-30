import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#889D9D',
  },
  registerText: {
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
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  passwordInput: {
    width: 300,
  },
  eyeIconContainer: {
    position: "absolute",
    right: -30,
    top: 5, 
  },
  button: {
    backgroundColor: "blue",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  togglePassword: {
    fontSize: 11,
    color: "red",
    margin: 5,
    width: 35,
    textAlign: "center",
    textTransform: "uppercase",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  noacc: {
    fontSize: 16,
    color: "blue",
    margin: 0,
  },
});

export default registerStyles;
