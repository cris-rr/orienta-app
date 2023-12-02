import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons' 
import { FontAwesome5 } from '@expo/vector-icons'; 
import Companions from '../Screens/Companions'
import Familias from '../Screens/Familias'
import Users from '../Screens/Users'
import Family from '../Screens/Family'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShow:false
    }}>
      <Tab.Screen name='home' component={Familias} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='companions' component={Companions} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hands-helping" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='families' component={Family} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="family-restroom" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='user' component={Users} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation