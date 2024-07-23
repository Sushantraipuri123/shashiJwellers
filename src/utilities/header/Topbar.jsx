import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import logo from '/public/ShashiLogo.png';
import "./Topbar.css";

function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const handleMouseEnter = () => {
        if (window.innerWidth >= 992) { // lg breakpoint
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 992) { // lg breakpoint
            setIsOpen(false);
        }
    };

    const handleLinkClick = () => {
        setExpanded(false);
        setIsOpen(false);
    };

    const handleToggleClick = () => {
        setExpanded(expanded ? false : "expanded");
    };

    const handleDropdownClick = (e) => {
        if (window.innerWidth < 992) { // lg breakpoint
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Navbar expand="lg" className={`bg-utility sticky-top ${showNavbar ? 'navbar-show' : 'navbar-hide'}`} expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
                    <img src={logo} alt="logo" className='logo img-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className={`me-3 nav-text montserrat ${location.pathname === '/' ? 'active' : ''}`} onClick={handleLinkClick}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={`me-3 nav-text montserrat ${location.pathname === '/about' ? 'active' : ''}`} onClick={handleLinkClick}>About</Nav.Link>
                        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Link to="/products" className='drop-btn'>
                                <button className={`btn drop-btn me-3 montserrat nav-text ${location.pathname === '/products' ? 'active' : ''}`} type="button" id="dropdownMenuButton" aria-expanded={isOpen ? "true" : "false"} onClick={handleLinkClick}>
                                    Products
                                </button>
                                <button className="btn drop-btn dropdown-toggle me-3" type="button" id="dropdownToggle" aria-expanded={isOpen ? "true" : "false"} onClick={handleDropdownClick}></button>
                            </Link>
                            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                <li><Link className="dropdown-item montserrat" to="/diamond" onClick={handleLinkClick}>Diamonds</Link></li>
                                <li><Link className="dropdown-item montserrat" to="/gold" onClick={handleLinkClick}>Gold</Link></li>
                                <li><Link className="dropdown-item montserrat" to="/silver" onClick={handleLinkClick}>Silver</Link></li>
                                <li><hr className="dropdown-divider " /></li>
                                <li><Link className="dropdown-item montserrat" to="/gems" onClick={handleLinkClick}>Gems</Link></li>
                            </ul>
                        </div>
                        <Nav.Link as={Link} to="/contact" className={`me-3 nav-text montserrat ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topbar;
