import { IconArrowRight, IconMoon, IconSun } from "@tabler/icons-react-native";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from "react-native";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [itemName, setItemName] = useState("");
  const [shopList, setShopList] = useState([]);
  const inputRef = useRef();

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const addItem = () => {
    if (inputRef) {
      inputRef.current.clear();
    }

    if (itemName) {
      setShopList([
        ...shopList,
        {
          name: itemName,
          shopped: false,
        },
      ]);
      setItemName("");
    } else {
      alert("Debes escribir el nombre del producto");
    }
  };

  const toggleCheck = (value, item) => {
    const newShopList = [...shopList];
    newShopList[item].shopped = value;
    setShopList(newShopList);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#f8f8f8" : "#0a0a0a" },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop List</Text>
        <Pressable onPress={toggleTheme}>
          {theme === "light" ? (
            <IconSun color="#fff" />
          ) : (
            <IconMoon color="#fff" />
          )}
        </Pressable>
      </View>
      <View style={styles.shopList}>
        <ScrollView>
          {shopList.length > 0 ? (
            shopList.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.item,
                  { borderColor: theme === "light" ? "#dadada" : "#414141" },
                ]}
              >
                <Text
                  style={{
                    color: theme === "light" ? "#0a0a0a" : "#f8f8ff",
                    textDecorationLine: item.shopped ? "line-through" : "none",
                  }}
                >
                  {item.name}
                </Text>
                <Checkbox
                  onValueChange={(value) => toggleCheck(value, index)}
                  value={item.shopped}
                  color="#150df7"
                  style={styles.checkbox}
                />
              </View>
            ))
          ) : (
            <Text
              style={{
                color: theme === "light" ? "#0a0a0a" : "#f8f8ff",
              }}
            >
              Aun no hay elementos
            </Text>
          )}
        </ScrollView>
      </View>
      <View
        style={[
          styles.footer,
          { backgroundColor: theme === "light" ? "#fff" : "#000" },
        ]}
      >
        <TextInput
          style={[
            styles.textInput,
            { borderColor: theme === "light" ? "#dadada" : "#414141" },
          ]}
          placeholder="Nombre del producto..."
          placeholderTextColor={theme === "light" ? "#0a0a0a" : "#f8f8ff"}
          onChangeText={setItemName}
          onSubmitEditing={addItem}
          ref={inputRef}
        />
        <Pressable onPress={addItem} style={styles.addButton}>
          <IconArrowRight color="#fff" />
        </Pressable>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#150df7",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f8f8ff",
  },
  shopList: {
    height: "80%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  item: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
  checkbox: {
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginRight: 10,
    paddingLeft: 10,
    width: "85%",
  },
  addButton: {
    backgroundColor: "#150df7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
  },
});
