import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
    console.log("CLICK");
  };

  const countRounds = () => {
    setGuessRounds((prev) => prev + 1);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
        countRounds={countRounds}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        startNewGameHandler={startNewGameHandler}
        guessRounds={guessRounds}
      />
    );
  }

  return (
    <LinearGradient colors={["beige", "lightgreen"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/dice-bg.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.45 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
