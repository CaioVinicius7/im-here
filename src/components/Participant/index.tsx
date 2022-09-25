import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
}

export function Participant({ name }: ParticipantProps) {
  function handleParticipantRemove() {
    console.log("Você clicou no botão de remover!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
