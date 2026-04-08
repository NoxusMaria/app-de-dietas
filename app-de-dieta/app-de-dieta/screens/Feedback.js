import { View, Text, Button } from 'react-native';

export default function Feedback({ meal, goHome }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 20 }}>
        {meal.inDiet ? 'Parabéns! 🟢' : 'Que pena! 🔴'}
      </Text>

      <Text>
        {meal.inDiet
          ? 'Você está dentro da dieta!'
          : 'Você saiu da dieta, mas continue tentando!'}
      </Text>

      <Button title="Voltar ao início" onPress={goHome} />
    </View>
  );
}