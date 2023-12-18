import { Navbar, Nav, NavLink , Container} from 'react-bootstrap'
import { IoIosAirplane } from "react-icons/io";

function Header() {
    return (
            <Navbar collapseOnSelect expand='lg' variant='dark'>
                <Container>
                <Navbar.Brand className='ps-5'><IoIosAirplane /></Navbar.Brand>
                <Navbar.Toggle aria-controls='resposive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-5 mt-1'>
                        <NavLink>Users</NavLink>
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;