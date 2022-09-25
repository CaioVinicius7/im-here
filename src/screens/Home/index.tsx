import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Domingo, 25 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Caio Vinícius"
        onRemove={() => handleParticipantRemove("Caio Vinícius")}
      />
      <Participant
        name="Ellen Bessa"
        onRemove={() => handleParticipantRemove("Ellen Bessa")}
      />
      <Participant
        name="Remi"
        onRemove={() => handleParticipantRemove("Remi")}
      />
      <Participant
        name="Gata"
        onRemove={() => handleParticipantRemove("Gata")}
      />
    </View>
  );
}
