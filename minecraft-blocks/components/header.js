import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { IconMoon, IconSun } from "@tabler/icons-react-native";

export function Header({ theme, toggleTheme }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Minecraft Blocks</Text>
      </View>
      <Pressable onPress={toggleTheme} style={{ padding: 2 }}>
        {theme !== "light" ? (
          <IconSun size={25} color="#fff" />
        ) : (
          <IconMoon size={25} color="#fff" />
        )}
      </Pressable>
    </View>
  );
}
