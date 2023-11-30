import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import Example from './App/Screens/SignIn';
import SignIn from './App/Screens/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
