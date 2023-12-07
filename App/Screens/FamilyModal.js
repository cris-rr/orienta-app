import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList, 
  Modal
} from 'react-native';
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons'

import { familyView } from '../Utils/data'
import CardInteraction from '../Components/CardInteraction'
import AddButton from '../Components/floatButton'
import AddInteractionModal from '../Screens/Modals/AddInteractionModal'

const WIDTH = Dimensions.get('window').width
const HEIGHT_MODAL = 150;

const FamilyModal = (props) => {
  // TODO: get the familyView data from the props sorted by interactions
  const currentItem = props.item
  // const familyInteractions = familyView.interactions
  // console.log(interactions)
  if (!familyView) {
    return null;
  }
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [interactions, setInteractions] = useState(familyView.interactions); // TODO: get the data from the props

  const handleAddData = (newInteraction) => {
    setInteractions([...interactions, newInteraction]);
  }

  const handleAddPress = () => {
    setAddModalVisible(true);
    console.log('add button pressed')
  }

  const handleCloseModal = () => {
    setAddModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View disabled={true} style={styles.container}>
        <View style={styles.family}>
          <Text>Family: {currentItem.name}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={props.onRequestClose}>
            {/* <Text style={styles.closeIcon}>X</Text> */}
            <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={interactions}
            renderItem={({ item }) => <CardInteraction item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Modal
          animationType='fade'
          transparent={true}
          visible= {isAddModalVisible}
          onRequestClose={() => setAddModalVisible(false)}
        >
          
          <AddInteractionModal 
            isVisible={isAddModalVisible}
            onClose={handleCloseModal}
            onSubmit={handleAddData}
          />

        </Modal>
        
      </View>
      <AddButton onPress={() => handleAddPress()} />
    </SafeAreaView>
  );
};

export default FamilyModal

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#e8ecf4',
    width: '96%',
    marginTop: 110,
    alignSelf: 'center'
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: '#FCFFF7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  family: {
    // backgroundColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#000',
    justifyContent: 'space-between',
    // alignContent: 'center',
    marginBottom: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton:{
    // backgroundColor: '#000',
    // borderWidth: 1,
    width: 30,
    height: 30,
    // marginRight: 5,
    alignItems: 'flex-end'
  },
});
