import { View, Text, Button } from 'react-native';

export default function Details({ meal, goBack, onDelete, onEdit }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>{meal.name}</Text>
      <Text>{meal.description}</Text>
      <Text>{meal.date}</Text>
      <Text>{meal.time}</Text>
      <Text>{meal.inDiet ? 'Dentro 🟢' : 'Fora 🔴'}</Text>

      <Button title="Editar" onPress={onEdit} />
      <Button title="Excluir" onPress={onDelete} />
      <Button title="Voltar" onPress={goBack} />
    </View>
  );
}