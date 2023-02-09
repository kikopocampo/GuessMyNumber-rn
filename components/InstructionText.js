import { StyleSheet, Text } from "react-native";
const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
};
export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
