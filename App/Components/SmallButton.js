import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

const SmallButton = ({text, action}) => {
  const color = action == 'Edit' ? Colors.YELLOW : Colors.PINK_DARK
  return (
    <TouchableOpacity style={[styles.fab, {backgroundColor: color}]}>
      <Text style={styles.fabText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    borderWidth: 0.3,
    borderColor: Colors.BLUE,
    // position: 'absolute',
    width: 70,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    // bottom: 20,
    // right: 20,
  },
  fabText: {
    color: Colors.BLACK,
    // color: '#fff',
    fontSize: 14,
    // fontWeight: 'bold',
  },
});

export default SmallButton;