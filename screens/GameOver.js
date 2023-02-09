import { Image, Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameOver = ({ startNewGameHandler, userNumber, guessRounds }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton buttonFunction={() => startNewGameHandler()}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "beige",
    borderRadius: 150,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 23,
    textAlign: "center",
    marginVertical: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "darkgreen",
  },
});
