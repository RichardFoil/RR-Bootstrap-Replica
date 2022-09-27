import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


export default function TopBar(){
    return(
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img style={{display: "flex", width: "150px"}} src="https://logos-world.net/wp-content/uploads/2022/01/Instacart-Logo.png" alt="instacart logo" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav style={{ fontSize: "18px", fontWeight: "bolder", display: "flex" }} >
                        <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" >Sign Up</Button>{' '}
                    </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}