import { StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    padding: 24,
    margin: 29,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
