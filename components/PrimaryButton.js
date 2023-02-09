import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, buttonFunction }) {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.pressed, style.buttonInnerContainer]
            : style.buttonInnerContainer
        }
        onPress={buttonFunction}
      >
        <Text style={style.button}>{children}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "beige",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
