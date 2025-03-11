import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import Screen1 from '../../images/image2.png'

const FeatureItem = ({ title, description }) => {
  return (
    <div className="d-flex align-items-start mb-4">
      <div
        className="d-flex justify-content-center align-items-center me-3 mt-1"
        style={{
          backgroundColor: "#9333ea",
          borderRadius: "50%",
          minWidth: "24px",
          height: "24px",
        }}
      >
        <Check size={16} color="white" />
      </div>
      <div>
        <h5 className="fw-bold mb-1">{title}</h5>
        <p className="text-white-50 mb-0">{description}</p>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  const ScreenImg = Screen1;

  return (
    <div
      className="py-5 mx-3 "
      style={{
        background: "linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%)",
        borderRadius: "16px",
        overflow: "hidden",
        marginLeft: "-20px",
        marginRight: "-20px",
      }}
    >
      <Container fluid>
        <Row className="align-items-center px-3">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="display-5 fw-bold text-white mb-4">Everything You Need to Succeed!</h2>
            <FeatureItem
              title="Intuitive Dashboard"
              description="Easily manage all your projects from one central location"
            />
            <FeatureItem
              title="Smart Reports"
              description="Get detailed analytics and insights to make informed decisions"
            />
            <FeatureItem
              title="Team Collaboration"
              description="Work seamlessly with your team members in real-time"
            />
            <FeatureItem
              title="Mobile Optimized"
              description="Access your dashboard on any device, anywhere, anytime"
            />
            <FeatureItem
              title="24/7 Support"
              description="Our dedicated team is always ready to assist you"
            />
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-center">
              <img
                src={ScreenImg || "/placeholder.svg?height=500&width=400"}
                alt="Dashboard Screenshots"
                className="img-fluid"
                style={{
                  transform: "rotate(5deg)",
                  borderRadius: "8px",
                  maxWidth: "90%",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}