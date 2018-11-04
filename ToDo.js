import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isEditing: false, toDoValue: props.text }
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        deleteToDo: PropTypes.func.isRequired,
        id:PropTypes.string.isRequired
    }

    toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    };

    startEditing = () => {
        this.setState({isEditing: true});
    };

    finishEditing = () => {
        this.setState({isEditing: false});
    };

    controlInput = (text) => {
        this.setState({toDoValue: text})
    }

    render() {
        const {isCompleted, isEditing, toDoValue} = this.state;
        const {text, id, deleteToDo} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this.toggleComplete}>
                        <View
                            style={[
                            styles.circle, 
                            isCompleted ? styles.completedCircle : styles.uncompletedCircle
                        ]}/>
                    </TouchableOpacity>
                    {isEditing
                        ? (<TextInput
                            style={[
                                styles.text, 
                                styles.input,
                                isCompleted ? styles.completedText : styles.uncompletedText
                            ]}
                            value={toDoValue}
                            multiline={true}
                            onChangeText={this.controlInput}
                            returnKeyType={"done"}
                            onBlur={this.finishEditing}/>)
                        : (
                            <Text
                                style={[
                                styles.text, isCompleted
                                    ? styles.completedText
                                    : styles.uncompletedText
                            ]}>
                                {text}
                            </Text>
                        )}
                </View>
                {isEditing
                    ? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this.finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>
                                        ✅
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                    : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this.startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>
                                        📖
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteToDo(id)}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>
                                        ❌
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: '#bbb'
    },
    uncompletedCircle: {
        borderColor: '#F23657'
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 20
    },
    completedText: {
        color: '#bbb',
        textDecorationLine: 'line-through'
    },
    uncompletedText: {
        color: '#353839'
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 2
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        marginVertical: 20,
        width: width / 2
    }
});

// #7 Styling To Do Component part Two [ 7 : 36 ]