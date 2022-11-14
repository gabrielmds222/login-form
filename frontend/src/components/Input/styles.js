import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "#7C7C8A",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#F3F4FB",
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: "#7978B5",
  },
  erro: {
    color: "red",
    fontSize: 12,
    marginTop: 7,
  },
});

export default styles;
