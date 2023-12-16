import { Navbar, Nav, Button, NavLink } from 'react-bootstrap'
import Link from 'react-router'

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg="dark" variant='dark'>
                <Navbar.Brand className='px-2'>AirMonarch</Navbar.Brand>
                <Navbar.Toggle aria-controls='resposive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mx-auto'>
                        <NavLink>Home</NavLink>
                        <NavLink>Users</NavLink>
                        <NavLink>About</NavLink>
                    </Nav>
                    <Nav>
                        <Button variant='primary' className='mt-1 mb-1 mx-2'>Log In</Button>
                        <Button variant='primary' className='mx-2 mt-1 mb-1'>Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;