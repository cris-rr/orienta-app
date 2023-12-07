import React, { useState, useEffect } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Switch,
  SafeAreaView,
  ScrollView, 
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { ButtonGroup, colors } from 'react-native-elements';
import { InteractionTypes } from '../../Utils/Enums';
import Colors from '../../Utils/Colors';

const AddInteractionModal = ({ isVisible, onClose, onSubmit }) => {

  const [formData, setFormData] = useState({type: '', effective: false, comment: '', date: Date.now()})
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(Object.values(InteractionTypes)[0]);

  useEffect(() => {
    // console.log('usando useEffect',{selectedIndex, selectedType})
    setFormData((prevState) => ({ ...prevState, type: selectedType}))
  }, [selectedIndex, selectedType])

  const updateIndex = (value) => {
    setSelectedIndex(value);
    setSelectedType(Object.values(InteractionTypes)[value]);
  }

  const handleChange = (name, value) => {
    // const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    const newData = { id: Math.random(), ...formData }
    console.log({newData})
    onSubmit(newData)
    onClose()
  }

  return (
    
      <SafeAreaView style={styles.safeArea}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.centeredView}>
            <Text style={styles.title}>Add Interaction</Text>
            <View style={styles.modalView}>
              <Text>Select interaction type: </Text>
              <ButtonGroup
                containerStyle={styles.toggle}
                onPress={updateIndex}
                selectedIndex={selectedIndex}
                buttons={Object.values(InteractionTypes)}
                selectedButtonStyle={styles.toggleSelected}
              />
              <View style={styles.effective}>
                <Text>This interaction was succesful? </Text>
                <Switch style={styles.switch}
                  onValueChange={(value) => handleChange('effective', value)}
                  value={formData.effective}
                />
              </View>
              <ScrollView style={styles.inputScroll}>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(value) => handleChange('comment', value)}
                  placeholder="Comments here..."
                  style={styles.input}
                  value={formData.comment}
                />
              </ScrollView>
              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={onClose}
                  style={styles.actionButton}
                >
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={[styles.actionButton, { backgroundColor: Colors.BLUE }]}
                >
                  <Text>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    
  );
};

export default AddInteractionModal

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    width: '96%',
    marginTop: 100,
    alignSelf: 'center',
    height: 430,
  },

  centeredView: {
    marginVertical: 25,
    marginHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    backgroundColor: '#007bff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    margin: 0.5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  toggle: {
    borderRadius: 20,

  },
  toggleSelected: {
    backgroundColor: Colors.BLUE,
  },
  effective: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] // scale the switch
  },
  inputScroll: {
    height: 100,
    borderWidth: 0.5,
    borderColor: colors.grey4,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    paddingBottom: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: Colors.PINK_DARK,
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
  },
})