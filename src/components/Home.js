import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Context from "../contexts/Context";
class Home extends Component {
  static contextType = Context;
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.context.incrementCounter()}>Increment</Text>
        <Text style={styles.txtCount}>{this.context.counter}</Text>
        <Text onPress={() => this.context.decrementCounter()}>Decrement</Text>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  txtCount: {
    padding: 10,
    fontSize: 20,
  },
});
