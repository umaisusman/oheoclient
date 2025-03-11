import { Container, Row, Col } from "react-bootstrap"
import './why-choose-us.css'
import ScreenImg from '../../images/screen-img.png'


export default function WhyChooseUs() {
  return (
    <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #f0e6ff 100%)" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0 position-relative">
            <div className="d-flex justify-content-center">
              <div
                className="rounded-circle bg-purple-100 d-flex"
                style={{
                  width: "120px",
                  height: "120px",
                  zIndex: 1,
                  transform: "translate(-80px, 40px)",
                }}
              />

              {/* Device image */}
              <div className="position-relative" style={{ zIndex: 2 }}>
                <img
                  src={ScreenImg}
                  width={300}
                  height={400}
                  alt="Device showing website interface"
                  className="img-fluid"
                />
              </div>

              <div
                className="rounded-circle bg-purple-500"
                style={{
                  width: "30px",
                  height: "30px",
                  zIndex: 1,
                  transform: "translate(-40px, 250px)",
                }}
              />
            </div>
          </Col>

          <Col lg={6}>
            <h2 className="fw-bold mb-4">
              WHY <span className="text-purple-500">CHOOSE US</span>?
            </h2>

            <div className="d-flex flex-column gap-4">
              {/* Feature 1 */}
              <div className="d-flex gap-3">
                <div
                  className="feature-icon rounded-circle bg-purple-100 d-flex align-items-center justify-content-center"
                  style={{ minWidth: "50px", height: "50px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold">Intuitive Navigation</h5>
                  <p className="text-muted">
                    Seamless browsing experience with easy-to-use menus and clear pathways to information.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="d-flex gap-3">
                <div
                  className="feature-icon rounded-circle bg-purple-100 d-flex align-items-center justify-content-center"
                  style={{ minWidth: "50px", height: "50px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold">Mobile Friendly</h5>
                  <p className="text-muted">
                    Fully responsive design that looks great on any device, from desktop to mobile.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="d-flex gap-3">
                <div
                  className="feature-icon rounded-circle bg-purple-100 d-flex align-items-center justify-content-center"
                  style={{ minWidth: "50px", height: "50px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold">Customizable Templates</h5>
                  <p className="text-muted">
                    Flexible design options that allow you to create a unique look that matches your brand.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

