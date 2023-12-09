import { View, Text } from 'react-native';
import { useContext } from 'react';
import UserContextProvider from '../Context/UserContextProvider';
import Familias from '../Screens/Familias';
import AuthContext from '../Context/AuthContext';
// import AuthContextProvider from '../Context/AuthContextProvider';

const FamiliasScreen = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  return (
      <UserContextProvider>
        {(isAuthenticated) ? (
          <Familias />
        ) : (
          <View style={{flex:1, alignItems:'center' }}>
            <Text>Sorry you don't have access, Only for admins</Text>
          </View>
        )}
      </UserContextProvider>
  );
};

export default FamiliasScreen;
