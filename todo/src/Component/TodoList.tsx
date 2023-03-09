import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'

type TodoListProp = {
    showTodoType: string
}
const TodoList = ({ showTodoType }: TodoListProp) => {

    const todos = useSelector((state: RootState) => state.todo.todos)
    const showTodo = (showTodoType) ? todos.filter((todo) => {
        if (todo.status === showTodoType) {
            return todo;
        }
    }) : todos;
    console.log(todos);

    return (
        <>
            <div className='' > {showTodo.map((task) => (
                <Todo
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status} />

            ))}  </div>

        </>

    )
}

export default TodoList