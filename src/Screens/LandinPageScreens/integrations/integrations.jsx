import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { FaFigma, FaGoogle, FaInstagram, FaMailchimp, FaTwitter, FaFacebook, FaPinterest, FaDropbox, FaSlack, FaSnapchat } from "react-icons/fa";

export default function IntegrationsPage() {
  const integrations = [
    { name: "Figma", position: "top-left", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Google", position: "top", icon: <FaGoogle />, color: "#4285F4" },
    { name: "Instagram", position: "top-right", icon: <FaInstagram />, color: "#E4405F" },
    { name: "Mailchimp", position: "top-right-far", icon: <FaMailchimp />, color: "#FFE01B" },
    { name: "Twitter", position: "left", icon: <FaTwitter />, color: "#1DA1F2" },
    { name: "Facebook", position: "right", icon: <FaFacebook />, color: "#1877F2" },
    { name: "Pinterest", position: "bottom-left", icon: <FaPinterest />, color: "#E60023" },
    { name: "Dropbox", position: "bottom", icon: <FaDropbox />, color: "#007EE5" },
    { name: "Slack", position: "bottom-right", icon: <FaSlack />, color: "#4A154B" },
    { name: "Snapchat", position: "bottom-right-far", icon: <FaSnapchat />, color: "#FFFC00" },
  ];

  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <Container className="py-5 text-center">
      <p className="text-primary mb-2">Our Primary Integrations</p>
      <h1 className="display-4 fw-bold mb-4">
        Make productivity easier
        <br />
        with <span className="text-primary">50+ Integrations</span>
      </h1>

      <div className="position-relative my-5" style={{ height: "400px" }}>
        <div
          className="position-absolute bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{
            width: "80px",
            height: "80px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <FaGoogle size={40} />
        </div>

        {integrations.map((integration, index) => {
          let top = "50%";
          let left = "50%";

          switch (integration.position) {
            case "top-left":
              top = "20%";
              left = "20%";
              break;
            case "top":
              top = "10%";
              left = "50%";
              break;
            case "top-right":
              top = "20%";
              left = "80%";
              break;
            case "top-right-far":
              top = "30%";
              left = "90%";
              break;
            case "left":
              top = "50%";
              left = "20%";
              break;
            case "right":
              top = "50%";
              left = "80%";
              break;
            case "bottom-left":
              top = "80%";
              left = "20%";
              break;
            case "bottom":
              top = "80%";
              left = "50%";
              break;
            case "bottom-right":
              top = "80%";
              left = "80%";
              break;
            case "bottom-right-far":
              top = "70%";
              left = "90%";
              break;
          }

          return (
            <div
            key={index}
            className="position-absolute bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
            style={{
              width: "60px",
              height: "60px",
              top,
              left,
              transform: hoveredIcon === index ? "translate(-50%, -50%) scale(1.2)" : "translate(-50%, -50%)",
              zIndex: 2,
              transition: "transform 0.3s ease, background-color 0.3s ease",
              backgroundColor: hoveredIcon === index ? integration.color + "20" : "white", // Light background tint on hover
            }}
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {React.cloneElement(integration.icon, {
              size: 30,
              color: hoveredIcon === index ? integration.color : "black",
            })}
          </div>
          
          );
        })}
      </div>

      <Row className="justify-content-center">
        <Col md={8}>
          <p className="text-muted mb-5">
            Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher, attracts more
            visitors, and generates leads like never before.
          </p>
        </Col>
      </Row>

      <Button
        variant="primary"
        className="rounded-pill px-4 py-2"
        style={{ backgroundColor: "#8A70D6", borderColor: "#8A70D6" }}
      >
        See Integrations <ArrowRight className="ms-2" size={16} />
      </Button>
    </Container>
  );
}
