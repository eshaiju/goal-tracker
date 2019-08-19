import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([]);

  const addGoalsHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }])
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId)
    })
  }

	return (
		<View style={styles.screen}>
			<GoalInput addGoalsHandler={addGoalsHandler}/>
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
