import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = ({ itemData, onDeleteItem, id }) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => onDeleteItem(id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});
