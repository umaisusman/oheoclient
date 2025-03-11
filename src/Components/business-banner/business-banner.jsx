"use client"
import { Container, Button } from "react-bootstrap"
import { ArrowRight } from "lucide-react"

export default function BusinessBanner() {
  return (
    <Container fluid className="p-0">
      <div
        className="d-flex flex-column justify-content-center align-items-center p-4 p-md-5 "
        style={{
          background: "linear-gradient(135deg, #000000 0%, #4b0082 100%)",
          minHeight: "550px",
          color: "white",
        }}
      >
        <div className="d-flex flex-column gap-2 mb-4 text-center">
          <h2 className="fw-bold mb-1">Ready to Transform Your Business?</h2>
          <p className="mb-0">
            Join thousands of businesses already thriving
            <br />
            with <span className="text-purple-300">Oheo.dev</span>.
          </p>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
          marginBottom: "2rem",
        }}>
          <Button
            className="d-flex align-items-center gap-2 border-0"
            style={{
              backgroundColor: "#9333ea",
              padding: "0.5rem 1.5rem",
              borderRadius: "0.375rem",
            }}
          >
            <span>Sign Up for Free</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Container>
  )
}