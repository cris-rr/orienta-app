import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './App/Screens/Login';
import Example from './App/Screens/SignIn';
import SignIn from './App/Screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "SignIn" component={SignIn} 
            options={{headerShown: false}}
          />
          <Stack.Screen name = "Home" component={TabNavigation} 
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
