import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions, Platform, TextInput, ScrollView  } from "react-native";
import  ToDo from './ToDo'

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
	state={
		newToDo: ""
	}

	render() {
		const { newToDo } = this.state;
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Text style={styles.title}>DIMI To Do</Text>
				<View style={styles.card}>
					<TextInput 
						style={styles.input} 
						placeholder={"New To Do"} 
						value={newToDo}
						onChangeText={this.controlNewTodo}
						returnKeyType={"done"}
						placeholderTextColor={"#999"}
						autoCorrect={false}
					/>
					<ScrollView contentContainerStyle={styles.ToDo}>
						<ToDo text={"This is ToDo"}></ToDo>
					</ScrollView>
				</View>
			</View>
		);
	}

	controlNewTodo = text => {
		this.setState({
			newToDo: text
		});
    };
    
    loadToDo = () => {
        this.setState({
            loadedToDo: true
        })  
    };
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
		fontWeight: "600",
		marginBottom: 30
	},
	card: {
		backgroundColor: "white",
		flex: 1,
		width: width - 25,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		...Platform.select({
			ios: {
				shadowColor: "rgb(50,50,50,)",
				shadowOpacity: 0.5,
				shadowRadius: 10,
				shadowOffset: {
					height: -1,
					width:0
				}
			}, android: {
				elevation: 3
			}
		})
	},
	input: {
		padding: 20,
		fontSize: 25
	},
	ToDo: {
		alignItems:"center"
	}
});
