import Icon from "@react-native-vector-icons/fontawesome";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../../views/HomeView";

export default function BottomBar({ setTodoList, baseList }: PropsWithChildren<{ setTodoList: Function, baseList: Array<Todo> }>) {
    return <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setTodoList(baseList)}>
            <Text style={styles.buttonText}>Reset tasks</Text>
            <Icon name="refresh" size={16} color="teal" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        backgroundColor: 'lightblue',
        height: 48,
        borderRadius: 30,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Product-Sans-Bold',
        color: 'teal',
        fontSize: 16
    }
})