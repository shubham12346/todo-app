import React from 'react'
import AddTodoComponent from '../Component/AddTodoComponent'
import Genres from '../Component/Genres'
import { Outlet } from 'react-router-dom'
const UserTodoPage = () => {
    return (
        <>


            <div className='container text-center'>
                {/* <div className='text-center h3'> User Name </div> */}
                <div className='d-flex justify-space-around'>
                    <div><Genres /> </div>
                    <div className='w-75'>
                        <div className='Todocomponent'><AddTodoComponent /> </div>
                        <div className=' '>
                            <Outlet />
                        </div>
                    </div>
                </div>


            </div>



        </>
    )
}

export default UserTodoPage 