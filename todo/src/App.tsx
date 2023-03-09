import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/Register';

import NavbarComponent from './Component/NavbarComponent';
import { useAuth, UserContextProvider } from './auth/authUser';
import RequireAuth from './auth/RequireAuth';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import PageNotFound from './Pages/PageNotFound';
import AllTodoList from './Component/AllTodoList';
import CompletedTodoList from './Component/CompletedTodoList';
import PendingTodoList from './Component/PendingTodoList';
import UserTodoPage from './Pages/UserTodoPage';

function App() {
  return (
    <>

      <UserContextProvider>
        <Provider store={store}>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/home/' element={<UserTodoPage />} >
              <Route index path='/home/' element={<RequireAuth> <AllTodoList /></RequireAuth>} />
              <Route path='/home/completed' element={<RequireAuth> <CompletedTodoList /></RequireAuth>} />
              <Route path='/home/pending' element={<RequireAuth><PendingTodoList /></RequireAuth>} />
            </Route>

            <Route path='/register' element={<SignUp />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Provider>
      </UserContextProvider>


    </>
  );
}

export default App;
