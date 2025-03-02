import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/styles";

export function Search({ theme, filterBlocks }) {
    return(
        <View
        style={[
          styles.search,
          { backgroundColor: theme === "light" ? "#f8f8ff" : "#000" },
        ]}
      >
        <Text
          style={[
            styles.searchTitle,
            { color: theme === "light" ? "#000" : "#fff" },
          ]}
        >
          Search
        </Text>
        <TextInput
          placeholder="Enter a block name"
          placeholderTextColor={theme === "light" ? "#888" : "#666"}
          onChangeText={(text) => {
            filterBlocks(text);
          }}
          style={[
            styles.input,
            {
              borderColor: theme === "light" ? "#dadada" : "#414141",
              color: theme === "light" ? "#000" : "#fff",
            },
          ]}
        />
      </View>
    );
}