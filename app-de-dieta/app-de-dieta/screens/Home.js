import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

export default function Home({ meals, stats, goToNew, goToStats, goToDetails }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 20 }}>🍽️ Refeições</Text>

      <Button title="Nova Refeição" onPress={goToNew} />
      <Button title="Ver Estatísticas" onPress={goToStats} />

      <Text>Total: {stats.total}</Text>
      <Text>Dentro: {stats.dentro}</Text>
      <Text>{stats.porcentagem}% saudável</Text>

      <FlatList
        data={meals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetails(item)}>
            <Text>
              {item.date} - {item.name} - {item.time} {item.inDiet ? '🟢' : '🔴'}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}