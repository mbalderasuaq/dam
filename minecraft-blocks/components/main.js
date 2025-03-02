import { View } from "react-native";
import { styles } from "../styles/styles";
import DynamicList from "./dynamic-list";
import { useState } from "react";
import { data } from "../data";
import { Header } from "./header";
import { Search } from "./search";

export default function Main() {
  const [theme, setTheme] = useState("light");
  const [blocks, setBlocks] = useState(data);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const filterBlocks = (text) => {
    const filteredBlocks = data.filter((block) =>
      block.name.toLowerCase().includes(text.toLowerCase())
    );
    setBlocks(filteredBlocks);
  };

  return (
    <View>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Search theme={theme} filterBlocks={filterBlocks} />
      <View
        style={[
          styles.body,
          { backgroundColor: theme === "light" ? "#f8f8ff" : "#000" },
        ]}
      >
        <DynamicList theme={theme} data={blocks} />
      </View>
    </View>
  );
}
