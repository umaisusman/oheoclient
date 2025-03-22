"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import {
  FaUser,
  FaPlayCircle,
  FaTshirt,
  FaShoppingCart,
  FaTags,
  FaBook,
  FaChartLine,
  FaStore,
  FaGlobe,
  FaEnvelope,
  FaHeadset,
  FaArrowRight,
  FaRocket,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ShopifyNavbar = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }
  const handleStartFreeTrial = () => {
    navigate("/mockup")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4 text-primary" href="#">
          Oheo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            {/* Product Dropdown */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-medium"
                href="#"
                id="startDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaStore className="me-2" />
                Product
              </a>
              <ul className="dropdown-menu dropdown-menu-custom shadow border-0 p-3" aria-labelledby="startDropdown">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">GET STARTED</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaRocket className="me-2 text-primary" /> Start your business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaBullhorn className="me-2 text-primary" /> Build your brand
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaGlobe className="me-2 text-primary" /> Create your website
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaStore className="me-2 text-primary" /> Online store editor
                      </a>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">CUSTOMIZE</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaTshirt className="me-2 text-primary" /> Customize your store
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaBook className="me-2 text-primary" /> Store themes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaChartBar className="me-2 text-primary" /> Find business apps
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaArrowRight className="me-2 text-primary" /> Practice & basics
                      </a>
                    </li>
                  </div>
                </div>
                <div className="dropdown-divider my-3"></div>
                <div className="bg-light p-3 rounded">
                  <h6 className="mb-2">New Feature</h6>
                  <p className="small mb-0">Check out our latest product updates and improvements!</p>
                </div>
              </ul>
            </li>

            {/* Tribe Dropdown */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-medium"
                href="#"
                id="sellDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaShoppingCart className="me-2" />
                Tribe
              </a>
              <ul className="dropdown-menu dropdown-menu-custom shadow border-0 p-3" aria-labelledby="sellDropdown">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">SELL ONLINE</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaShoppingCart className="me-2 text-primary" /> Sell your products
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaGlobe className="me-2 text-primary" /> Sell online or in person
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaUser className="me-2 text-primary" /> Check out customers
                      </a>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">GROW YOUR BUSINESS</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaChartLine className="me-2 text-primary" /> Grow your business online
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaTags className="me-2 text-primary" /> Sell across channels
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaHeadset className="me-2 text-primary" /> Call in person
                      </a>
                    </li>
                  </div>
                </div>
                <div className="dropdown-divider my-3"></div>
                <div className="bg-light p-3 rounded">
                  <h6 className="mb-2">Join Our Community</h6>
                  <p className="small mb-0">Connect with other sellers and grow together!</p>
                </div>
              </ul>
            </li>

            {/* Pricing Dropdown */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-medium"
                href="#"
                id="marketDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaGlobe className="me-2" />
                Pricing
              </a>
              <ul className="dropdown-menu dropdown-menu-custom shadow border-0 p-3" aria-labelledby="marketDropdown">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">MARKETING</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaBullhorn className="me-2 text-primary" /> Market your business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaUser className="me-2 text-primary" /> Reach & retain customers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaGlobe className="me-2 text-primary" /> Market across social
                      </a>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">COMMUNICATION</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaHeadset className="me-2 text-primary" /> Chat with customers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaEnvelope className="me-2 text-primary" /> Shopify Email
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaChartBar className="me-2 text-primary" /> Know your audience
                      </a>
                    </li>
                  </div>
                </div>
                <div className="dropdown-divider my-3"></div>
                <div className="bg-light p-3 rounded">
                  <h6 className="mb-2">Pricing Plans</h6>
                  <p className="small mb-0">Find the perfect plan for your business needs!</p>
                </div>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-medium"
                href="#"
                id="manageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaChartLine className="me-2" />
                Resources
              </a>
              <ul className="dropdown-menu dropdown-menu-custom shadow border-0 p-3" aria-labelledby="manageDropdown">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">BUSINESS MANAGEMENT</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaChartLine className="me-2 text-primary" /> Manage your business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaChartBar className="me-2 text-primary" /> Track sales & analytics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaTags className="me-2 text-primary" /> Manage your finances
                      </a>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary">PERFORMANCE</h6>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaChartBar className="me-2 text-primary" /> Measure performance
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaShoppingCart className="me-2 text-primary" /> Skip orders faster
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded py-2" href="#">
                        <FaHeadset className="me-2 text-primary" /> Customer support
                      </a>
                    </li>
                  </div>
                </div>
                <div className="dropdown-divider my-3"></div>
                <div className="bg-light p-3 rounded">
                  <h6 className="mb-2">Learning Center</h6>
                  <p className="small mb-0">Access guides, tutorials and resources to grow your business!</p>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-primary rounded-pill px-4" onClick={handleLogin}>
            <FaUser className="me-2" />
            Login
          </button>
          <button className="btn btn-primary rounded-pill px-4 shadow-sm" onClick={handleStartFreeTrial}>
            <FaPlayCircle className="me-2" />
            Start Free Trial
          </button>
        </div>
      </div>

      <style jsx>{`
        .dropdown-menu-custom {
          min-width: 500px;
          border-radius: 10px;
          animation: fadeIn 0.3s ease-in-out;
          transform-origin: top center;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-item {
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: rgba(13, 110, 253, 0.1);
          transform: translateX(5px);
        }
        
        .dropdown-header {
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .nav-item.dropdown:hover .dropdown-menu {
          display: block;
        }
        
        .navbar-nav .nav-link {
          display: flex;
          align-items: center;
          padding: 0.8rem 1rem;
          border-radius: 5px;
          transition: all 0.2s ease;
        }
        
        .navbar-nav .nav-link:hover {
          background-color: rgba(13, 110, 253, 0.1);
          color: var(--bs-primary);
        }
        
        .dropdown-divider {
          border-color: rgba(0,0,0,0.05);
        }
      `}</style>
    </nav>
  )
}

export default ShopifyNavbar

