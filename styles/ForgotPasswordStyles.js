import { StyleSheet } from "react-native";

const forgotPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#889D9D',
  },
  logo: {
    width: 120,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10, 
    fontSize: 15,
  },
  resetButton: {
    backgroundColor: "#007bff",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  resetButtonText: {
    color: "white",
    fontSize: 20,
  },
  goBack: {
    fontSize: 18,
    color: "#FF4732",
    marginTop: 10,
  },
});

export default forgotPasswordStyles;
