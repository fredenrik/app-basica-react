import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Tarea from "./Tarea";

export default class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tareaArray: [],
            tareaText: '',
        }
    }
    render() {
        let tarea = this.state.tareaArray.map((val, key) => {
            return <Tarea key={key} keyval={key} val={val}
                          deleteMethod={() => this.deleteTarea(key)}></Tarea>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> ---- TAREAS ----</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {tarea}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(tareaText) => this.setState({tareaText})}
                    value={this.state.tareaText}
                    placeholder =' > tarea'
                    placeholderTextColor = 'white'
                    underlineColorAndroid = 'transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.addTarea.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
    addTarea() {
        if(this.state.tareaText) {
            var d = new Date();
            this.state.tareaArray.push({
                'date': d.getFullYear()+
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                'tarea': this.state.tareaText
            });
            this.setState({tareaArray: this.state.tareaArray})
            this.setState({tareaText: ''})
        }
    }
    deleteTarea(key) {
        this.state.tareaArray.splice(key,1);
        this.setState({tareaArray: this.state.tareaArray})
    }
    uploadTarea() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 30,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});