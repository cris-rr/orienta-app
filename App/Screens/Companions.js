import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/Header';
import { companionsDB } from '../Utils/data';
import CardCompanion from '../Components/CardCompanion';
import AddButton from '../Components/floatButton';
import AddCompanionModal from '../Screens/Modals/AddCompanionModal'

const Companions = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [companions, setCompanions] = useState(companionsDB);
  
  const handleCardPress = (id) => {
    console.log(`Card with ID ${id} was clicked`)
  }

  const handleAddPress = () => {
    setAddModalVisible(true);
  };

  const handleCloseModal = () => {
    setAddModalVisible(false)
  }

  const handleAddData = (newCompanion) => {
    console.log({newCompanion})
    //TODO: prepare companions for the collection, it should include id, fullName and phone, sector
    // setCompanions([...companions, newCompanion])
  }

  return (
    <>
      <Header />
      <Text style={styles.subTitle}>All companions</Text>
      <View>
        <FlatList
          data={companions}
          renderItem={({ item }) => (
            <CardCompanion
              item={item}
              onPress={() => handleCardPress(item.id)}
            />
          )}
          keyExtractor={(item) => item.companionCode}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <AddCompanionModal
          isVisible={isAddModalVisible}
          // onRequestClose={() => setAddModalVisible(false)}
          onClose={handleCloseModal}
          onSubmit={handleAddData}
        />
      </Modal>

      <AddButton onPress={() => handleAddPress()} />
    </>
  );
};

export default Companions;

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'Poppins-Regular',
    paddingTop: 5,
    paddingHorizontal: 10
  }
});
