"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../images/Logo.png"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import PaymentPlansSectionthird from "../paymentSelectionthird/paymentSelectionthird"
import Footer from "../../Screens/LandinPageScreens/onHub/onhub"
import videoFrame from "../../images/video transparent frame.png";
import ShopifyNavbar from "../../Screens/LandinPageScreens/HomePageNav/HomePageNav"

export default function LandingPageNav() {

  const navigate = useNavigate();
  
    const handletryNav = () => {
      navigate('/')
    }
    const handletrylogin = () => {
      navigate('/Login')
    }

  return (
    <div >
      <ShopifyNavbar/>

      <Container
  className="py-5"
  style={{
    backgroundImage: `url(${videoFrame})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
    position: "relative",
    
  }}
>
        <Row className="align-items-center">
          <Col lg={12} className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
             Start for free <span className="text-purple-600">then enjoy</span><br />
             <span style={{
                color: "#8A2BE2",
               
             }
             }>$1/month for 3 months</span>
             
            </h1>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Choose the best plan for your business. Change plans as you grow.
                        </p>
            <Button
             onClick={handletryNav}
              className="rounded-pill px-4 py-2 fw-semibold"
              style={{
                backgroundColor: "#8A2BE2",
                border: "none",
                boxShadow: "0 4px 14px rgba(138, 43, 226, 0.4)",
              }}>
              Get Started
            </Button>
            <Button
             onClick={handletryNav}
              className="rounded-pill px-4 py-2 fw-semibold"
              style={{
                backgroundColor: "#8A2BE2",
                border: "none",
                boxShadow: "0 4px 14px rgba(138, 43, 226, 0.4)",
                 marginLeft:'13px'
              }}>
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
      <PaymentPlansSectionthird/>
      <Footer/>
    </div>
  
  )
}