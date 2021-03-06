import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  const handleChange = value => {
    setPassword(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        value={password}
        onChangeText={handleChange}
      />
      {password.length < 5 && (
        <Text>Password must be longer than 5 characters.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
