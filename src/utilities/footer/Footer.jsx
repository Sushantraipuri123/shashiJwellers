import logo from '/public/ShashiLogo.png';
import "./Footer.css";
import { TelephoneFill } from 'react-bootstrap-icons'; 
import { EnvelopeOpenFill } from 'react-bootstrap-icons';
import { GeoAltFill  } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className=' bg-utility  mt-5 pb-5  pt-4 bottom'>
      <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 ">
              <div className='d-flex justify-content-center'>
              <img src={logo} alt="logo" className='logo img-fluid' />
              </div>
              <div className="footer-text text-center text-muted montserrat">
              <strong>Shashi Jewelers:</strong> Crafting timeless elegance with exquisite jewelry, blending tradition and innovation for every special occasion
              </div>
              </div>
            <div className="col-lg-2  col-md-2"></div>
            <div className="col-lg-3 col-md-3 mt-3">
              <h4 className='ms-4 montserrat'>Quick Links</h4>
              <div>
                <ul className='footer-ul'>
                  <li><Link to="/" className='text-decoration-none text-secondary'>Home </Link> </li>
                 <li className='my-1'> <Link to="/faq" className='text-decoration-none text-secondary'>FAQ </Link></li>
                  <li className='my-1'> <Link to="/privacy" className='text-decoration-none text-secondary'>Privacy & Policy </Link> </li>
                  <li> <Link to="/terms&Conditions" className='text-decoration-none text-secondary'>Terms & Conditions </Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  mt-3">
            <h4 className='ms-4'>Find us</h4>
              <div>
                <ul className='footer-ul'>
                  <li><TelephoneFill className="me-2" /> 
                  <span>+91 98166 22883</span> </li>
                  <li className='my-2'> <EnvelopeOpenFill className="me-2" />
                  <span>shashijwellers@gmail.com</span> </li>
                <li className='d-flex'> <div><GeoAltFill className="me-2" /></div>
  <div>Near Santoshi Mata Mandir, Dari, Dharamshala,
  Gabli Dar, Himachal Pradesh 176057</div></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="copy-right d-flex justify-content-center">
            <div>&copy; 2024 Shashi Jewelers. All rights reserved by Mitisha Softech.</div>
          </div>
      </div>
    </div>
  )
}

export default Footer
