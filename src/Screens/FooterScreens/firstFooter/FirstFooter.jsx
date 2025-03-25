import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../images/Logo.png'
import Card1 from '../../../images/cardimage1.jpg'
import Card2 from '../../../images/cardimage2.jpg'
import Card3 from '../../../images/cardimage3.jpg'
import Card4 from '../../../images/cardimage4.jpg'
import Card5 from '../../../images/cardimage5.jpg'
import Card6 from '../../../images/cardimage6.jpg'
import './firstFooter.css';
import Footer from "../../../Components/NewFooter/NewFooter";
import OheoHubLanding from "../../LandinPageScreens/onHub/onhub";
const FirstFooter = () => {
  useEffect(() => {
    // Adding Bootstrap JS
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="shopify-partners">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#">
              <span>Oheo</span>
            </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Browse
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Category 1</a></li>
                  <li><a className="dropdown-item" href="#">Category 2</a></li>
                  <li><a className="dropdown-item" href="#">Category 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Service 1</a></li>
                  <li><a className="dropdown-item" href="#">Service 2</a></li>
                  <li><a className="dropdown-item" href="#">Service 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Locations
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Location 1</a></li>
                  <li><a className="dropdown-item" href="#">Location 2</a></li>
                  <li><a className="dropdown-item" href="#">Location 3</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <input type="text" className="search-input" placeholder="Search by service, agency, expertise, etc." />
              </div>
              <a href="#" className="btn btn-shopify">Log in</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Banner */}
      <div className="bg-white py-3">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center">
              <button className="btn btn-shopify rounded-pill">Oheo Partners | Winter '25 is live</button>
              <div className="ms-2 text-primary fw-bold">→</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-5 header-gradient overflow-hidden">
        <div className="container py-4 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7 position-relative" style={{ zIndex: 2 }}>
              <div className="mb-4 opacity-75">Oheo PARTNER DIRECTORY</div>
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">Do more, faster with a Oheo partner</h1>
              <p className="fs-5 mb-4 text-secondary">Find partners who fit your merchant needs. Getting you to focus on running your business.</p>
            </div>
            <div className="col-lg-5 position-relative" style={{ zIndex: 1 }}>
              <div className="animated-dots-background">
                <div className="position-relative h-100">
                  <img 
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/440badc0499b9f199ed6577dea18f9a7.png?height=370, https://cdn.shopify.com/b/shopify-brochure2-assets/440badc0499b9f199ed6577dea18f9a7.png?height=740" 
                    alt="Partner Profile" 
                    className="profile-circle profile-circle-1"
                  />
                  <img 
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/2f1108a5f7d269cbebbb5d480866d252.png?height=540, https://cdn.shopify.com/b/shopify-brochure2-assets/2f1108a5f7d269cbebbb5d480866d252.png?height=1080" 
                    alt="Partner Profile" 
                    className="profile-circle profile-circle-2"
                  />
                  <img 
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/2f1108a5f7d269cbebbb5d480866d252.png?height=540, https://cdn.shopify.com/b/shopify-brochure2-assets/2f1108a5f7d269cbebbb5d480866d252.png?height=1080" 
                    alt="Partner Profile" 
                    className="profile-circle profile-circle-3"
                  />
                  <img 
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/2f1108a5f7d269cbebbb5d480866d252.png?height=540, https://cdn.shopify.com/b/shopify-brochure2-assets/2f1108a5f7d269cbebbb5d480866d252.png?height=1080" 
                    alt="Partner Profile" 
                    className="profile-circle profile-circle-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container py-4">
          <div className="mb-5">
            <div className="text-muted mb-2">BROWSE OFFERINGS</div>
            <h2 className="display-6 fw-bold mb-3">Explore popular services</h2>
            <p className="mb-0 text-secondary">Whether you need help with store setup, design, marketing, or more, find partners for every project.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-custom shadow-sm border-0">
                <div className="card-image" style={{ backgroundImage: `url(${Card2})` }}></div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Store build or redesign</h5>
                  <p className="card-text text-secondary">Partner will design and develop your store from start to finish, bringing your brand vision to life.</p>
                  <a href="#" className="btn btn-outline-shopify mt-2">Browse</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-custom shadow-sm border-0">
                <div className="card-image" style={{ backgroundImage: `url(${Card1})` }}></div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Theme customization</h5>
                  <p className="card-text text-secondary">For businesses that want a custom theme that reflects their brand and enhances your customer's experience.</p>
                  <a href="#" className="btn btn-outline-shopify mt-2">Browse</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-custom shadow-sm border-0">
                <div className="card-image" style={{ backgroundImage: `url(${Card3})` }}></div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Custom app integrations</h5>
                  <p className="card-text text-secondary">Get everything working together. Build a custom app, integrate apps, or connect to other systems.</p>
                  <a href="#" className="btn btn-outline-shopify mt-2">Browse</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-custom shadow-sm border-0">
                <div className="card-image" style={{ backgroundImage: `url(${Card4})` }}></div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Troubleshooting</h5>
                  <p className="card-text text-secondary">Resolve any errors or issues in your store.</p>
                  <a href="#" className="btn btn-outline-shopify mt-2">Browse</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-custom shadow-sm border-0">
                <div className="card-image" style={{ backgroundImage: `url(${Card5})` }}></div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Website audit and optimization strategy</h5>
                  <p className="card-text text-secondary">Improve your store's performance with a comprehensive website audit.</p>
                  <a href="#" className="btn btn-outline-shopify mt-2">Browse</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-custom shadow-sm border-0">
                <div className="card-image" style={{ backgroundImage: `url(${Card6})` }}></div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Product and collection setup</h5>
                  <p className="card-text text-secondary">Set up your products, collections, and optimize them for better visibility.</p>
                  <a href="#" className="btn btn-outline-shopify mt-2">Browse</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-5">
        <div className="container py-4">
          <div className="mb-5">
            <div className="text-muted mb-2">HOW IT WORKS</div>
            <h2 className="display-6 fw-bold">Hire quickly with confidence</h2>
            <p className="mb-0 text-secondary">Partners listed in the directory work independently to provide you with the best service.</p>
          </div>
          
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L20 15L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4V10C4 13.3137 6.68629 16 10 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold">Browse</h4>
                <p className="text-secondary mb-0">Refine your search based on what matters to you, such as skills, location, and services.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold">Evaluate</h4>
                <p className="text-secondary mb-0">Check reviews, apps, examples, questionnaires, and more to make an informed choice.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 2L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 10L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 10L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 17C5.55228 17 6 17.4477 6 18C6 18.5523 5.55228 19 5 19C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold">Connect and collaborate</h4>
                <p className="text-secondary mb-0">Communicate directly with partners on your project terms, and start collaborating.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find the Right Fit */}
      <section className="py-5">
        <div className="container py-4">
          <div className="mb-5">
            <div className="text-muted mb-2">PARTNER TIERS</div>
            <h2 className="display-6 fw-bold">Find the right fit</h2>
            <p className="mb-0 text-secondary">Partners are tiered based on various factors, including their history of experience and proven success on Oheo.</p>
          </div>
          
          <div className="list-group shadow-sm rounded">
            <div className="list-group-item border-0 p-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="feature-icon me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Select partners</h5>
                  <p className="mb-0 text-secondary">Recognized for their experience and expertise.</p>
                </div>
              </div>
              <a href="#" className="btn btn-outline-shopify">Browse</a>
            </div>
            
            <div className="list-group-item border-0 p-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="feature-icon me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Plus partners</h5>
                  <p className="mb-0 text-secondary">An invitation-only tier with a proven track record.</p>
                </div>
              </div>
              <a href="#" className="btn btn-outline-shopify">Browse</a>
            </div>
            
            <div className="list-group-item border-0 p-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="feature-icon me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Premier partners</h5>
                  <p className="mb-0 text-secondary">The most experienced and vetted Oheo partners.</p>
                </div>
              </div>
              <a href="#" className="btn btn-outline-shopify">Browse</a>
            </div>
            
            <div className="list-group-item border-0 p-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="feature-icon me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Platinum partners</h5>
                  <p className="mb-0 text-secondary">Enterprise-ready agencies with a global presence.</p>
                </div>
              </div>
              <a href="#" className="btn btn-outline-shopify">Browse</a>
            </div>
          </div>
        </div>
      </section>

      {/* App Integration */}
      <section className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fs-4 fw-bold mb-3">TWO WAY INTEGRATIONS</h2>
              <h3 className="display-6 fw-bold mb-4">Download apps or use software integrations</h3>
              <p className="mb-4">Find technology solutions that suit your growing business.</p>
              <a href="#" className="btn btn-outline-light">Browse</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
        <OheoHubLanding/>
    </div>
  );
};

export default FirstFooter;
