import React from "react";
import { View, StyleSheet, Text } from "react-native";
import GlobalState from "./src/contexts/GlobalState";
import Home from "./src/components/Home";

export default class App extends React.Component {
  render() {
    return (
      <GlobalState>
        <View style={styles.container}>
          <Home />
        </View>
      </GlobalState>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
