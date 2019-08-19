import React, { useState }  from 'react';

import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const inputChangeHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalsHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return(
    <Modal visible={props.isAddModel} animationType='fade'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          style={styles.input}
          onChangeText={inputChangeHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color={'red'} onPress={props.cancelGoalAdditionHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalsHandler}/>
          </View>        
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: { 
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;