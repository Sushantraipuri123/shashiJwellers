import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Tc.css"
function Tc() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center popins">Terms and Conditions</Card.Header>
            <Card.Body>
              <Card.Text as="div">
                <ul>
                  <li className="montserrat">By accessing and using our website, you accept and agree to be bound by the terms and conditions outlined here.</li>
                  <li className="montserrat">All content provided on this site is for informational purposes only and may be changed without notice.</li>
                  <li className="montserrat">We reserve the right to modify or discontinue any part of our website without prior notice.</li>
                  <li className="montserrat">Users are responsible for maintaining the confidentiality of their account information and password.</li>
                  <li className="montserrat">Unauthorized use of our website may give rise to a claim for damages and/or be a criminal offense.</li>
                  <li className="montserrat">Our website may contain links to third-party websites; we are not responsible for the content or privacy practices of these external sites.</li>
                  <li className="montserrat">We do not warrant that the website will be uninterrupted, timely, secure, or error-free.</li>
                  <li className="montserrat">Liability for any direct, indirect, incidental, or consequential damages arising from the use of our website is excluded to the fullest extent permitted by law.</li>
                  <li className="montserrat">Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                  <li className="montserrat">These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Tc;
