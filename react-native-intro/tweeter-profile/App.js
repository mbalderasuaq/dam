import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/banner.jpg')} style={styles.banner} />
      <View style={{ marginLeft: 10 }}>
        <Image source={require('./assets/profile.jpg')} style={styles.profile} />
        <Text style={styles.name}>Mike Balderas</Text>
        <Text style={styles.textVariant}>@mikebalderas</Text>
        <Text style={styles.textVariant}>🧑‍💻🐼❤️</Text>
        <Text style={styles.textVariant}>🎈Fecha de nacimiento: 7 de noviembre de 2004</Text>
        <Text style={styles.textVariant}>📅 Se unió en diciembre de 2019</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 15, marginTop: 10 }}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.textBold}>
              60
            </Text>
            <Text style={styles.textVariant}>
              Siguiendo
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.textBold}>
              4
            </Text>
            <Text style={styles.textVariant}>
              Seguidores
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 15, borderBottomWidth: 1, borderColor: "#414141" }}>
        <View style={{ borderBottomWidth: 2, borderColor: "#439afc", marginLeft: 10 }}>
          <Text style={{ ...styles.textBold, paddingBottom: 10 }}>Publicaciones</Text>
        </View>
        <Text style={styles.textVariantBold}>Respuestas</Text>
        <Text style={styles.textVariantBold}>Destacados</Text>
        <Text style={styles.textVariantBold}>Artículos</Text>
      </View>
      <View>
        <View style={styles.tweet}>
          <Image source={require('./assets/profile.jpg')} style={styles.tweetPhoto} />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', gap: 5, marginBottom: 3 }}>
              <Text style={styles.textBold}>Mike Balderas</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>@mikebalderas</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>19 ago 22</Text>
            </View>
            <Text style={styles.text}>
              Este es un tweet de prueba
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
              <Text style={{ fontSize: 16, color: "#72767c" }}>🔁 1</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>❤️ 5</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>💬 3</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>📤</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>🔖</Text>
            </View>
          </View>
        </View>
        <View style={styles.tweet}>
          <Image source={require('./assets/profile.jpg')} style={styles.tweetPhoto} />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', gap: 5, marginBottom: 3 }}>
              <Text style={styles.textBold}>Mike Balderas</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>@mikebalderas</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>10 ago 22</Text>
            </View>
            <Text style={styles.text}>
              Hola mundo
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
              <Text style={{ fontSize: 16, color: "#72767c" }}>🔁 0</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>❤️ 10</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>💬 1</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>📤</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>🔖</Text>
            </View>
          </View>
        </View>
        <View style={styles.tweet}>
          <Image source={require('./assets/profile.jpg')} style={styles.tweetPhoto} />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', gap: 5, marginBottom: 3 }}>
              <Text style={styles.textBold}>Mike Balderas</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>@mikebalderas</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>10 ago 22</Text>
            </View>
            <Text style={styles.text}>
              Tweet de prueba 0
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
              <Text style={{ fontSize: 16, color: "#72767c" }}>🔁 5</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>❤️ 1</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>💬 5</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>📤</Text>
              <Text style={{ fontSize: 16, color: "#72767c" }}>🔖</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    paddingTop: 40,
  },
  text: {
    fontSize: 16,
    color: '#f8f8ff',
  },
  textBold: {
    fontSize: 16,
    color: '#f8f8ff',
    fontWeight: 'bold',
  },
  textVariant: {
    fontSize: 16,
    color: '#72767c',
    marginBottom: 10
  },
  textVariantBold: {
    fontSize: 16,
    color: '#72767c',
    fontWeight: 'bold',
  },
  banner: {
    width: "100%",
    height: 150,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#0a0a0a',
    marginTop: -50
  },
  name: {
    fontSize: 24,
    color: '#f8f8ff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  tweet: {
    width: "100%",
    height: 90,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: "#414141",
    paddingLeft: 10,
    flexDirection: 'row',
  },
  tweetPhoto: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  }
});
