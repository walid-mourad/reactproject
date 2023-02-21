import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'

function Header() {
  return (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="">FootBlog</a>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><a href="">Home</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">About us</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href=""><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;