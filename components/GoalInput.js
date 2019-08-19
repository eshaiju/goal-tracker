import React, { useState }  from 'react';

import { StyleSheet, View, Button, TextInput } from 'react-native';

const GoalInput = props => {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const inputChangeHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        value={enteredGoal}
        style={styles.input}
        onChangeText={inputChangeHandler}
      />
      <Button title="ADD" onPress={() => props.addGoalsHandler(enteredGoal)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: { 
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});

export default GoalInput;