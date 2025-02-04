import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const myName = 'Mike Balderas';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Mi "Primera" App en React Native</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/bulldog.jpg')}
          style={styles.image}
        />
        <Text style={styles.textName}>{myName}</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff'
  },
  navbar: {
    backgroundColor: '#150DF7',
    height: 110,
    width: '100%',
    paddingTop: 60,
    paddingInline: 20
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  textName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  }
});
