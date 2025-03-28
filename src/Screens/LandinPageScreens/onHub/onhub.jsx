"use client"

import { Instagram, Linkedin } from "lucide-react"

import logo from '../../../images/logo.png'
import { useNavigate } from "react-router-dom"
const Footer = () => {
  const navigate = useNavigate()
  const handleAboutClick = () => {
    navigate('/about')
  }
  const handlecareerClick = () => {
    navigate('/career')
  }
  const handleTermsClick = () => {
    navigate('/Terms')
  }
  const handlePrivacyClick = () => {
    navigate('/PrivacyControl')
  }

  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="mb-4">
            <img
              src={logo || "/placeholder.svg?height=50&width=50"}
              alt="Oheo"
              width={50}
              height={50}
              className="mb-3"
            />
          </div>
          <h5 className="mb-3">Oheo</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none" onClick={handleAboutClick}>
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none" onClick={handlecareerClick}>
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none" onClick={handleTermsClick}>
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none" onClick={handlePrivacyClick}>
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Investors
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Press and Media
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Partners
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Affiliates
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Legal
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Service Status
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="mb-3">Support</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Merchant Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Hire a Partner
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Oheo Academy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Oheo Community
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="mb-3">Developers</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Oheo.dev
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                API Documentation
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black text-decoration-none">
                Dev Degree
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="mb-4">
            <h5 className="mb-3">Subscribe</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Info@yourmail.com" aria-label="Email address" />
            </div>
            <p className="small text-muted">No credit card required • 7-day free trial</p>
          </div>
          <div className="mt-4">
            <button className="btn btn-outline-dark rounded-pill px-4">7-day Free Trial</button>
          </div>
        </div>
      </div>

      {/* Middle section with links and office info */}
      <div className="row my-5">
        <div className="col-md-6">
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4">
            <a href="#" className="text-black fw-medium text-decoration-none">
              Products
            </a>
            <a href="#" className="text-black fw-medium text-decoration-none">
              Pricing
            </a>
            <a href="#" className="text-black fw-medium text-decoration-none">
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-md-6 text-md-end mt-4 mt-md-0">
          <h5 className="fw-medium">Office</h5>
          <p className="small text-secondary">
            8276 Lakeview
            <br />
            Kennesaw, GA
            <br />
            31144
          </p>
        </div>
      </div>

      {/* Bottom section with logo and social links */}
      <div className="row border-top pt-4">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">OheoHub</h1>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
            <p className="mb-0 me-auto me-md-4 small">Copyright © Oheo 2023</p>
            <a href="#" className="text-decoration-none text-dark me-3">
              <span className="small me-2">Oheo.COM</span>
            </a>
            <a href="#" className="text-decoration-none text-dark me-3">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-decoration-none text-dark">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

