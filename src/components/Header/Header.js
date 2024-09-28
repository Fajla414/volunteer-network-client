import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './header.css';
import { useContext } from 'react';
import { MyContext } from '../../App';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(MyContext);

  return (
    <Navbar collapseOnSelect expand="lg" className='bg-light' >
      <Container>
        <Navbar.Brand as={Link} to={'/'}><img src={logo} className='img-fluid logo' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className='d-flex align-items-center'>
            <Nav.Link as={Link} to={'/home'} className='mx-2 fw-bold'>Home</Nav.Link>
            <Nav.Link as={Link} to={'/donation'} className='mx-2 fw-bold'>Donation</Nav.Link>
            <Nav.Link as={Link} to={'/events'} className='mx-2 fw-bold'>Events</Nav.Link>
            <Nav.Link as={Link} to={'/blog'} className='mx-2 fw-bold'>Blog</Nav.Link>
            <Nav.Link as={Link} to={'/collection'} className='mx-2 fw-bold'>Collection</Nav.Link>
            {loggedInUser.name === undefined ? <><Nav.Link as={Link} to={'/login'} className='mx-2 '><button className='btn btn-primary fw-bold'>Register</button></Nav.Link><Nav.Link as={Link} to={'/admin'} className='mx-2 fw-bold'><button className='btn  btn-dark fw-bold'>Admin</button></Nav.Link></> : <Nav.Link as={Link} to={'/profile'} className='mx-2 fw-bold'><img className='img-fluid rounded-circle' src={loggedInUser.photoURL} style={{ width: '40px' }} alt="" /></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;