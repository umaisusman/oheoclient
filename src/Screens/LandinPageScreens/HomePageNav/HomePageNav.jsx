"use client"

import { useState, useEffect } from "react"
import Logo from "../../../images/logo.png"
import { useNavigate } from "react-router-dom"
import {
  ChevronDown,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCapIcon as Graduation,
  Pencil,
  ShoppingBag,
  Sparkles,
  Users,
  Search,
  BarChart,
  Share2,
} from "lucide-react"

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
    navigate("/login")
  }

  const handleMockCLick = () => {
    navigate("/mockup")
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

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .dropdown-animation {
          animation: slideDown 0.3s ease-out;
        }

        .nav-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .nav-button:active {
          transform: translateY(0);
        }

        .nav-link {
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          transform: translateY(-1px);
        }

        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover:after {
          width: 100%;
        }

        .icon-container {
          transition: all 0.3s ease;
        }

        .icon-container:hover {
          transform: scale(1.1);
        }

        .dropdown-item-custom {
          transition: all 0.2s ease;
        }

        .dropdown-item-custom:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }

        .trial-button:hover {
          animation: pulse 1s infinite;
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .chevron-rotate {
          transform: rotate(180deg);
        }
      `}</style>

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#9A66F0" }}>
          <div className="container">
            <a className="navbar-brand d-flex align-items-center me-4" href="#">
              <div className="bg-white p-1 rounded me-2 icon-container">
                <img src={Logo || "/placeholder.svg"} alt="logo" style={{ width: "40px" }} />
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
                    <div className="d-flex align-items-center">
                      <ShoppingBag className="me-1" size={18} />
                      Solutions
                      <ChevronDown
                        className={`ms-1 chevron-icon ${isSolutionsOpen ? "chevron-rotate" : ""}`}
                        size={18}
                      />
                    </div>
                  </a>
                </li>

                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <div className="d-flex align-items-center">
                      <BarChart className="me-1" size={18} />
                      Pricing
                    </div>
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
                    <div className="d-flex align-items-center">
                      <BookOpen className="me-1" size={18} />
                      Resources
                      <ChevronDown
                        className={`ms-1 chevron-icon ${isResourcesOpen ? "chevron-rotate" : ""}`}
                        size={18}
                      />
                    </div>
                  </a>
                </li>

                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <div className="d-flex align-items-center">
                      <Users className="me-1" size={18} />
                      Enterprise
                    </div>
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
                    <div className="d-flex align-items-center">
                      <Sparkles className="me-1" size={18} />
                      What's new
                      <ChevronDown
                        className={`ms-1 chevron-icon ${isWhatsNewOpen ? "chevron-rotate" : ""}`}
                        size={18}
                      />
                    </div>
                  </a>
                </li>
              </ul>

              <div className="ms-auto d-flex gap-3">
                <button className="nav-button btn text-white border-white" onClick={handleLoginCLick}>
                  <div className="d-flex align-items-center">
                    <Search size={18} className="me-1" />
                    Try
                  </div>
                </button>
                <button
                  onClick={handleMockCLick}
                  className="nav-button btn text-white trial-button"
                  style={{ backgroundColor: "#9A66F0", border: "1px solid white" }}
                >
                  <div className="d-flex align-items-center">
                    <Sparkles size={18} className="me-1" />
                    Start Free Trial
                  </div>
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
              backgroundColor: "#9A66F0",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="container py-5">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle border border-white p-2 me-3 d-flex align-items-center justify-content-center icon-container"
                      style={{ width: 40, height: 40 }}
                    >
                      <HelpCircle size={20} />
                    </div>
                    <h3 className="fs-4 fw-medium mb-0">Help and support</h3>
                  </div>
                  <div className="mb-4 dropdown-item-custom">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <HelpCircle size={16} className="me-2" />
                        Help and support
                      </div>
                    </h4>
                    <p className="mb-0">Get 24/7 support</p>
                  </div>
                  <div className="mb-4 dropdown-item-custom">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <BookOpen size={16} className="me-2" />
                        How-to guides
                      </div>
                    </h4>
                    <p className="mb-0">Read in-depth business guides</p>
                  </div>
                  <div className="mb-4 dropdown-item-custom">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Graduation size={16} className="me-2" />
                        Business courses
                      </div>
                    </h4>
                    <p className="mb-0">Learn from proven experts</p>
                  </div>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle border border-white p-2 me-3 d-flex align-items-center justify-content-center icon-container"
                      style={{ width: 40, height: 40 }}
                    >
                      <Pencil size={20} />
                    </div>
                    <h3 className="fs-4 fw-medium mb-0">Popular topics</h3>
                  </div>
                  <div className="mb-4 dropdown-item-custom">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Info size={16} className="me-2" />
                        What is Shopify?
                      </div>
                    </h4>
                    <p className="mb-0">How our commerce platform works</p>
                  </div>
                  <div className="mb-4 dropdown-item-custom">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Sparkles size={16} className="me-2" />
                        Shopify Editions
                      </div>
                    </h4>
                    <p className="mb-0">New, innovative Shopify products</p>
                  </div>
                  <div className="mb-4 dropdown-item-custom">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Users size={16} className="me-2" />
                        Founder stories
                      </div>
                    </h4>
                    <p className="mb-0">Learn from successful merchants</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pt-4 pt-md-5">
                    <div className="mb-4 dropdown-item-custom">
                      <h4 className="fs-5 fw-medium mb-1">
                        <div className="d-flex align-items-center">
                          <BarChart size={16} className="me-2" />
                          Marketing
                        </div>
                      </h4>
                      <p className="mb-0">Build a marketing plan</p>
                    </div>
                    <div className="mb-4 dropdown-item-custom">
                      <h4 className="fs-5 fw-medium mb-1">
                        <div className="d-flex align-items-center">
                          <Search size={16} className="me-2" />
                          Ecommerce SEO
                        </div>
                      </h4>
                      <p className="mb-0">Improve your search ranking</p>
                    </div>
                    <div className="mb-4 dropdown-item-custom">
                      <h4 className="fs-5 fw-medium mb-1">
                        <div className="d-flex align-items-center">
                          <Share2 size={16} className="me-2" />
                          Social media strategy
                        </div>
                      </h4>
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

