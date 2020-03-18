import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const forestImage = require("../../assets/forest.jpg");
const beachImage = require("../../assets/beach.jpg");
const mountainImage = require("../../assets/mountain.jpg");

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" source={forestImage} score={9} />
      <ImageDetail title="Beach" source={beachImage} score={7} />
      <ImageDetail title="Mountain" source={mountainImage} score={10} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
