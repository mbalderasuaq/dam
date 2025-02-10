import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    { id: 1, title: "Leche", completed: false },
    { id: 2, title: "Pan", completed: false },
    { id: 3, title: "Huevos", completed: false },
    { id: 4, title: "Carne", completed: false },
    { id: 5, title: "Pescado", completed: false },
  ]);

  const handleCheck = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const addItem = (text) => {
    if (text) {
      setList([
        ...list,
        { id: list.length + 1, title: text, completed: false },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>To Do</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.listTitle}>Lista de compras</Text>
        </View>
        <View style={styles.list}>
          <ScrollView>
            {list.map((item) => (
              <CheckBox
                key={item.id}
                title={item.title}
                onPress={() => {
                  handleCheck(item.id);
                }}
                checked={item.completed}
                containerStyle={styles.checkbox}
                checkedColor="#3949ab"
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Añadir elemento..."
            onSubmitEditing={({
              nativeEvent: { text },
              currentTarget: { clear },
            }) => {
              addItem(text);
              clear();
            }}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  navbar: {
    backgroundColor: "#3949ab",
    height: "10%",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    maxWidth: "100%",
    height: "90%",
    width: "100%",
    backgroundColor: "#f8f8ff",
  },
  titleContainer: {
    height: "10%",
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  list: {
    width: "100%",
    marginBottom: "10%",
    paddingBottom: "27%",
    paddingHorizontal: 20,
  },
  checkbox: {
    backgroundColor: "white",
    marginLeft: 0,
    borderRadius: 10,
    marginBottom: 3,
  },
  inputContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
