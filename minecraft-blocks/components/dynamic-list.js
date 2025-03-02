import { FlatList, View, Text, Image } from "react-native";
import { styles } from "../styles/styles";

export default function DynamicList({ theme, data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.namespacedId}
      renderItem={({ item }) => (
        <Item
          name={item.name}
          image={item.image}
          price={item.price}
          theme={theme}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
}

function Item({ name, image, price, theme }) {
  return (
    <View
      style={[
        styles.item,
        {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#000",
          shadowColor: theme === "light" ? "#000" : "#fff",
          borderColor: theme === "light" ? "#e4e4e7" : "#333",
        },
      ]}
    >
      <Text
        style={[
          styles.itemTitle,
          {
            color: theme === "light" ? "#000" : "#fff",
          },
        ]}
      >
        {name}
      </Text>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.price}>
        <Image
          style={styles.diamond}
          source={{
            uri: "https://minecraft-api.vercel.app/images/items/diamond.png",
          }}
        />
        <Text
          style={[
            styles.itemDescription,
            {
              color: theme === "light" ? "#000" : "#fff",
            },
          ]}
        >
          {price} diamonds
        </Text>
      </View>
    </View>
  );
}
