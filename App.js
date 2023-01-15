import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";

import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            onCancel={endAddGoalHandler}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
