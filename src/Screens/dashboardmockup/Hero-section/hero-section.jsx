import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import HeroImage from "../../../images/Dashboard-header-image.png";
import WhyChooseUs from "../../../Components/why-choose-us/why-choose-us";
import FeaturesSection from "../../../Components/feature-section/feactureSection";
import TestimonialSection from "../../../Components/Testimonial/Testimonial";
import BusinessBanner from "../../../Components/business-banner/business-banner";
import Footer from "../../../Components/NewFooter/NewFooter";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handletry = () => {
    navigate('/StartFreeTrail')
  }
  return (
    <div className="bg-white min-h-screen">
      <Navbar expand="lg" className="py-3">
        <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
  <span className="fw-bold">oheo</span>
</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#" className="mx-2">About</Nav.Link>
              <Nav.Link href="#" className="mx-2">Features</Nav.Link>
              <Nav.Link href="#" className="mx-2">Pricing</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Button variant="dark" size="sm" className="me-2 rounded-pill px-3">Sign In</Button>
              <Button variant="outline-dark" size="sm" className="rounded-pill px-3" onClick={handletry}>Try</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={12} className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
              Empower Your <span className="text-purple-600">Business</span>,<br />
              Elevate Your <span className="text-purple-600">Vision</span>
            </h1>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              Streamline your workflow and boost productivity with our intuitive dashboard solution
            </p>
            <Button
              className="rounded-pill px-4 py-2 fw-semibold"
              style={{
                backgroundColor: "#8A2BE2",
                border: "none",
                boxShadow: "0 4px 14px rgba(138, 43, 226, 0.4)",
              }}>
              Get Started
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <div className="position-relative mb-5">
              <div
                className="d-none d-md-block"
                style={{
                  position: "relative",
                  left: "5%",
                  top: "30%",
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#8A2BE2",
                  borderRadius: "24px",
                  transform: "rotate(-15deg)",
                  float: "left",
                  marginTop: "-40px",
                  zIndex: 0,
                }}></div>

              <div
                className="d-none d-md-block"
                style={{
                  position: "relative",
                  right: "5%",
                  bottom: "20%",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#8A2BE2",
                  borderRadius: "20px",
                  transform: "rotate(15deg)",
                  float: "right",
                  marginBottom: "-30px",
                  zIndex: 0,
                }}></div>

              <div className="clearfix">
                <div className="rounded-4 p-2">
                  <img
                    src={HeroImage || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt="Dashboard Interface"
                    className="img-fluid rounded-3"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <WhyChooseUs />

      <div className="position-relative mt-4">
        <FeaturesSection />
      </div>

      <Container>
        <Row className="my-5">
          <Col><TestimonialSection /></Col>
        </Row>
      </Container>
      <BusinessBanner />
      <Container>
        <Row className="my-5">
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}