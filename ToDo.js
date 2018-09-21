import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
    state = {
        isEditing: false,
        isCompleted: false,
        toDoValue: ""
    };

    toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    };

    startEditing = () => {
        const { text } = this.props;
        this.setState({
            isEditing: true,
            toDoValue: text
        });
    };

    finishEditing = () => {
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { isCompleted, isEditing, toDoValue } = this.state;
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this.toggleComplete}>
                        <View style={[
                            styles.circle,
                            isCompleted ? styles.completedCircle : styles.uncompletedCircle
                        ]} />
                    </TouchableOpacity>
                    { isEditing ? 
                        (<TextInput 
                            style={[styles.input, styles.text]} 
                            value={toDoValue} 
                            multiline={true}
                        />) : 
                        (<Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]}> {text} </Text>) 
                    }
                </View> 
                {isEditing ? (
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this.finishEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✅</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this.startEditing} >
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>🔨</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "red",
        borderWidth: 5,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#F23657"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        color: "#353535"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        marginVertical: 15
    }
});

// #7 Styling To Do Component part Two [ 5:00 ]