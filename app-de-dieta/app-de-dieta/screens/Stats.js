import { View, Text, Button } from 'react-native';

export default function Stats({ stats, goBack }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 20 }}>📊 Estatísticas</Text>

      <Text>Total: {stats.total}</Text>
      <Text>Dentro da dieta: {stats.dentro}</Text>
      <Text>Fora da dieta: {stats.total - stats.dentro}</Text>
      <Text>{stats.porcentagem}% dentro da dieta</Text>

      <Button title="Voltar" onPress={goBack} />
    </View>
  );
}