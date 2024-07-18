import { PropsWithChildren, SetStateAction, useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from '@react-native-vector-icons/fontawesome';

interface Todo {
    title: string;
    description: string;
}
export default function TodoList({ todos, setTodos }: PropsWithChildren<{
    todos: Array<Todo>,
    setTodos: React.Dispatch<SetStateAction<Array<Todo>>>
}>) {

    const removeItem = useCallback(() =>
        function removeItem(index: number) {
            setTodos((prev) => {
                const copy = [...prev]
                copy.splice(index, 1)
                return copy
            })
        }, [setTodos])()

    return (
        <FlatList
            data={todos}
            scrollEnabled={false}
            contentContainerStyle={styles.todoListContainer}
            renderItem={({ item, index }) => <TodoItem todo={item} onClick={() => removeItem(index)} />}
            keyExtractor={(item) => item.description + item.title} />
    )
}

function TodoItem({ todo, onClick }: PropsWithChildren<{ todo: Todo, onClick: () => void }>) {
    return <View style={styles.todoItemContainer}>
        <Text style={styles.todoItemTitle}>{todo.title}</Text>
        <Text style={styles.todoItemDescription}>{todo.description}</Text>
        <TouchableOpacity style={styles.todoItemButton} onPress={() => onClick()}>
            <Text style={styles.todoItemButtonText}>Finish task</Text>
            <Icon name="check-circle" size={14} color="darkgreen" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    todoListContainer: {
        padding: 8,
        gap: 8
    },
    todoItemContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F1F1F1',
        borderRadius: 16,
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    todoItemTitle: {
        fontFamily: 'Product-Sans-Bold',
        letterSpacing: -.5,
        fontSize: 20,
        color: 'black'
    },
    todoItemDescription: {
        fontFamily: 'Product-Sans-Regular',
        letterSpacing: -.2,
        fontSize: 14,
    },
    todoItemButton: {
        width: 'auto',
        marginTop: 12,
        backgroundColor: 'lightgreen',
        borderRadius: 999,
        padding: 8,
        paddingHorizontal: 16,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8

    },
    todoItemButtonText: {
        fontFamily: 'Product-Sans-Bold',
        letterSpacing: -.2,
        fontSize: 14,
        color: 'darkgreen'
    }
})