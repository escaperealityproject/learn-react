import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
    // alert(this.state.placeName);
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat(prevState.placeName)
    //   };
    // });
    this.setState({ places: [...this.state.places, this.state.placeName] });
  };

  render = () => {
    const placesOutput = this.state.places.map((place, i) => {
      return <Text key={i}>{place}</Text>;
    });
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add"
            style={styles.placeInput}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {/* <Text>Hello</Text> */}
          {placesOutput}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});