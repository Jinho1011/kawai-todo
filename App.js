import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { TextInput } from "./node_modules/react-native-gesture-handler";

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content"></StatusBar>
				<Title style={styles.title}>Kawai Todo</Title>
				<View style={styles.card}>
					<TextInput style={styles.input} placeholder={"New To Do"} />
				</View>?
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F23657",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 30,
		marginTop: 50,
		fontWeight: 200
	}
});
