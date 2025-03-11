import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Search, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 min-vh-25"> {/* Increased padding and minimum height */}
      <Container className="h-100">
        <Row className="mb-4 h-75"> {/* Increased margin-bottom and height */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li>How it Works</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>Affiliates</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Subscribe</h5>
            <Form className="d-flex mt-3">
              <Form.Control type="email" placeholder="Enter your email" className="me-2" />
              <Button variant="light">
                <Search size={18} />
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between align-items-center mt-4 border-top pt-4"> {/* Increased margins */}
          <Col md={6}>
            <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <Facebook className="mx-2" size={20} />
            <Twitter className="mx-2" size={20} />
            <Instagram className="mx-2" size={20} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;