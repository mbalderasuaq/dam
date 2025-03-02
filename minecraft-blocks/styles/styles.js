import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4bb508",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  logo: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 350,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "48%",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
  },
  diamond: {
    width: 20,
    height: 20,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  }
});
