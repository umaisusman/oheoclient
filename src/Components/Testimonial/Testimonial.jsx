import { Container, Row, Col } from "react-bootstrap"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I've been using this platform for my business, and it's been a game-changer for our workflow and productivity.",
      name: "Katherine Miles",
      position: "Product Manager",
    },
    {
      id: 2,
      rating: 5,
      text: "Amazing tool! The dashboard is intuitive and provides all the analytics we need to make informed decisions.",
      name: "David Chen",
      position: "Marketing Director",
    },
    {
      id: 3,
      rating: 5,
      text: "Amazing tool! The dashboard is intuitive and provides all the analytics we need to make informed decisions.",
      name: "David Chen",
      position: "Marketing Director",
    },
    {
      id: 4,
      rating: 5,
      text: "Amazing tool! The dashboard is intuitive and provides all the analytics we need to make informed decisions.",
      name: "David Chen",
      position: "Marketing Director",
    },
   
  ]

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f5ff" }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-bold">
              What Our <span style={{ color: "#8A2BE2" }}>Customers</span> Are Saying?
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={5} className="mb-4">
              <div className="bg-white rounded p-4 shadow-sm h-100">
                <div className="d-flex mb-3">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} style={{ color: "#8A2BE2", fill: "#8A2BE2" }} className="me-1" />
                    ))}
                </div>

                <p className="text-muted mb-4">"{testimonial.text}"</p>

                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(138, 43, 226, 0.1)",
                    }}
                  >
                    <span style={{ color: "#8A2BE2", fontWeight: 500 }}>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-medium">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.position}</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

