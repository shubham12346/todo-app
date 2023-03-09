import React, { useState } from 'react'
import { addTodo } from '../store/todoSlice'
import { useDispatch } from 'react-redux'



const AddTodoComponent = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleFormData = (event: any) => {
        event.preventDefault();
        dispatch(addTodo({
            id: Math.floor(Math.random() * 100),
            title,
            description,
            status: 'pending',
        }))
        setTitle('')
        setDescription('')
    }

    return (
        <div className='  rounded' style={{ display: "inline-block" }}>
            <form >
                <div className='d-flex justify-content-center shadow rounded'>
                    <div className=' mx-2 p-3 todoAddBoxWidth'  >
                        <input type="text"
                            placeholder='Enter title '
                            className='form-control w-25 mb-2'
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}

                        />
                        <input type="text"
                            placeholder='Add your task here '
                            className='form-control col-lg-3 w-75'
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}

                        />
                    </div>
                    <div className=''>
                        <button className='btn btn-primary addTaskButtonMarginPadingWidth'
                            onClick={handleFormData}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleFormData(e)
                                }
                            }}
                        > Add  </button>
                    </div>

                </div>

            </form >
        </div >
    )

}

export default AddTodoComponent