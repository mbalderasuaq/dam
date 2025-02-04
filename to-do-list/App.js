import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    { id: 1, title: "Leche", completed: false },
    { id: 2, title: "Pan", completed: false },
    { id: 3, title: "Huevos", completed: false },
    { id: 4, title: "Carne", completed: false },
    { id: 5, title: "Pescado", completed: false },
    { id: 6, title: "Frutas", completed: false },
    { id: 7, title: "Verduras", completed: false },
    { id: 8, title: "Pasta", completed: false },
    { id: 9, title: "Arroz", completed: false },
    { id: 10, title: "Salsa de tomate", completed: false },
    { id: 11, title: "Aceite", completed: false },
    { id: 12, title: "Sal", completed: false },
    { id: 13, title: "Azúcar", completed: false },
    { id: 14, title: "Café", completed: false },
    { id: 15, title: "Té", completed: false },
  ]);

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
            {/* <CheckBox title="Leche" />
            <CheckBox title="Pan" />
            <CheckBox title="Huevos" />
            <CheckBox title="Carne" />
            <CheckBox title="Pescado" />
            <CheckBox title="Frutas" />
            <CheckBox title="Verduras" />
            <CheckBox title="Pasta" />
            <CheckBox title="Arroz" />
            <CheckBox title="Salsa de tomate" />
            <CheckBox title="Aceite" />
            <CheckBox title="Sal" />
            <CheckBox title="Azúcar" />
            <CheckBox title="Café" />
            <CheckBox title="Té" /> */}
            {list.map((item) => (
              <CheckBox
                key={item.id}
                title={item.title}
                onPress={() => {
                  setList(
                    list.map((listItem) => {
                      if (listItem.id === item.id) {
                        return { ...listItem, completed: !listItem.completed };
                      }
                      return listItem;
                    })
                  );
                }}
                checked={item.completed}
                containerStyle={styles.checkbox}
              />
            ))}
          </ScrollView>
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
    paddingHorizontal: 20,
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
  },
  list: {
    width: "100%",
    marginBottom: "10%",
    paddingBottom: "15%",
  },
  checkbox: {
    backgroundColor: "white",
    marginLeft: 0,
    borderRadius: 10,
  },
});
