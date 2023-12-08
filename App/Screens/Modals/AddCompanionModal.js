import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { users } from '../../Utils/data'
import Colors from '../../Utils/Colors'
import { colors } from 'react-native-elements'

const AddCompanionModal = ({onClose, onSubmit}) => {
  const [formData, setFormData] = useState({seniorId: '', minorId: '', sector:'', status: false})
  const [selected, setSelected] = useState("")
  const [selected2, setSelected2] = useState("")
  
  const data = users.map(user => {
    return {
      key: user.id,
      value: user.fullName
    }
  })
  // console.log(data)

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, seniorId: selected}))
    setFormData((prevState) => ({ ...prevState, minorId: selected2}))
  }, [selected, selected2])

  const handleChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    const newData = { id: Math.random(), ...formData }
    // console.log({newData})
    onSubmit(newData)
    onClose()
  }
  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.scroll}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Companion</Text>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text>Senior: </Text>
              <View style={styles.drop}>
                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={data}
                  save="value"
                  boxStyles={styles.boxStyles}
                  maxHeight={200}
                />
              </View>
            </View>
            <View style={styles.row}>
              <Text>Junior: </Text>
              <View style={styles.drop}>
                <SelectList
                  setSelected={(val) => setSelected2(val)}
                  data={data}
                  save="value"
                  boxStyles={styles.boxStyles}
                  maxHeight={200}
                />
              </View>
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.status}>
                <Text>Is this companion active? </Text>
                <Switch
                  style={styles.switch}
                  onValueChange={(value) => handleChange('status', value)}
                  value={formData.status}
                />
              </View>
              <View style={styles.row}>
                <Text>Sector:</Text>
                <TextInput
                  onChangeText={(value) => handleChange('sector', value)}
                  placeholder="Sector #"
                  style={styles.input}
                  value={formData.sector}
                />
              </View>
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
        </View>
      </ScrollView>
    </View>
  );
}

export default AddCompanionModal

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 70,
      
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      // paddingHorizontal: 35,
      paddingBottom: 35,
      // alignItems: "center",
      width: '90%',
      height: '90%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
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
      alignSelf: 'stretch'
    },
    content: {
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    drop: {
      width: '75%',
    },
    boxStyles: {
      borderWidth: 1,
      borderColor: Colors.GREEN_LIGHT,
      // width: '75%'
    },
    status: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switch: {
      transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] // scale the switch
    },
    input: {
      paddingBottom: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: Colors.BLUE,
      width: '40%',
      borderWidth: 0.5,
      borderColor: colors.grey4,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
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
    scroll: {
      // width: '100%',
      height: '100%',
    },
    
})