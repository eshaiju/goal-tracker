import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModel, setIsAddModel] = useState(false);

  const addGoalsHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    setIsAddModel(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddModel(false);
  }

	return (
		<View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => {setIsAddModel(true)}}/>
			<GoalInput 
        onAddGoal={addGoalsHandler}
        isAddModel={isAddModel}
        cancelGoalAdditionHandler={cancelGoalAdditionHandler}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id }
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={() => removeGoalHandler(itemData.item.id)} item={itemData.item.value} />
        )} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
    padding: 50
	}
});
