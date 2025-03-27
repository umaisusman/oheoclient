"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Pencil,
  ShoppingBag,
  Sparkles,
  Users,
  Search,
  BarChart,
  Share2,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import './HomePageNav.css'

export default function ShopifyNavbar() {
  const navigate = useNavigate()
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
    setIsSolutionsOpen(false)
    setIsWhatsNewOpen(false)
  }

  const handleLoginClick = () => navigate("/Login")
  const handleMockClick = () => navigate("/mockup")

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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarElement = document.getElementById("navbar-wrapper")
      if (navbarElement && !navbarElement.contains(event.target)) {
        setIsResourcesOpen(false)
        setIsSolutionsOpen(false)
        setIsWhatsNewOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsResourcesOpen(false)
      setIsSolutionsOpen(false)
      setIsWhatsNewOpen(false)
      if (window.innerWidth >= 992) setIsMobileMenuOpen(false)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes oheo-slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes oheo-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .oheo-header-nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 0.5rem 1rem;
        }

        .oheo-dropdown-animation {
          animation: oheo-slideDown 0.3s ease-out;
        }

        .oheo-nav-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .oheo-nav-button:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        .oheo-nav-button:active { transform: translateY(0); }

        .oheo-nav-link {
          transition: all 0.2s ease;
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
          color: black !important;
        }

        .oheo-nav-link:hover { transform: translateY(-1px); }
        .oheo-nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: black;
          transition: width 0.3s ease;
        }

        .oheo-nav-link:hover:after { width: 100%; }
        .oheo-icon-container { transition: all 0.3s ease; }
        .oheo-icon-container:hover { transform: scale(1.1); }
        .oheo-dropdown-item { transition: all 0.2s ease; }
        .oheo-dropdown-item:hover { background-color: rgba(255, 255, 255, 0.1); transform: translateX(5px); }
        .oheo-trial-button:hover { animation: oheo-pulse 1s infinite; }
        .oheo-chevron-icon { transition: transform 0.3s ease; }
        .oheo-chevron-rotate { transform: rotate(180deg); }
        
        .oheo-navbar-nav {
          display: flex;
          align-items: center;
          height: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .oheo-nav-item {
          display: flex;
          align-items: center;
          height: 100%;
          margin: 0 0.5rem;
          color: black !important;
        }

        .oheo-nav-item:hover { background-color: rgba(53, 31, 81, 0.1); border-radius: 4px; }
        .oheo-nav-link:hover { color: #351F51 !important; }
        .oheo-nav-link:hover:after { background-color: #351F51; }

        .oheo-navbar-toggler {
          padding: 0.25rem 0.5rem;
          font-size: 1.25rem;
          line-height: 1;
          background-color: transparent;
          border-radius: 0.25rem;
          transition: box-shadow 0.15s ease-in-out;
          border: 1px solid white;
          cursor: pointer;
          display: none;
        }

        .oheo-navbar-toggler:focus { box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25); outline: none; }
        .oheo-navbar-collapse { display: flex; flex-basis: 100%; flex-grow: 1; align-items: center; }
        .oheo-brand { display: flex; align-items: center; margin-right: 1rem; font-size: 1.25rem; text-decoration: none; white-space: nowrap; }
        .oheo-brand-text { font-size: 1.5rem; font-weight: 700; color: #351F51; }
        .oheo-nav-actions { display: flex; gap: 0.75rem; align-items: center; }

        @media (min-width: 992px) {
          .oheo-navbar-nav {
            justify-content: center !important;
            flex-grow: 1;
            margin-left: 2rem;
          }
          .oheo-brand { margin-right: 0; }
        }

        @media (max-width: 991.98px) {
          .oheo-navbar-toggler { display: block; }
          .oheo-navbar-collapse {
            display: none;
            background-color: #351F51;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 0.5rem;
            width: 100%;
          }
          .oheo-navbar-collapse.show { display: flex; flex-direction: column; align-items: flex-start; }
          .oheo-navbar-nav { flex-direction: column; align-items: flex-start !important; width: 100%; }
          .oheo-nav-item { width: 100%; margin: 0.5rem 0; }
          .oheo-nav-link { padding: 0.5rem 0; }
          .oheo-dropdown-animation { position: static !important; animation: none !important; box-shadow: none !important; }
          .oheo-nav-actions { margin-top: 1rem; width: 100%; justify-content: center; }
        }
      `}</style>

      <div id="navbar-wrapper" className="oheo-navbar-wrapper">
        <nav className="oheo-header-nav">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <a className="oheo-brand" href="#">
                <span className="oheo-brand-text">Oheo</span>
              </a>

              <button
                className="oheo-navbar-toggler"
                type="button"
                onClick={toggleMobileMenu}
                aria-controls="oheoNavbarNav"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation"
              >
                <span className="d-flex justify-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </span>
              </button>

              <div className={`oheo-navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="oheoNavbarNav">
                <ul className="oheo-navbar-nav mb-0">
                  <li className="oheo-nav-item">
                    <a
                      className={`oheo-nav-link ${isSolutionsOpen ? "border-bottom border-black" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggleSolutions() }}
                      style={{ color: "black" }}
                    >
                      <ShoppingBag className="me-1" size={18} color="black" />
                      <span style={{ color: "black" }}>Products</span>
                      <ChevronDown className={`ms-1 oheo-chevron-icon ${isSolutionsOpen ? "oheo-chevron-rotate" : ""}`} size={18} color="black" />
                    </a>
                  </li>

                  <li className="oheo-nav-item">
                    <a className="oheo-nav-link" href="#" style={{ color: "black" }}>
                      <BarChart className="me-1" size={18} color="black" />
                      <span style={{ color: "black" }}>Pricing</span>
                    </a>
                  </li>

                  <li className="oheo-nav-item">
                    <a
                      className={`oheo-nav-link ${isResourcesOpen ? "border-bottom border-black" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggleResources() }}
                      style={{ color: "black" }}
                    >
                      <BookOpen className="me-1" size={18} color="black" />
                      <span style={{ color: "black" }}>Resources</span>
                      <ChevronDown className={`ms-1 oheo-chevron-icon ${isResourcesOpen ? "oheo-chevron-rotate" : ""}`} size={18} color="black" />
                    </a>
                  </li>

                  <li className="oheo-nav-item">
                    <a className="oheo-nav-link" href="#" style={{ color: "black" }}>
                      <Users className="me-1" size={18} color="black" />
                      <span style={{ color: "black" }}>Enterprise</span>
                    </a>
                  </li>

                  <li className="oheo-nav-item">
                    <a
                      className={`oheo-nav-link ${isWhatsNewOpen ? "border-bottom border-black" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggleWhatsNew() }}
                      style={{ color: "black" }}
                    >
                      <Sparkles className="me-1" size={18} color="black" />
                      <span style={{ color: "black" }}>What's new</span>
                      <ChevronDown className={`ms-1 oheo-chevron-icon ${isWhatsNewOpen ? "oheo-chevron-rotate" : ""}`} size={18} color="black" />
                    </a>
                  </li>
                </ul>

                <div className="oheo-nav-actions">
                  <button className="btn text-black border-black oheo-nav-button" onClick={handleLoginClick}>
                    <div className="d-flex align-items-center">
                      <Search size={18} className="me-1" color="black" />
                      Try
                    </div>
                  </button>
                  <button
                    onClick={handleMockClick}
                    className="btn text-white oheo-nav-button oheo-trial-button"
                    style={{ backgroundColor: "#351F51", border: "1px solid black" }}
                  >
                    <div className="d-flex align-items-center">
                      <Sparkles size={18} className="me-1" />
                      Start Free Trial
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {(isResourcesOpen || isSolutionsOpen || isWhatsNewOpen) && (
          <div
            className="w-100 text-white shadow oheo-dropdown-animation"
            style={{
              zIndex: 1000,
              backgroundColor: "#351F51",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              position: window.innerWidth > 991 ? "absolute" : "relative",
            }}
          >
            <div className="container py-5">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle border border-white p-2 me-3 d-flex align-items-center justify-content-center oheo-icon-container" style={{ width: 40, height: 40 }}>
                      <HelpCircle size={20} color="white" />
                    </div>
                    <h3 className="fs-4 fw-medium mb-0">Help and support</h3>
                  </div>
                  <div className="mb-4 oheo-dropdown-item">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <HelpCircle size={16} className="me-2" color="white" />
                        Help and support
                      </div>
                    </h4>
                    <p className="mb-0">Get 24/7 support</p>
                  </div>
                  <div className="mb-4 oheo-dropdown-item">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <BookOpen size={16} className="me-2" color="white" />
                        How-to guides
                      </div>
                    </h4>
                    <p className="mb-0">Read in-depth business guides</p>
                  </div>
                  <div className="mb-4 oheo-dropdown-item">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <GraduationCap size={16} className="me-2" color="white" />
                        Business courses
                      </div>
                    </h4>
                    <p className="mb-0">Learn from proven experts</p>
                  </div>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle border border-white p-2 me-3 d-flex align-items-center justify-content-center oheo-icon-container" style={{ width: 40, height: 40 }}>
                      <Pencil size={20} color="white" />
                    </div>
                    <h3 className="fs-4 fw-medium mb-0">Popular topics</h3>
                  </div>
                  <div className="mb-4 oheo-dropdown-item">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Info size={16} className="me-2" color="white" />
                        What is Oheo?
                      </div>
                    </h4>
                    <p className="mb-0">How our commerce platform works</p>
                  </div>
                  <div className="mb-4 oheo-dropdown-item">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Sparkles size={16} className="me-2" color="white" />
                        Oheo Editions
                      </div>
                    </h4>
                    <p className="mb-0">New, innovative Shopify products</p>
                  </div>
                  <div className="mb-4 oheo-dropdown-item">
                    <h4 className="fs-5 fw-medium mb-1">
                      <div className="d-flex align-items-center">
                        <Users size={16} className="me-2" color="white" />
                        Founder stories
                      </div>
                    </h4>
                    <p className="mb-0">Learn from successful merchants</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pt-4 pt-md-5">
                    <div className="mb-4 oheo-dropdown-item">
                      <h4 className="fs-5 fw-medium mb-1">
                        <div className="d-flex align-items-center">
                          <BarChart size={16} className="me-2" color="white" />
                          Marketing
                        </div>
                      </h4>
                      <p className="mb-0">Build a marketing plan</p>
                    </div>
                    <div className="mb-4 oheo-dropdown-item">
                      <h4 className="fs-5 fw-medium mb-1">
                        <div className="d-flex align-items-center">
                          <Search size={16} className="me-2" color="white" />
                          Ecommerce SEO
                        </div>
                      </h4>
                      <p className="mb-0">Improve your search ranking</p>
                    </div>
                    <div className="mb-4 oheo-dropdown-item">
                      <h4 className="fs-5 fw-medium mb-1">
                        <div className="d-flex align-items-center">
                          <Share2 size={16} className="me-2" color="white" />
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