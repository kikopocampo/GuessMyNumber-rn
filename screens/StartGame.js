import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetInputNumber() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 - 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputNumber }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instruction}>Enter a Number</Text>
        <TextInput
          value={enteredNumber}
          onChangeText={(enteredText) => setEnteredNumber(enteredText)}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton buttonFunction={resetInputNumber}>
              RESET
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton buttonFunction={confirmInputHandler}>
              CONFIRM
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  instruction: {
    fontSize: 24,
  },
});

export default StartGameScreen;
