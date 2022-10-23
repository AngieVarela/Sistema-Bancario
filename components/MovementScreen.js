import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,} from "react-native";


function MovementScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={{ color: "#FA76A3", fontWeight: 700, fontSize: 30 }}>
        Movimientos...</Text>
      <Image style={styles.images} source={require("../assets/card.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EDFF",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: 170,
    height: 140,
    marginTop: 20,
  },
}); 

export default MovementScreen;
