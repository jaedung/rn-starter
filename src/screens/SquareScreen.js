import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: "red" | "green" | "blue", amount: 15 | =15 }
  switch (action.colorToChange) {
    case "red":
      return {
        ...state,
        red: state.red + action.amount
      };
    case "green":
      return {
        ...state,
        green: state.green + action.amount
      };
    case "blue":
      return {
        ...state,
        blue: state.blue + action.amount
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT * -1 })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT * -1 })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT * -1 })
        }
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
