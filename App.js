import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import Questao01 from "./src/pages/Questao01";
import Questao02 from "./src/pages/Questao02";
import Questao03 from "./src/pages/Questao03";
import Questao04 from "./src/pages/Questao04";
import Questao05 from "./src/pages/Questao05";

export default function App() {
  return (
    <View style={styles.view}>
      <Questao01 />
      <Questao02 />
      <Questao03 />
      <Questao04 />
      <Questao05 />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
});
