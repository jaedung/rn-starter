import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + 1
      };
    case "decrease":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "increase" })} />
      <Button title="Decrease" onPress={() => dispatch({ type: "decrease" })} />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
