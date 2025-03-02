import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { styles } from './styles/styles';
import Main from './components/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}
