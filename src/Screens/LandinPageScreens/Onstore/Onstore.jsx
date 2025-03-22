import { Container, Row, Col } from "react-bootstrap";
import { CreditCard, BarChart, Gear, ListCheck, Bullseye, Bell, Magic, Lightning, Box } from "react-bootstrap-icons";
import { useState } from "react";

// Feature data for easier management
const features = [
  {
    icon: CreditCard,
    title: "Seamless Payment Processing",
    description: "Process secure Oheo payments instantly",
    color: "#4361ee"
  },
  {
    icon: BarChart,
    title: "Robust Analytics & Reporting",
    description: "Actionable insights with real-time analytics for informed decisions.",
    color: "#3a0ca3"
  },
  {
    icon: Gear,
    title: "Effortless Store Setup",
    description: "Launch your Oheo store swiftly with streamlined and intuitive setup.",
    color: "#7209b7"
  },
  {
    icon: ListCheck,
    title: "Content evaluation",
    description: "Simple corrections for immediate improvements.",
    color: "#f72585"
  },
  {
    icon: Bullseye,
    title: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
    color: "#4cc9f0"
  },
  {
    icon: Bell,
    title: "Automated alerts",
    description: "Automatic notifications about your customer orders, including quick sales.",
    color: "#4895ef"
  },
  {
    icon: Magic,
    title: "Powerful Marketing Wizard",
    description: "Boost your sales with integrated marketing wizard and automation.",
    color: "#560bad"
  },
  {
    icon: Lightning,
    title: "One-click optimization",
    description: "Perform complex SEO audits and optimizations with a single click.",
    color: "#f77f00"
  },
  {
    icon: Box,
    title: "Efficient Inventory Management",
    description: "Manage your stock effortlessly while streamlining orders and supply chains.",
    color: "#d62828"
  }
];

export default function OheoStoreSetup() {
  // State to track which feature is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Base styles
  const baseFeatureStyle = {
    padding: "20px",
    borderRadius: "12px",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    border: "1px solid #e9ecef",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  };

  // Get style for a specific feature
  const getFeatureStyle = (index) => {
    const isHovered = hoveredIndex === index;
    
    return {
      ...baseFeatureStyle,
      transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      boxShadow: isHovered 
        ? `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 0 3px ${features[index].color}33` 
        : "0 4px 6px rgba(0, 0, 0, 0.05)",
      backgroundColor: isHovered ? "#ffffff" : "#f8f9fa",
    };
  };

  // Get icon style for a specific feature
  const getIconStyle = (index) => {
    return {
      color: features[index].color,
      transition: "all 0.3s ease",
      transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
    };
  };

  return (
    <Container className="py-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 fw-bold" style={{ color: "#212529", marginBottom: "1rem" }}>
            Oheo Effortless
            <br />
            <span style={{ background: "linear-gradient(90deg, #4361ee, #7209b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Store Setup.
            </span>
          </h1>
          <div className="w-25 my-4" style={{ height: "4px", background: "linear-gradient(90deg, #4361ee, #7209b7)" }}></div>
        </Col>
      </Row>

      <Row className="gy-4">
        {features.map((feature, index) => (
          <Col md={4} key={index}>
            <div
              className="d-flex align-items-center mb-2 p-3"
              style={getFeatureStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="me-3 d-flex align-items-center justify-content-center" 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "12px", 
                  background: `${feature.color}15`,
                  transition: "all 0.3s ease",
                  transform: hoveredIndex === index ? "rotate(5deg)" : "rotate(0deg)"
                }}
              >
                <feature.icon size={24} style={getIconStyle(index)} />
              </div>
              <h5 className="mb-0 fw-bold" style={{ color: hoveredIndex === index ? feature.color : "#212529" }}>
                {feature.title}
              </h5>
            </div>
            <p style={{ 
              color: "#495057", 
              marginLeft: "3px", 
              transition: "all 0.3s ease",
              transform: hoveredIndex === index ? "translateX(5px)" : "translateX(0)",
              opacity: hoveredIndex === index ? 1 : 0.8
            }}>
              {feature.description}
            </p>
          </Col>
        ))}
      </Row>

      <hr className="my-5" style={{ background: "linear-gradient(90deg, #4361ee, #7209b7)", height: "2px", opacity: 0.2 }} />
    </Container>
  );
}