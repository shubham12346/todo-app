import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { todos } from './initialState'

type Todo = {
    id: number;
    title: string;
    description: string;
    status: string;
};

type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: todos,
};
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
        },
        editTodo: (
            state,
            action: PayloadAction<{ id: number; description: string }>
        ) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    // eslint-disable-next-line no-lone-blocks
                    {
                        return todo.description = action.payload.description;
                    }

                }
            });
        },
        setStatus: (state, action: PayloadAction<{ id: number; description: string }>) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    if (todo.status === 'pending') {
                        return todo.status = 'completed'
                    } else {
                        return todo.status = 'pending'
                    }
                }
            })
        },
    },
});

export const { addTodo, deleteTodo, editTodo, setStatus } = todoSlice.actions;
export default todoSlice;
