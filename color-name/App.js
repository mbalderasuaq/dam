import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { IconColorPicker, IconMoon, IconSun } from "@tabler/icons-react-native";
import { BottomSheet } from "@rneui/themed";

function useColors() {
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState("idle");

  const getColors = useCallback(async () => {
    setStatus("loading");
    try {
      const response = await fetch("https://www.csscolorsapi.com/api/colors");
      const data = await response.json();
      setColors(data.colors);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    getColors();
  }, []);

  return { colors, status, getColors };
}

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("red");
  const { colors, status } = useColors();
  const [search, setSearch] = useState("");
  const [filteredColors, setFilteredColors] = useState(colors);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (search === "") {
      setFilteredColors(colors);
    } else {
      setFilteredColors(
        colors.filter((color) =>
          color.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a" },
      ]}
    >
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <View style={styles.header}>
        <Text
          style={[styles.title, { color: theme === "light" ? "#000" : "#fff" }]}
        >
          Color Name
        </Text>
        <Pressable onPress={toggleTheme}>
          {theme === "light" ? (
            <IconSun color="#000" size={30} />
          ) : (
            <IconMoon color="#fff" size={30} />
          )}
        </Pressable>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {status === "success" &&
            filteredColors.map((color, index) => (
              <Pressable
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: theme === "light" ? "#fff" : "#212121",
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "100%",
                }}
                onPress={() => {
                  setColor(`#${color.hex}`);
                  setShowModal(true);
                }}
              >
                <View
                  backgroundColor={`#${color.hex}`}
                  style={{ width: 30, height: 30, borderRadius: 5 }}
                />
                <Text
                  style={{
                    color: theme === "light" ? "#000" : "#fff",
                    marginLeft: 10,
                  }}
                >
                  {color.name}
                </Text>
              </Pressable>
            ))}
          {status === "loading" && <ActivityIndicator size="large" />}
        </ScrollView>
      </View>
      <BottomSheet isVisible={showModal}>
        <View
          style={{
            width: "100%",
            backgroundColor: theme === "light" ? "#fff" : "#212121",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              backgroundColor: color,
              height: 200,
              width: 300,
              borderWidth: 1,
              borderColor: theme === "light" ? "#dadada" : "#212121",
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              color: theme === "light" ? "#000" : "#fff",
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            {color}
          </Text>
          <Pressable style={styles.button} onPress={() => setShowModal(false)}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Cerrar</Text>
          </Pressable>
        </View>
      </BottomSheet>
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: theme === "light" ? "#fff" : "#212121" },
        ]}
      >
        <TextInput
          placeholder="Introduce el nombre de un color"
          placeholderTextColor={theme === "light" ? "#000" : "#fff"}
          style={{
            borderColor: theme === "light" ? "#dadada" : "#000",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            flex: 1,
            color: theme === "light" ? "#000" : "#fff",
          }}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: "85%",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header: {
    width: "100%",
    height: "5%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 25,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#f00",
    width: 300,
  },
});
