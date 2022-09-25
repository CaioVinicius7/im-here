import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Domingo, 25 de novembro de 2022</Text>
    </View>
  );
}
