import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Privacy.css"
function Privacy() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center popins">Privacy & Policy</Card.Header>
            <Card.Body>
              <Card.Text as="div">
                <ul>
                  <li className='montserrat'>We collect personal information such as name, contact details, and payment information to provide our services effectively.</li>
                  <li className='montserrat'>Your information is used for processing orders, managing accounts, and communicating with you about your purchases and our services.</li>
                  <li className='montserrat'>We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure.</li>
                  <li className='montserrat'>Cookies are used to enhance your experience on our website. They help us understand your preferences and improve our services.</li>
                  <li className='montserrat'>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.</li>
                  <li className='montserrat'>Third-party service providers may have access to your personal information to perform specific tasks on our behalf, but they are required to protect it.</li>
                  <li className='montserrat'>You have the right to access, update, or delete your personal information at any time. Contact us to make such requests.</li>
                  <li className='montserrat'>We may update our privacy policy periodically. Any changes will be posted on this page with an updated revision date.</li>
                  <li className='montserrat'>By using our website, you consent to our privacy policy. If you have any questions, please contact us for more information.</li>
                  <li className='montserrat'>We are committed to protecting the privacy of children. Our website is not intended for use by individuals under the age of 13.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Privacy;
