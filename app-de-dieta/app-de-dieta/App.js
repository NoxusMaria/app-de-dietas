import { useState } from 'react';
import Home from './screens/Home';
import NewMeal from './screens/NewMeal';
import Details from './screens/Details';
import Feedback from './screens/Feedback';
import Stats from './screens/Stats';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const total = meals.length;
  const dentro = meals.filter(m => m.inDiet).length;
  const porcentagem = total > 0 ? ((dentro / total) * 100).toFixed(0) : 0;

  function addMeal(meal) {
    setMeals([...meals, meal]);
    setSelectedMeal(meal);
    setScreen('feedback');
  }

  function deleteMeal(meal) {
    if (!window.confirm('Deseja excluir?')) return;
    setMeals(meals.filter(m => m !== meal));
    setScreen('home');
  }

  function updateMeal(updatedMeal) {
    const updated = meals.map(m =>
      m === selectedMeal ? updatedMeal : m
    );
    setMeals(updated);
    setScreen('home');
  }

  if (screen === 'home') {
    return (
      <Home
        meals={meals}
        stats={{ total, dentro, porcentagem }}
        goToNew={() => setScreen('new')}
        goToStats={() => setScreen('stats')}
        goToDetails={(meal) => {
          setSelectedMeal(meal);
          setScreen('details');
        }}
      />
    );
  }

  if (screen === 'new') {
    return (
      <NewMeal
        goBack={() => setScreen('home')}
        onSave={addMeal}
      />
    );
  }

  if (screen === 'details') {
    return (
      <Details
        meal={selectedMeal}
        goBack={() => setScreen('home')}
        onDelete={() => deleteMeal(selectedMeal)}
        onEdit={() => setScreen('edit')}
      />
    );
  }

  if (screen === 'edit') {
    return (
      <NewMeal
        goBack={() => setScreen('home')}
        onSave={updateMeal}
        editingMeal={selectedMeal}
      />
    );
  }

  if (screen === 'feedback') {
    return (
      <Feedback
        meal={selectedMeal}
        goHome={() => setScreen('home')}
      />
    );
  }

  if (screen === 'stats') {
    return (
      <Stats
        stats={{ total, dentro, porcentagem }}
        goBack={() => setScreen('home')}
      />
    );
  }
}