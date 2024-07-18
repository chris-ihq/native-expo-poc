import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import { useState } from "react";
import TodoList from "../components/Home/TodoList";
import BottomBar from "../components/Home/BottomBar";


export interface Todo {
    title: string;
    description: string;
}

export default function HomeView() {
    const baseList: Array<Todo> = [
        {
            title: "Buy groceries",
            description: "Buy eggs, milk, bread, and butter"
        },
        {
            title: "Pick up laundry",
            description: "Pick up laundry from the dry cleaners"
        },
        {
            title: "Call mom",
            description: "Call mom to wish her a happy birthday"
        },
        {
            title: "Read a book",
            description: "Read the first chapter of the book you bought last week"
        }
    ]

    const [todoList, setTodoList] = useState<Array<Todo>>(baseList)
    return (
        <ScrollView style={styles.scrollView}>
            <Header count={todoList.length} />
            <TodoList todos={todoList} setTodos={setTodoList} />
            <BottomBar setTodoList={setTodoList} baseList={baseList} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        position: "relative",
        // backgroundColor: 'F2F2F2',
    }
})