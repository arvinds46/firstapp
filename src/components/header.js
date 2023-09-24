import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function Header() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between" data-bs-theme="dark">
      <Navbar.Brand href="#home"><img
              alt=""
              src="/firstapp/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React
    </Navbar.Brand>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="outline-success">Search</Button>
          </Col>
        </Row>
      </Form>
      <Form inline>
        <Button type="submit" variant="warning">Cart</Button>
        {' '}
        <Button type="submit">Log In</Button>
      </Form>
    </Navbar>
  );
}

export default Header;