"use client"

import { useState, useEffect } from "react"
import Logo from '../../../images/logo.png'
import { useNavigate } from "react-router-dom"

export default function ShopifyNavbar() {
  const navigate = useNavigate()
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false)

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
    setIsSolutionsOpen(false)
    setIsWhatsNewOpen(false)
  }

  const handleLoginCLick = () => {
    navigate('/login')
  }

  const handleMockCLick = () => {
    navigate('/mockup')
  }
  
  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen)
    setIsResourcesOpen(false)
    setIsWhatsNewOpen(false)
  }

  const toggleWhatsNew = () => {
    setIsWhatsNewOpen(!isWhatsNewOpen)
    setIsResourcesOpen(false)
    setIsSolutionsOpen(false)
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    script.integrity = "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    script.crossOrigin = "anonymous"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-animation {
          animation: slideDown 0.3s ease-out;
        }

        .nav-button {
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#9A66F0' }}>
          <div className="container">
            <a className="navbar-brand d-flex align-items-center me-4" href="#">
              <div className="bg-white p-1 rounded me-2">
                 <img src={Logo} alt="logo" style={{width: "40px"}}/>
              </div>
              <span className="fs-4 fw-bold text-white">Oheo</span>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown mx-2">
                  <a
                    className={`nav-link ${isSolutionsOpen ? "border-bottom border-white" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleSolutions()
                    }}
                  >
                    Solutions
                    <svg
                      className="ms-1"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                </li>

                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>

                <li className="nav-item dropdown mx-2">
                  <a
                    className={`nav-link ${isResourcesOpen ? "border-bottom border-white" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleResources()
                    }}
                  >
                    Resources
                    <svg
                      className="ms-1"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                </li>

                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    Enterprise
                  </a>
                </li>

                <li className="nav-item dropdown mx-2">
                  <a
                    className={`nav-link ${isWhatsNewOpen ? "border-bottom border-white" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleWhatsNew()
                    }}
                  >
                    What's new
                    <svg
                      className="ms-1"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="ms-auto d-flex gap-3">
                <button className="nav-button btn text-white border-white" onClick={handleLoginCLick}>
                  Try
                </button>
                <button 
                  onClick={handleMockCLick}
                  className="nav-button btn text-white" 
                  style={{ backgroundColor: '#9A66F0', border: '1px solid white' }}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </nav>

        {(isResourcesOpen || isSolutionsOpen || isWhatsNewOpen) && (
          <div 
            className="position-absolute w-100 text-white shadow dropdown-animation" 
            style={{ 
              zIndex: 1000, 
              backgroundColor: '#9A66F0',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="container py-5">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle border border-white p-2 me-3 d-flex align-items-center justify-content-center"
                      style={{ width: 40, height: 40 }}
                    >
                      <i className="bi bi-info fs-5"></i>
                    </div>
                    <h3 className="fs-4 fw-medium mb-0">Help and support</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="fs-5 fw-medium mb-1">Help and support</h4>
                    <p className="mb-0">Get 24/7 support</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="fs-5 fw-medium mb-1">How-to guides</h4>
                    <p className="mb-0">Read in-depth business guides</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="fs-5 fw-medium mb-1">Business courses</h4>
                    <p className="mb-0">Learn from proven experts</p>
                  </div>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle border border-white p-2 me-3 d-flex align-items-center justify-content-center"
                      style={{ width: 40, height: 40 }}
                    >
                      <i className="bi bi-pencil fs-5"></i>
                    </div>
                    <h3 className="fs-4 fw-medium mb-0">Popular topics</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="fs-5 fw-medium mb-1">What is Shopify?</h4>
                    <p className="mb-0">How our commerce platform works</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="fs-5 fw-medium mb-1">Shopify Editions</h4>
                    <p className="mb-0">New, innovative Shopify products</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="fs-5 fw-medium mb-1">Founder stories</h4>
                    <p className="mb-0">Learn from successful merchants</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pt-4 pt-md-5">
                    <div className="mb-4">
                      <h4 className="fs-5 fw-medium mb-1">Marketing</h4>
                      <p className="mb-0">Build a marketing plan</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="fs-5 fw-medium mb-1">Ecommerce SEO</h4>
                      <p className="mb-0">Improve your search ranking</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="fs-5 fw-medium mb-1">Social media strategy</h4>
                      <p className="mb-0">Turn social into sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}