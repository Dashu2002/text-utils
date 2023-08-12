import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useState } from "react";

function NavBar(props) {

  const [iconMode, setIconMode] = useState (false);

  const toggleIcons = () => {
      setIconMode(!iconMode);
  }

  return (
    <>
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          <Form className={`text-${props.mode ==='light' ? 'dark' : 'light'}`}>
          {/* <Form.Check
            onClick={props.toggleMode}
            type="switch"
            id="custom-switch"
            label="Enable Dark Mode"
          /> */}
          <span onClick={props.toggleMode}><i onClick={toggleIcons}>{iconMode ? <MdLightMode /> : <MdDarkMode />}</i></span>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBar.defaultProps = {
  title : 'Text-Utils'
}

export default NavBar;
