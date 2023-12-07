import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  fabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddButton;