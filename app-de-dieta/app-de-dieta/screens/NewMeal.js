import { View, Text, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function NewMeal({ goBack, onSave, editingMeal }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [inDiet, setInDiet] = useState(true);

  useEffect(() => {
    if (editingMeal) {
      setName(editingMeal.name);
      setDescription(editingMeal.description);
      setTime(editingMeal.time);
      setDate(editingMeal.date);
      setInDiet(editingMeal.inDiet);
    }
  }, []);

  function handleSave() {
    if (!name || !time || !date) {
      alert('Preencha nome, data e horário');
      return;
    }

    onSave({ name, description, time, date, inDiet });
    goBack();
  }

  return (
    <View style={{ marginTop: 50 }}>
      <Text>{editingMeal ? 'Editar' : 'Nova'} Refeição</Text>

      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={{ borderWidth: 1, margin: 5 }} />
      <TextInput placeholder="Descrição" value={description} onChangeText={setDescription} style={{ borderWidth: 1, margin: 5 }} />
      <TextInput placeholder="Data (ex: 08/04/2026)" value={date} onChangeText={setDate} style={{ borderWidth: 1, margin: 5 }} />
      <TextInput placeholder="Horário (ex: 12:30)" value={time} onChangeText={setTime} style={{ borderWidth: 1, margin: 5 }} />

      <Button title={inDiet ? 'Dentro 🟢' : 'Fora 🔴'} onPress={() => setInDiet(!inDiet)} />

      <Button title="Salvar" onPress={handleSave} />
      <Button title="Voltar" onPress={goBack} />
    </View>
  );
}