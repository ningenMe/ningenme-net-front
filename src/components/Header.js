import React from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">ningenMe.net</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link target="_blank" href="https://twitter.com/ningenMe">Twitter</Nav.Link> */}
          <Nav.Link target="_blank" href="https://github.com/ningenMe">Github</Nav.Link>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item target="_blank" href="https://qiita.com/ningenMe">Qiita</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://ningenme.hatenablog.com/archive">Hatena</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://profile.ameba.jp/ameba/ningenme">Ameba</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>
          <NavDropdown title="Compro" id="basic-nav-dropdown">
            <NavDropdown.Item target="_blank" href="https://atcoder.jp/users/ningenMe">AtCoder</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://codeforces.com/profile/ningenMe">Codeforces</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://yukicoder.me/users/4145">yukicoder</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://csacademy.com/user/ningenMe">CSAcademy</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}