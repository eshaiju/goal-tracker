import React, { useState }  from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.item}</Text>
      </View >
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;