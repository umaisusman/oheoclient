"use client"

import { useState, useEffect } from "react"
import Logo from '../../../images/logo.png'

export default function ShopifyNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      <style jsx global>{`
        .navbar {
          background: linear-gradient(135deg, #8e4df7 0%, #6d3dc2 100%);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .nav-link {
          color: rgba(255,255,255,0.9) !important;
          position: relative;
          padding: 0.5rem 1rem !important;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: white !important;
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .dropdown-menu-custom {
          border: none;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin-top: 10px;
          padding: 20px;
          min-width: 800px;
          left: 50% !important;
          transform: translateX(-50%);
        }

        .feature-card {
          transition: transform 0.3s ease;
          padding: 15px;
          border-radius: 10px;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.05);
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .btn-trial {
          background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
          border: none;
          border-radius: 25px;
          padding: 8px 25px;
          transition: all 0.3s ease;
        }

        .btn-trial:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255,107,107,0.3);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="bg-white p-1 rounded me-2 shadow-sm">
              <img src={Logo} alt="logo" style={{ width: "40px" }} />
            </div>
            <span className="fs-4 fw-bold text-white">Oheo</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  onClick={() => toggleDropdown('solutions')}
                >
                  <i className="bi bi-lightbulb me-2"></i>
                  Solutions
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-currency-dollar me-2"></i>
                  Pricing
                </a>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  onClick={() => toggleDropdown('resources')}
                >
                  <i className="bi bi-journal-bookmark me-2"></i>
                  Resources
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-building me-2"></i>
                  Enterprise
                </a>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  onClick={() => toggleDropdown('whatsnew')}
                >
                  <i className="bi bi-gift me-2"></i>
                  What's New
                </a>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <button className="btn btn-outline-light rounded-pill px-4">
                <i className="bi bi-rocket me-2"></i>1Try
              </button>
              <button className="btn btn-trial text-white">
                Start Free Trial <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeDropdown && (
        <div className="dropdown-menu-custom position-absolute start-0 end-0 bg-white animate__animated animate__fadeIn">
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="icon-wrapper bg-primary">
                    <i className="bi bi-headset text-white fs-4"></i>
                  </div>
                  <h4 className="h5">24/7 Support</h4>
                  <p className="text-muted">Round-the-clock assistance from our expert team</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card">
                  <div className="icon-wrapper bg-success">
                    <i className="bi bi-book text-white fs-4"></i>
                  </div>
                  <h4 className="h5">Learning Hub</h4>
                  <p className="text-muted">Master ecommerce with our curated resources</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card">
                  <div className="icon-wrapper bg-warning">
                    <i className="bi bi-graph-up text-white fs-4"></i>
                  </div>
                  <h4 className="h5">Analytics</h4>
                  <p className="text-muted">Advanced insights to grow your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}