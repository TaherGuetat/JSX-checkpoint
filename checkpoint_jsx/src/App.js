import './App.css';
import {FullName} from "./Component/Profile/FullName";
import {Adress} from "./Component/Profile/Adress";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,NavDropdown,Card,Placeholder} from 'react-bootstrap';
import { ProfilePhoto } from './Component/Profile/ProfilePhoto';
import img  from "../src/photo_profil.jpg";

function App() {
  return (
    <div className="App">
   <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header> 
      

    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={img}/> */}
        <ProfilePhoto/>
        <Card.Body>
          <Card.Title><FullName/></Card.Title>
          <Card.Text>
          <Adress/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 





     
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; My Profile website 2021
          </p>
        </Container>
      </footer> 
    </div>
  );
}
export default App;
