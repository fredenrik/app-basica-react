import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Tarea extends React.Component{
    render() {
        return (
            <View key={this.props.keyval} style={styles.tarea}>
                <Text style={styles.tareaText}>{this.props.val.date}</Text>
                <Text style={styles.tareaText}>{this.props.val.tarea}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.tareaDelete}>
                    <Text style={styles.tareaDelete}>B</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tarea: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    tareaText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    tareaDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    tareaDeleteText: {
        color: 'white',
    }
});