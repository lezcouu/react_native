import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList';

const Main = () => {
  return (
    //   style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }} solo en version vieja de expo
    <View>
      <Text>Rate repository App</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
