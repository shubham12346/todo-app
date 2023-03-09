import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../auth/authUser';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    const authUser = useAuth();
    const handleLogout = () => {
        authUser?.setUserToken(null)
    }
    return (
        <Navbar expand="lg" bg='dark' className='mb-2 h3 p-2 shadow-lg navbar navbar-dark bg-dark"'>
            <Container>
                <NavLink className='navbar-brand' to='/home'> Todos</NavLink>
                <Nav.Item>
                    {authUser?.userToken && <button className='btn btn-secondary' onClick={handleLogout}>Logout </button>}
                </Nav.Item>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent