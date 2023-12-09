import { View, Text } from 'react-native';
import { useContext } from 'react';
import UserContextProvider from '../Context/UserContextProvider';
import Companions from '../Screens/Companions';
import AuthContext from '../Context/AuthContext';

const CompanionScreen = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  return (
      <UserContextProvider>
        {(isAuthenticated && role > 1) ? (
          <Companions />
        ) : (
          <View style={{flex:1, alignItems:'center' }}>
            <Text>Sorry you don't have access, Only for admins</Text>
          </View>
        )}
      </UserContextProvider>
  );
};

export default CompanionScreen;
