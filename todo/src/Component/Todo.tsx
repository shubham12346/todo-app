import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, setStatus } from '../store/todoSlice'
type taskPropstype = {
    id: number,
    title: string,
    description: string,
    status: string,

}


const Todo = (props: taskPropstype) => {
    const dispatch = useDispatch();
    const handelDelete = (id: number) => {
        dispatch(deleteTodo(id))
    }
    const handleTodoEdit = (id: number, description: string) => {
        dispatch(editTodo({ id, description }))
    }
    const handleStatus = (id: number, description: string) => {
        dispatch(setStatus({ id, description }))
    }
    let basic = 'mx-1 my-1 statusButtonWidth btn  '
    let statusStyle = (props.status === 'completed') ? basic + 'btn-success' : basic + 'btn-secondary';
    return (
        <div className='d-flex justify-content-center  m-3 '>
            <div className="card  col-lg-8  shadow rounded pb-3"  >
                <div className="card-header text-start ">{props.title}</div>
                <div className='d-flex justify-space-between '>
                    <div style={{ width: '55%' }} className='m-1 border rounded' >
                        <p className='card-text text-start p-2' > {props.description} </p>
                    </div>

                    <div className='d-flex  mt-3'>
                        <button className={statusStyle}
                            onClick={() => handleStatus(props.id, props.description)}
                        > {props.status}</button>
                        <button className='btn btn-primary mx-1 my-1 buttonWidthAndHeigth '
                            onClick={() => handleTodoEdit(props.id, prompt("New text", props.description) || props.description)}
                        > edit</button>
                        <button className='btn btn-warning mx-1 my-1 buttonWidthAndHeigth '
                            onClick={() => { handelDelete(props.id) }}
                        > Delete</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Todo